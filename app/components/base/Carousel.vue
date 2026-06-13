<template>
	<div
		ref="root"
		class="fic-carousel relative select-none"
		@mouseenter="pauseAutoplay"
		@mouseleave="resumeAutoplay"
	>
		<!-- Controls -->
		<button
			v-if="showControls"
			class="fic-carousel__nav fic-carousel__nav--prev cursor-pointer"
			type="button"
			aria-label="Previous"
			@click="goPrev"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
				<path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
		<button
			v-if="showControls"
			class="fic-carousel__nav fic-carousel__nav--next cursor-pointer"
			type="button"
			aria-label="Next"
			@click="goNext"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
				<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>

		<!-- Viewport -->
		<div
			ref="viewport"
			class="fic-carousel__viewport overflow-hidden w-full"
			@pointerdown="onPointerDown"
			@pointermove="onPointerMove"
			@pointerup="onPointerUp"
			@pointercancel="onPointerUp"
			@pointerleave="onPointerUp"
			@wheel.prevent="onWheel"
		>
			<!-- Track -->
			<div
				ref="track"
				class="fic-carousel__track flex"
				:style="trackStyle"
				@transitionend="onTransitionEnd"
			>
				<!-- Render clones (head) -->
				<div
					v-for="(item, i) in headClones"
					:key="'h-' + i"
					class="fic-carousel__slide"
					:style="slideStyle"
				>
					<slot name="slide" :item="item" :index="i">
						<img :src="item" class="w-full h-full object-cover rounded-xl" />
					</slot>
				</div>

				<!-- Real slides -->
				<div
					v-for="(item, i) in items"
					:key="'s-' + i"
					class="fic-carousel__slide"
					:style="slideStyle"
				>
					<slot name="slide" :item="item" :index="i">
						<img :src="item" class="w-full h-full object-cover rounded-xl" />
					</slot>
				</div>

				<!-- Render clones (tail) -->
				<div
					v-for="(item, i) in tailClones"
					:key="'t-' + i"
					class="fic-carousel__slide"
					:style="slideStyle"
				>
					<slot name="slide" :item="item" :index="items.length + i">
						<img :src="item" class="w-full h-full object-cover rounded-xl" />
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from 'vue'

const props = defineProps({
	items: {
		type: Array,
		required: true,
	},
	showControls: {
		type: Boolean,
		default: true,
	},
	// { 320: 1, 640: 2, 1024: 3, 1280: 4 }
	breakpoints: {
		type: Object,
		default: () => ({ 320: 1, 640: 2, 1024: 3, 1280: 4 }),
	},
	spaceBetween: {
		type: Number,
		default: 20,
	},
	autoplayMs: {
		type: Number,
		default: 3000,
	},
	height: {
		type: [String, Number],
		default: 250,
	},
})

const root = ref(null)
const viewport = ref(null)
const track = ref(null)

const currentIndex = ref(0) // index within real items
const transitioning = ref(false)
const dragState = ref(null)
let autoplayTimer = null
let lastWheelAt = 0
let holdTimer = null
let holdInterval = null

const slidesPerView = ref(1)
const orderedBreakpoints = computed(() =>
	Object.entries(props.breakpoints)
		.map(([k, v]) => [Number(k), Number(v)])
		.sort((a, b) => a[0] - b[0])
)

function updateSlidesPerView() {
	const width = window.innerWidth
	let per = 1
	for (const [bp, val] of orderedBreakpoints.value) {
		if (width >= bp) per = val
	}
	slidesPerView.value = Math.max(1, per)
}

const cloneCount = computed(() => Math.max(slidesPerView.value, 1))
const headClones = computed(() => props.items.slice(-cloneCount.value))
const tailClones = computed(() => props.items.slice(0, cloneCount.value))

const totalSlides = computed(() => headClones.value.length + props.items.length + tailClones.value.length)

const slideWidthPx = computed(() => {
	if (!viewport.value) return 0
	const gaps = (slidesPerView.value - 1) * props.spaceBetween
	return (viewport.value.clientWidth - gaps) / slidesPerView.value
})

const baseOffset = computed(() => (headClones.value.length * slideWidthPx.value) + (headClones.value.length * props.spaceBetween))
const translateX = ref(0)

const trackStyle = computed(() => ({
	transform: `translateX(${-translateX.value}px)`,
	transition: transitioning.value ? 'transform 450ms ease' : 'none',
	gap: props.spaceBetween + 'px',
	height: typeof props.height === 'number' ? props.height + 'px' : props.height,
}))

const slideStyle = computed(() => ({
	flex: `0 0 ${slideWidthPx.value}px`,
	width: slideWidthPx.value + 'px',
	height: '100%',
}))

function recalcTranslate() {
	translateX.value = baseOffset.value + currentIndex.value * (slideWidthPx.value + props.spaceBetween)
}

function goTo(index, withTransition = true) {
	currentIndex.value = index
	transitioning.value = withTransition
	recalcTranslate()
}

function goNext() {
	if (transitioning.value) return
	transitioning.value = true
	goTo(currentIndex.value + 1, true)
}

function goPrev() {
	if (transitioning.value) return
	transitioning.value = true
	goTo(currentIndex.value - 1, true)
}

function onTransitionEnd() {
	transitioning.value = false
	// If we moved past the real bounds, jump back without transition
	if (currentIndex.value >= props.items.length) {
		goTo(0, false)
	}
	if (currentIndex.value < 0) {
		goTo(props.items.length - 1, false)
	}
}

function startAutoplay() {
	stopAutoplay()
	if (props.autoplayMs <= 0) return
	autoplayTimer = setInterval(() => {
		goNext()
	}, props.autoplayMs)
}
function stopAutoplay() {
	if (autoplayTimer) {
		clearInterval(autoplayTimer)
		autoplayTimer = null
	}
}
function pauseAutoplay() {
	stopAutoplay()
}
function resumeAutoplay() {
	startAutoplay()
}

// Drag / swipe
function onPointerDown(e) {
	if (!viewport.value) return
	viewport.value.setPointerCapture(e.pointerId)
	dragState.value = {
		startX: e.clientX,
		startTranslate: translateX.value,
		hasMoved: false,
	}
	transitioning.value = false
	stopAutoplay()

	// start press-and-hold to go next (mouse left button, no immediate drag)
	if (e.pointerType === 'mouse' && e.button === 0) {
		clearHoldTimers()
		holdTimer = setTimeout(() => {
			// begin continuous next until released
			clearHoldTimers()
			holdInterval = setInterval(() => {
				goNext()
			}, 550)
		}, 300)
	}
}
function onPointerMove(e) {
	if (!dragState.value) return
	const dx = e.clientX - dragState.value.startX
	translateX.value = Math.max(0, dragState.value.startTranslate - dx)
	dragState.value.hasMoved = Math.abs(dx) > 4
	if (dragState.value.hasMoved) {
		// cancel hold if the user started dragging
		clearHoldTimers()
	}
}
function onPointerUp() {
	if (!dragState.value) return
	clearHoldTimers()
	const delta = dragState.value.startTranslate - translateX.value
	const threshold = slideWidthPx.value * 0.25
	if (delta > threshold) {
		goNext()
	} else if (delta < -threshold) {
		goPrev()
	} else {
		goTo(currentIndex.value, true)
	}
	dragState.value = null
	startAutoplay()
}

function clearHoldTimers() {
	if (holdTimer) {
		clearTimeout(holdTimer)
		holdTimer = null
	}
	if (holdInterval) {
		clearInterval(holdInterval)
		holdInterval = null
	}
}

// Wheel navigation (mouse)
function onWheel(e) {
	// throttle so we change slide once per gesture
	const now = Date.now()
	if (now - lastWheelAt < 350 || transitioning.value) return
	lastWheelAt = now

	const absX = Math.abs(e.deltaX)
	const absY = Math.abs(e.deltaY)
	const primary = absX > absY ? e.deltaX : e.deltaY

	if (primary > 0) {
		goNext()
	} else if (primary < 0) {
		goPrev()
	}
}

// Resize
function onResize() {
	updateSlidesPerView()
	transitioning.value = false
	recalcTranslate()
}

onMounted(() => {
	updateSlidesPerView()
	recalcTranslate()
	startAutoplay()
	window.addEventListener('resize', onResize, { passive: true })
})

onUnmounted(() => {
	stopAutoplay()
	clearHoldTimers()
	window.removeEventListener('resize', onResize)
})

watch(() => props.items, () => {
	goTo(0, false)
})
</script>

<style scoped>
.fic-carousel {
	position: relative;
}
.fic-carousel__track {
	will-change: transform;
}
.fic-carousel__nav {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	background: rgba(255, 255, 255, 0.85);
	color: #111827;
	border-radius: 9999px;
	width: 36px;
	height: 36px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
	transition: background 0.2s ease, color 0.2s ease, opacity 0.2s ease;
}
.fic-carousel__nav:hover {
	background: #111827;
	color: #fff;
}
.fic-carousel__nav--prev {
	left: 8px;
}
.fic-carousel__nav--next {
	right: 8px;
}
</style>



import { nextTick, onMounted, onUnmounted, ref } from 'vue'

export const DESKTOP_MARQUEE_SPEED = 0.6

const DRAG_THRESHOLD = 6

export function useDesktopMarquee() {
  const marqueeContainer = ref<HTMLElement | null>(null)
  const track = ref<HTMLElement | null>(null)
  const position = ref(0)
  const halfWidth = ref(0)
  const isDragging = ref(false)
  const dragStartX = ref(0)
  const dragStartPos = ref(0)
  const suppressClick = ref(false)
  const rafId = ref<number | null>(null)

  const setContainerCursor = (value: string) => {
    if (marqueeContainer.value) {
      marqueeContainer.value.style.cursor = value
    }
  }

  const normalise = (pos: number) => {
    const width = halfWidth.value
    if (width <= 0) return 0

    let nextPosition = pos % width
    if (nextPosition > 0) nextPosition -= width

    return nextPosition
  }

  const applyTransform = (pos: number) => {
    if (track.value) {
      track.value.style.transform = `translateX(${pos}px)`
    }
  }

  const measureHalfWidth = () => {
    if (!track.value) return

    halfWidth.value = track.value.scrollWidth / 2
    position.value = normalise(position.value)
    applyTransform(position.value)
  }

  const refresh = async () => {
    await nextTick()
    measureHalfWidth()
  }

  const tick = () => {
    if (!isDragging.value) {
      position.value = normalise(position.value - DESKTOP_MARQUEE_SPEED)
      applyTransform(position.value)
    }

    rafId.value = requestAnimationFrame(tick)
  }

  const start = () => {
    if (typeof window === 'undefined' || rafId.value !== null) return
    rafId.value = requestAnimationFrame(tick)
  }

  const stop = () => {
    if (rafId.value === null) return
    cancelAnimationFrame(rafId.value)
    rafId.value = null
  }

  const onMouseDown = (event: MouseEvent) => {
    if (event.button !== 0) return

    isDragging.value = true
    suppressClick.value = false
    dragStartX.value = event.clientX
    dragStartPos.value = position.value
    setContainerCursor('grabbing')
  }

  const onMouseMove = (event: MouseEvent) => {
    if (!isDragging.value) return

    const delta = event.clientX - dragStartX.value
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      suppressClick.value = true
    }

    position.value = normalise(dragStartPos.value + delta)
    applyTransform(position.value)
  }

  const onMouseUp = () => {
    if (!isDragging.value) return

    isDragging.value = false
    setContainerCursor('grab')

    window.setTimeout(() => {
      suppressClick.value = false
    }, 0)
  }

  const preventDragClick = (event: MouseEvent) => {
    if (!suppressClick.value) return false

    event.preventDefault()
    event.stopPropagation()

    return true
  }

  onMounted(() => {
    setContainerCursor('grab')
    refresh()
    start()
    window.addEventListener('resize', refresh)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', refresh)
    stop()
  })

  return {
    marqueeContainer,
    track,
    refresh,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    preventDragClick,
  }
}

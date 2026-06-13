<template>
<div class="inline-block">
    <ul class="lang-switch  rounded-full p-1 flex items-center gap-2">
        <li v-for="item in localesList" :key="item.code">
            <button
                class="w-8 h-8 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer flex items-center justify-center"
                :class="item.code === currentLocale ? 'bg-[#191C1F] text-white' : 'text-[#191C1F] bg-transparent hover:bg-black/10'"
                @click="onChangeLocale(item.code)"
            >
                {{ item.label }}
            </button>
        </li>
    </ul>
</div>  
</template>

<script setup lang="ts">
import { computed, unref, nextTick, watch } from 'vue';
// use runtime i18n accessor via useNuxtApp to avoid direct vue-i18n types
import { locales, localeCodes, DEFAULT_LOCALE } from '../../config';
const router = useRouter();
const route = useRoute();

const nuxtApp = useNuxtApp();
const i18n = (nuxtApp as any).$i18n;

const localesList = computed(() => locales);
const currentLocale = computed<string>(() => {
    // Prefer reactive i18n locale so active class updates immediately on change
    const i18nLocale = i18n && 'locale' in i18n ? (i18n as any).locale : undefined;
    const val = unref(i18nLocale) as string | undefined;
    if (val && (localeCodes as readonly string[]).includes(val)) return val;

    // Fallback to URL prefix
    const seg = (route.path || '').split('/')[1] || '';
    if ((localeCodes as readonly string[]).includes(seg)) return seg as string;
    return 'ru';
});

// Keep i18n.locale in sync with URL prefix (useful after direct navigation)
watch(
  () => route.path,
  (newPath) => {
    const seg = (newPath || '').split('/')[1] || '';
    if ((localeCodes as readonly string[]).includes(seg)) {
      if (i18n.locale && 'value' in i18n.locale) {
        if (i18n.locale.value !== seg) i18n.locale.value = seg;
      } else if ((i18n as any).locale !== seg) {
        (i18n as any).locale = seg;
      }
    }
  },
  { immediate: true }
);

function buildLocalizedHref(routeObj: any, code: string) {
    const path = (routeObj && routeObj.path) || '/';
    let segments = path.split('/').slice(1);
    if (segments.length > 0 && (localeCodes as readonly string[]).includes(segments[0] || '')) {
        segments = segments.slice(1);
    }
    const suffix = segments.join('/');
    const basePath = '/' + code + (suffix ? '/' + suffix : '');

    // Preserve query and hash
    const searchParams = new URLSearchParams((routeObj && routeObj.query) || {});
    const search = searchParams.toString();
    const hash = (routeObj && routeObj.hash) || '';

    return basePath + (search ? '?' + search : '') + (hash || '');
}

async function onChangeLocale(code: string) {
    // If i18n is not yet available, fall back to URL navigation + hard reload
    if (!i18n) {
        const href = buildLocalizedHref(route as any, code);
        if (typeof window !== 'undefined') window.location.href = href;
        return;
    }

    // Read current locale defensively (supports both ref and plain values)
    const current = i18n.locale && 'value' in i18n.locale
        ? (i18n.locale as any).value as string
        : (i18n as any).locale as string;

    if (code === current) return;

    if (i18n.locale && 'value' in i18n.locale) {
        (i18n.locale as any).value = code;
    } else {
        (i18n as any).locale = code;
    }

    const href = buildLocalizedHref(route as any, code);
    if (typeof window !== 'undefined') window.location.href = href;

    // ensure reactive locale is in sync for active styles after navigation
    if (i18n.locale && 'value' in i18n.locale) {
        (i18n.locale as any).value = code;
    } else {
        (i18n as any).locale = code;
    }
}
</script>

<style lang="scss" scoped>
.lang-switch {
    backdrop-filter: blur(6px);
}
</style>
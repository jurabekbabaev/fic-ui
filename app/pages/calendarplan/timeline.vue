  <template>
    <div class="w-full bg-white mt-[100px]">
      <!-- Title -->
      <h1 class="lg:text-[64px] text-[32px] font-extrabold mb-12 text-black">{{ t('timeline_main_events') }}</h1>
      
      <!-- Timeline Container -->
      <div class="relative">
        <!-- Scrollable area -->
        <div class="overflow-x-auto no-scrollbar">
          <!-- Wide content wrapper -->
          <div class="relative min-w-max pr-6">
            <!-- Timeline Line (sits behind items) -->
            <div class="absolute top-[80px] left-0 right-0 h-0.5 bg-gray-900"></div>

            <!-- Timeline Points and Content -->
            <div class="flex items-start gap-16 ml-[2px]">
              <div
                v-for="(event, idx) in events"
                :key="idx"
                class="flex flex-col items-start relative z-10 lg:min-w-[270px] min-w-[200px]"
              >
                <div class="font-bold mb-6">
                  <div
                    class="text-[#191C1F] font-medium text-[28px] leading-[1]"
                    :class="event.dimmed ? 'opacity-50' : ''"
                  >
                    {{ event.year }}
                  </div>
                  <div
                    class="text-[#191C1F] text-sm font-normal"
                    :class="event.dimmed ? 'opacity-50' : ''"
                  >
                    {{ event.month }}
                  </div>
                </div>

                <!-- Marker -->
                <div
                  class="rounded-[4px] grayLine"
                  :class="[
                    event.filled
                      ? 'w-[19px] h-[19px] bg-gray-900'
                      : 'w-[15px] h-[15px] border-2 border-gray-900 bg-white'
                  ]"
                ></div>

                <!-- Content -->
                <div class="mt-8">
                  <template v-if="event.lines && event.lines.length">
                    <p
                      v-for="(line, i) in event.lines"
                      :key="i"
                      class="text-xl font-medium"
                      :class="event.dimmed ? 'text-[#191C1F] opacity-50' : 'text-gray-900'"
                    >
                      {{ line }}
                    </p>
                  </template>
                  <template v-if="event.links && event.links.length">
                    <div class="mt-1">
                      <a
                        v-for="(link, j) in event.links"
                        :key="j"
                        :href="link.href || '#'"
                        class="text-sm font-normal cursor-pointer hover:opacity-90 block"
                        :class="event.dimmed ? 'text-[#191C1F] opacity-50' : 'text-[#191C1F]'"
                        @click.prevent="handleTimelineLink(link)"
                      >
                        {{ link.label }} ↗
                      </a>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const localePath = useLocalePath()

  function handleTimelineLink(link) {
    if (link?.href) {
      if (typeof window !== 'undefined') {
        window.open(link.href, '_blank', 'noopener,noreferrer')
      }
      return
    }

    if (!link?.target) return

    const to = localePath({
      path: '/plenarysessions',
      query: { target: link.target }
    })

    navigateTo(to)
  }

  const events = computed(() => [
    {
      year: '2026',
      month: t('timeline_month_june'),
      filled: true,
      dimmed: true,
      lines: ['IV', t('timeline_plenary_session')],
      links: [
        { label: t('timeline_learn_more'), target: 'plenary-2026' },
        { label: t('timeline_posts'), target: 'plenary-2026' }
      ]
    },
    {
      year: t('timeline_year_2025'),
      month: t('timeline_month_november'),
      filled: false,
      dimmed: true,
      lines: [t('‎ '), t('timeline_intermediate_session')],
      links: [
        { label: t('timeline_learn_more'), target: 'plenary-2025' },
        { label: t('timeline_posts'), target: 'plenary-2025' }
      ]
    },
    {
      year: t('timeline_year_2025'),
      month: t('timeline_month_november'),
      filled: true,
      dimmed: true,
      lines: [t('‎ '), t('timeline_association')],
      links: [
        { label: t('timeline_pp_226'), href: 'https://www.lex.uz/ru/docs/-7637571' },
        { label: t('timeline_posts'), target: 'plenary-2025' }
      ]
    },
    {
      year: t('timeline_year_2025'),
      month: t('timeline_month_june'),
      filled: true,
      dimmed: true,
      lines: [t('timeline_roman_iii'), t('timeline_plenary_session')],
      links: [{ label: t('timeline_pp_226') }, { label: t('timeline_posts'), target: 'plenary-2025' }]
    },
    {
      year: t('timeline_year_2024'),
      month: t('timeline_month_november'),
      filled: false,
      dimmed: true,
      lines: [t('‎ '), t('timeline_intermediate_session')],
      links: [
        { label: t('timeline_learn_more'), target: 'plenary-2024' },
        { label: t('timeline_posts'), target: 'plenary-2024' }
      ]
    },
    {
      year: t('timeline_year_2024'),
      month: t('timeline_month_may'),
      filled: true,
      dimmed: true,
      lines: [t('timeline_roman_ii'), t('timeline_plenary_session')],
      links: [{ label: t('timeline_pp_170') }]
    },
    {
      year: t('timeline_year_2023'),
      month: t('timeline_month_august'),
      filled: false,
      dimmed: true,
      lines: [t('‎ '), t('timeline_intermediate_session')],
      links: [{ label: t('timeline_learn_more'), target: 'plenary-2024' }]
    },
    {
      year: t('timeline_year_2022'),
      month: t('timeline_month_november'),
      filled: true,
      dimmed: true,
      lines: [t('timeline_roman_i'), t('timeline_plenary_session')],
      links: [{ label: t('timeline_pp_170') }]
    },
    {
      year: t('timeline_year_2019'),
      month: t('timeline_month_november'),
      filled: false,
      dimmed: true,
      lines: [t('‎ '), t('timeline_intermediate_session')],
      links: [{ label: t('timeline_learn_more'), target: 'plenary-2022' }]
    },
    {
      year: t('timeline_year_2019'),
      month: t('timeline_month_november'),
      filled: false,
      dimmed: true,
      lines: [t('‎ '), t('timeline_fic_established')],
      links: [{ label: t('timeline_learn_more'), href: 'https://lex.uz/docs/4593913' }]
    },
  ].reverse())
  </script>
  <style scoped>
  .grayLine {
    transform: rotate(45deg);
  }
  /* hide horizontal scrollbar while keeping scroll */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  </style>

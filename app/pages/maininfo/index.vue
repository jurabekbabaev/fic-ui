<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import Main from '@/assets/images/main-info.png'

const chronologyRows = [
  {
    period: 'Ноябрь 2019',
    event: 'Учреждение Совета (ПП-4519). Первая промежуточная сессия — 20 ноября',
  },
  {
    period: 'Ноябрь 2022',
    event: 'I Пленарная сессия — 16 ноября',
  },
  {
    period: 'Май 2024',
    event: 'II Пленарная сессия — 3 мая, в рамках III ТМИФ. ПП-179 — создание четырёх рабочих групп',
  },
  {
    period: 'Июнь 2025',
    event: 'III Пленарная сессия — 11 июня. ПП-226 — расширение состава рабочих групп',
  },
  {
    period: 'Ноябрь 2025',
    event: 'Регистрация Ассоциации — 4 ноября. Промежуточная сессия — 19 ноября',
  },
  {
    period: 'Июнь 2026',
    event: 'IV Пленарная сессия — 18 июня, в рамках V ТМИФ',
  },
]
</script>
<template>
  <div>
    <client-only>
      <div class="container">
        <h1
          class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[100px] mb-14"
        >
          {{ t('История СИИ') }}
        </h1>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-20">
          <div>
            <p class="text-base text-[#505A63] font-normal pb-5">
              {{ t('Совет иностранных инвесторов при Президенте Республики Узбекистан — институциональная площадка для прямого диалога между Правительством Узбекистана и инвесторами, осуществляющими деятельность в стране. Учреждён Постановлением Президента № ПП-4519 от 13 ноября 2019 года.') }}
            </p>
            <p class="text-base text-[#505A63] font-normal pb-5">
              {{ t('Деятельность Совета направлена на выявление ключевых препятствий для привлечения инвестиций, разработку совместно с государственными органами решений по их устранению и обеспечение благоприятного инвестиционного климата. Председатель Совета — Президент Республики Узбекистан; сопредседатель — Президент ЕБРР.') }}
            </p>
            <section class="historyTimeline">
              <div class="historyTimeline__table">
                <div
                  v-for="row in chronologyRows"
                  :key="row.period"
                  class="historyTimeline__row"
                >
                  <div class="historyTimeline__period">{{ t(row.period) }}</div>
                  <div class="historyTimeline__event">{{ t(row.event) }}</div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <img :src="Main" alt="">
          </div>
        </div>
        <LocaleInvestors class="mb-14" />
        <div
          class=" flex flex-col gap-3 border-[#191C1F14] pt-4 sm:flex-row sm:flex-wrap"
        >
          <a
            href="https://lex.uz/docs/4593913"
            target="_blank"
            rel="noreferrer"
            class="btn btn-primary"
          >
            {{ t('Подробно') }}
          </a>
        </div>
      </div>
    </client-only>
  </div>
</template>


<style scoped>
.historyTimeline {
  margin-top: 12px;
  max-width: 760px;
}

.historyTimeline__table {
  border-top: 1px solid rgba(25, 28, 31, 0.16);
}

.historyTimeline__row {
  display: grid;
  grid-template-columns: minmax(140px, 0.3fr) 1fr;
  column-gap: 28px;
}

.historyTimeline__row {
  align-items: start;
  border-bottom: 1px solid rgba(25, 28, 31, 0.08);
  min-height: 64px;
  padding: 16px 0;
}

.historyTimeline__row:last-child {
  border-bottom: none;
}

.historyTimeline__period {
  color: #191c1f;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.6;
}

.historyTimeline__event {
  color: #505a63;
  font-size: 15px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .historyTimeline {
    margin-top: 24px;
  }

  .historyTimeline__row {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 14px 0;
    row-gap: 6px;
  }

  .historyTimeline__period {
    font-size: 15px;
  }

  .historyTimeline__event {
    font-size: 15px;
  }
}
</style>

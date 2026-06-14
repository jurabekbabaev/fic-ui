<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import PageHero from "~/components/shared/PageHero.vue";
import HeroImage from "@/assets/images/plenarysessions/ps_5.png";

const { t } = useI18n();

// Lead paragraph (rendered in the intro card).
const lead =
  "18 мая Совет иностранных инвесторов при Президенте Республики Узбекистан провёл Промежуточную сессию с Заместителем Премьер-министра Республики Узбекистан Е.П. господином Джамшидом Ходжаевым посвященную рассмотрению инициатив членов Совета в преддверии IV Пленарного заседания.";

// Body paragraphs before the highlighted outcome.
const bodyBefore: string[] = [
  "Тематические блоки охватили приоритеты, которые члены Совета определили как ключевые для следующего этапа развития инвестиционного климата страны, — от регуляторной и административной реформы до отраслевых и трансграничных вопросов.",
  "Каждый блок открывался предложениями руководителей рабочих групп, после чего следовал ответ правительственной стороны и открытая дискуссия с участниками.",
];

// Highlighted outcome.
const outcome =
  "Итог: инициативы получили поддержку Правительства по всем направлениям, а пути их реализации найдут отражение в документах Пленарного заседания.";

// Body paragraphs after the highlighted outcome.
const bodyAfter: string[] = [
  "Именно для этого и создавался СИИ — Совет, где приоритеты инвесторов услышаны на высшем уровне и превращаются в конкретные обязательства.",
  "Совет переходит к подготовке Четвёртого пленарного заседания, которое состоится 18 июня 2026 года в Ташкенте под председательством Е.П. Президента Шавката Мирзиёева и сопредседательством Президента ЕБРР г-жи Одиль Рено-Бассо.",
  "С благодарностью Заместителю Премьер-министра Ходжаеву, г-ну Анди Аранитаси (руководитель представительства ЕБРР в Узбекистане) за модерирование, а также членам СИИ, чья подготовка определила результат дня.",
];

const localePath = useLocalePath();
const goBack = async () => {
  await navigateTo(localePath("/interimsession"));
};
</script>

<template>
  <div class="pb-20 lg:pb-28">
    <client-only>
      <PageHero title="VI промежуточная сессия Совета" :image="HeroImage" />

      <div class="container">
        <!-- Back link -->
        <div class="mb-8">
          <button
            type="button"
            class="btn btn-secondary btn-sm w-fit"
            @click="goBack"
          >
            ← {{ t("Назад") }}
          </button>
        </div>

        <!-- Section title -->
        <h2 class="section-head">
          {{ t("18 мая 2026") }}
        </h2>

        <!-- Lead -->
        <div class="intro-card mt-5 lg:mt-6">
          <p class="lead-text">{{ t(lead) }}</p>
        </div>

        <!-- Article body -->
        <article class="prose-body mt-10 lg:mt-12">
          <p
            v-for="(paragraph, index) in bodyBefore"
            :key="`b-${index}`"
            class="prose-body__p"
          >
            {{ t(paragraph) }}
          </p>

          <!-- Outcome highlight -->
          <div class="outcome-card">
            <p class="outcome-card__text">{{ t(outcome) }}</p>
          </div>

          <p
            v-for="(paragraph, index) in bodyAfter"
            :key="`a-${index}`"
            class="prose-body__p"
          >
            {{ t(paragraph) }}
          </p>
        </article>
      </div>
    </client-only>
  </div>
</template>

<style scoped>
.section-head {
  font-size: clamp(18px, 2.4vw, 22px);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #191c1f;
  padding-bottom: 14px;
  border-bottom: 2px solid #191c1f;
}

.intro-card {
  border: 1px solid rgba(25, 28, 31, 0.08);
  border-radius: 24px;
  background: #f7f7f7;
  padding: 28px;
}

@media (min-width: 1024px) {
  .intro-card {
    padding: 40px;
  }
}

.lead-text {
  font-size: 17px;
  font-weight: 500;
  line-height: 1.7;
  color: #191c1f;
}

@media (min-width: 1024px) {
  .lead-text {
    font-size: 20px;
  }
}

.prose-body__p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.85;
  color: #505a63;
  text-align: justify;
}

.prose-body__p + .prose-body__p {
  margin-top: 22px;
}

@media (min-width: 1024px) {
  .prose-body__p {
    font-size: 18px;
  }
}

.outcome-card {
  margin: 32px 0;
  border-left: 4px solid #191c1f;
  border-radius: 16px;
  background: #f7f7f7;
  padding: 24px 28px;
}

.outcome-card__text {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.7;
  color: #191c1f;
}

@media (min-width: 1024px) {
  .outcome-card {
    margin: 40px 0;
    padding: 28px 32px;
  }

  .outcome-card__text {
    font-size: 18px;
  }
}
</style>

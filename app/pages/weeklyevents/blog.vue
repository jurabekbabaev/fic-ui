<script setup>
import { useI18n } from "vue-i18n";
import image1 from "@/assets/images/blogtest/DSC07543.png";
import image2 from "@/assets/images/blogtest/DSC08710.JPG";
import image3 from "@/assets/images/blogtest/DSC09275.JPG";
import image4 from "@/assets/images/blogtest/DSC09289.JPG";
import image5 from "@/assets/images/blogtest/DSC09306.JPG";
import image6 from "@/assets/images/blogtest/DSC09323.JPG";

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const models = [
  {
    id: 1,
    date: "03.04.2026",
    image_path: image1,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae tortor vitae mi luctus facilisis. Praesent feugiat, neque at porttitor viverra, arcu risus placerat nisl, a luctus nibh justo vitae lectus. Donec vel sem sed augue dictum malesuada. Sed dignissim, nisl non facilisis aliquet, sapien metus luctus libero, vitae gravida mi magna vel purus.",
  },
  {
    id: 2,
    date: "07.04.2026",
    image_path: image2,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed arcu id arcu laoreet volutpat. Curabitur vitae nibh quis velit interdum blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tempor, sem id pulvinar consequat, mauris arcu faucibus quam, non pretium lorem nibh eget sapien.",
  },
  {
    id: 3,
    date: "11.04.2026",
    image_path: image3,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae tortor vitae mi luctus facilisis. Praesent feugiat, neque at porttitor viverra, arcu risus placerat nisl, a luctus nibh justo vitae lectus. Donec vel sem sed augue dictum malesuada. Sed dignissim, nisl non facilisis aliquet, sapien metus luctus libero, vitae gravida mi magna vel purus.",
  },
  {
    id: 4,
    date: "14.04.2026",
    image_path: image4,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Praesent feugiat neque at porttitor viverra. Donec ut neque a arcu sagittis ultrices. Sed at lacus ut enim tempor placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus faucibus augue eu lorem tincidunt, vitae convallis purus suscipit. Aenean pulvinar sem in arcu interdum.",
  },
  {
    id: 5,
    date: "18.04.2026",
    image_path: image5,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi tincidunt, arcu sit amet pharetra dictum, mi lectus feugiat erat, non consequat lacus magna vel est. Nunc volutpat erat in tortor suscipit, sed hendrerit neque dignissim. Proin accumsan lacus ac luctus consequat. Sed euismod risus in ipsum rhoncus.",
  },
  {
    id: 6,
    date: "22.04.2026",
    image_path: image6,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi tincidunt, arcu sit amet pharetra dictum, mi lectus feugiat erat, non consequat lacus magna vel est. Nunc volutpat erat in tortor suscipit, sed hendrerit neque dignissim. Proin accumsan lacus ac luctus consequat. Sed euismod risus in ipsum rhoncus.",
  },
];

const View = (item) => {
  const to = localePath({
    path: "/weeklyevents/blog",
    query: { id: item.id },
  });
  navigateTo(to);
};

const blogData = computed(() => {
  return models.find((item) => String(item.id) === String(route.query.id));
});
</script>

<template>
  <div>
    <div class="container">
      <template v-if="blogData">
        <div class="w-auto flex flex-col items-center">
          <img
            :src="blogData.image_path"
            alt=""
            class="lg:w-3/4 sm:w-full mt-24 object-cover"
            style="aspect-ratio: 16/9"
          />
          <div class="mt-10 lg:w-2/3 sm:w-full">
            <h4 class="text-[32px] font-black text-[#191C1F]">
              {{ blogData.title }}
            </h4>
            <p class="text-base font-normal text-[#505A63]">
              {{ blogData.date }}
            </p>
            <div class="text-base font-normal text-[#505A63] block mt-3.5">
              {{ blogData.content }}
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <h1
          class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[100px] mb-14"
        >
          {{ t("Блог") }}
        </h1>

        <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          <div
            class="mb-4 rounded-bl-xl rounded-br-xl"
            v-for="(item, i) in models"
            :key="i"
            style="background: rgb(247, 247, 247)"
          >
            <div class="card-item cursor-pointer" @click="View(item)">
              <div
                class="card-item-image"
                :style="{ backgroundImage: `url(${item.image_path})` }"
              ></div>
              <div class="card-item-body">
                <div class="font-medium text-grey mb-1">
                  {{ item.date }}
                </div>
                <div
                  class="font-medium mb-2 lg:text-[24px] text-xl leading-normal"
                >
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style></style>

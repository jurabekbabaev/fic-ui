<script setup></script>

<template>
  <div id="adminSidebar">
    <div class="mb-4">
      <NuxtLink to="/">
        <img :src="img('logo-black.svg')" alt="" class="w-[200px]" />
      </NuxtLink>
    </div>
    <div class="sidebarNav">
      <ul>
        <li>
          <NuxtLink to="/admin/blogs/list"> Статьии </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/news/list"> Новости </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/council-members/list">
            Участники Совета
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/experts/list"> Эксперты </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/weekly-events/list">
            Еженедельные события
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/expert-feedbacks/list">
            Голос членов СИИ
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/uzbek-experts/list">
            Узбекская сторона
          </NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink to="/admin/feedback">
            Обращений
          </NuxtLink>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<style></style>

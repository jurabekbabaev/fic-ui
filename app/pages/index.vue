<template>
  <div>
    <Banner />
    <ForeignInvestorsMembers />
    <ForeignInvestorsMembersUzb />
    <VideoSection />
    <ForeignInvestors />
    <PlanCalendar />
    <WorkingGroups />
    <Blog id="blog" />
    <!-- <Almanac /> -->
    <InvestmentStats class="mt-[50px] md:mt-[100px] mb-[30px] md:mb-[60px]" />
    <News />
    <AboutUs />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'home',
})
import Banner from '@/components/home/NewBanner.vue'
import ForeignInvestors from '@/components/home/ForeignInvestors.vue'
import ForeignInvestorsMembers from '@/components/home/ForeignInvestorsMembers.vue'
import ForeignInvestorsMembersUzb from '@/components/home/ForeignInvestorsMembersUzb.vue'
import VideoSection from '@/components/home/VideoSection.vue'
import PlanCalendar from '@/components/home/PlanCalendar.vue'
import WorkingGroups from '@/components/home/WorkingGroups.vue'
import Blog from '@/components/home/Blog.vue'
import InvestmentStats from '@/components/home/InvestmentStats.vue'
import News from '@/components/home/News.vue'
import AboutUs from '@/components/home/AboutUs.vue'
</script>

<style>

</style>

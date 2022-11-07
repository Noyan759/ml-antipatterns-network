<script setup lang="ts">
import AntipatternsNetworkPositionGraph from '@/components/AntipatternsNetworkPositionGraph.vue'
import antipatterns from '@/assets/antipatterns';
import type { AntiPattern } from "../common/anti-pattern";
import { setRelatedAntiPatterns } from "@/utils/anti-pattern";

// const antiPatterns: AntiPattern[] =
setRelatedAntiPatterns(antipatterns as AntiPattern[])

</script>

<template>
  <AntipatternsNetworkPositionGraph :antipatterns="antipatterns" />
</template>

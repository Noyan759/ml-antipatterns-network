<script setup lang="ts">
import AntipatternsNetworkGraph from '@/components/AntipatternsNetworkGraph.vue'
import AntipatternsD3NetworkGraph from '@/components/AntipatternsD3NetworkGraph.vue'
import antipatterns from '@/assets/antipatterns';
import type { AntiPattern } from "../common/anti-pattern";
import { setRelatedAntiPatterns } from "@/utils/anti-pattern";

// const antiPatterns: AntiPattern[] =
setRelatedAntiPatterns(antipatterns as AntiPattern[])

</script>

<template>
  <AntipatternsNetworkGraph :antipatterns="antipatterns" />
  <!-- <AntipatternsD3NetworkGraph :antipatterns="antipatterns" /> -->
</template>

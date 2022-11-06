<script setup lang="ts">
import AntipatternsNetworkGraph from '@/components/AntipatternsNetworkGraph.vue'
import antipatterns from '@/assets/antipatterns';
</script>

<template>
  <AntipatternsNetworkGraph :antipatterns="antipatterns"/>
</template>
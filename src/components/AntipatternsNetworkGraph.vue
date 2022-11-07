<script setup lang="ts">
import { getNodesAndEdges } from "@/utils/network-graph";
import type { PropType } from "vue"
import type { AntiPattern, RelatedItem } from "../common/anti-pattern";

// Props
const props = defineProps({
  antipatterns: {
    type: Array as PropType<Array<AntiPattern>>,
    required: true
  }
})

const { nodes, edges } = getNodesAndEdges(props.antipatterns);

</script>

<template>
  <v-network-graph :nodes="nodes" :edges="edges" />
</template>

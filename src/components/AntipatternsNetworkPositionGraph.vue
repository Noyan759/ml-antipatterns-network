<script setup lang="ts">
import type { PropType, Ref } from "vue"
import { watch } from "vue"
import { reactive } from "vue"
import { ref } from "vue"
import * as vNG from "v-network-graph"
import type { AntiPattern } from "@/common/anti-pattern"
import { getNodesAndEdges, nodeToLayouts } from "@/utils/network-graph"

// Props
const props = defineProps({
  antipatterns: {
    type: Array as PropType<Array<AntiPattern>>,
    required: true
  }
})

let response = getNodesAndEdges(props.antipatterns);

let nodes: Ref<vNG.Nodes> = ref(response.nodes)
let edges: Ref<vNG.Edges> = ref(response.edges)
const layouts: Ref<vNG.Layouts> = ref(nodeToLayouts(nodes.value));

const configs = reactive(
  vNG.defineConfigs({
    node: {
      normal: {
        color: "#4466cc88",
      },
    },
    edge: {
      selectable: true,
      // normal: {
      //   width: 3,
      //   color: "#4466cc",
      //   dasharray: "0",
      //   linecap: "butt",
      //   animate: false,
      //   animationSpeed: 50,
      // },
      // hover: {
      //   width: 4,
      //   color: "#3355bb",
      //   dasharray: "0",
      //   linecap: "butt",
      //   animate: false,
      //   animationSpeed: 50,
      // },
      // selected: {
      //   width: 3,
      //   color: "#dd8800",
      //   dasharray: "6",
      //   linecap: "round",
      //   animate: false,
      //   animationSpeed: 50,
      // },
      gap: 5,
      type: "straight",
      margin: 2,
      marker: {
        source: {
          type: "none",
          width: 4,
          height: 4,
          margin: -1,
          units: "strokeWidth",
          color: null,
        },
        target: {
          type: "arrow",
          width: 4,
          height: 4,
          margin: -1,
          units: "strokeWidth",
          color: null,
        },
      },
    },
  })
)

const zoomLevel = ref(1)

const filters = ["All", "Connected", "Disconnected"];

const selectedFilter = ref("All");

const filterAntipatterns = (antipatterns: AntiPattern[], filter: string): AntiPattern[] => {
  switch (filter) {
    case "Connected": {
      return antipatterns.filter((antipattern) => (antipattern.relatedItems && antipattern.relatedItems.length));
    }
    case "Disconnected": {
      return antipatterns.filter((antipattern) => (!antipattern.relatedItems || !antipattern.relatedItems.length));
    }
    default: {
      return antipatterns;
    }
  }
}

watch(selectedFilter, () => {
  let res = getNodesAndEdges(filterAntipatterns(props.antipatterns, selectedFilter.value));
  nodes.value = res.nodes;
  edges.value = res.edges;
  layouts.value = nodeToLayouts(nodes.value);
});
// ref="graph"
const graph = ref<vNG.Instance>()
</script>

<template>
  <div class="control-panel">
    <v-row justify="center">
      <v-col md="1">
        <v-row>
          <v-select :items="filters" v-model="selectedFilter" label="Filter"></v-select>
        </v-row>
      </v-col>
      <v-col md="1" />
      <v-col md="2">
        <v-row justify="space-around">
          <v-btn @click="graph?.panToCenter()">To center</v-btn>
          <v-btn @click="graph?.fitToContents()">Fit</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>

  <v-network-graph ref="graph" v-model:zoom-level="zoomLevel" :nodes="nodes" :edges="edges" :layouts="layouts"
    :configs="configs" />
</template>

<style scoped>
.control-panel {
  padding-top: 30px;
}
</style>
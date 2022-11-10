<script setup lang="ts">
import type { PropType } from "vue"
import { reactive } from "vue"
import { ref } from "vue"
import * as vNG from "v-network-graph"
import type { AntiPattern, RelatedItem } from "@/common/anti-pattern"
import type { Edges, Layouts, Nodes } from "v-network-graph"
import { getNodesAndEdges, nodeToLayouts } from "@/utils/network-graph"

// Props
const props = defineProps({
  antipatterns: {
    type: Array as PropType<Array<AntiPattern>>,
    required: true
  }
})

const { nodes, edges } = getNodesAndEdges(props.antipatterns);
const layouts: Layouts = nodeToLayouts(nodes);

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

// ref="graph"
const graph = ref<vNG.Instance>()
</script>

<template>
  <div class="control-panel">
    <v-row justify="center">
      <v-col md="3">
        <v-row justify="space-around">
          <v-btn @click="graph?.panToCenter()">To center</v-btn>
          <v-btn @click="graph?.fitToContents()">Fit</v-btn>
          <v-btn @click="graph?.zoomIn()">Zoom In</v-btn>
          <v-btn @click="graph?.zoomOut()">Zoom Out</v-btn>
        </v-row>
      </v-col>
      <v-col md="1" />
      <v-col md="4">
        <v-row>
          <v-list-subheader>Zoom slider</v-list-subheader>
          <v-slider v-model="zoomLevel" class="align-center" :max="1" :min="16" hide-details>
            <template v-slot:append>
              <v-text-field v-model="zoomLevel" class="mt-0 pt-0" hide-details single-line type="number"
                style="width: 60px"></v-text-field>
            </template>
          </v-slider>
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
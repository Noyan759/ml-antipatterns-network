<script setup lang="ts">
import type { PropType } from "vue"
import { reactive, ref, watch, computed } from "vue"
import * as vNG from "v-network-graph"
import {
  ForceLayout,
} from "v-network-graph/lib/force-layout"
import type { AntiPattern, RelatedItem } from "@/common/anti-pattern"
import type { Nodes, Edges } from "v-network-graph";
import { getNodesAndEdges } from "@/utils/network-graph"

// Props
const props = defineProps({
  antipatterns: {
    type: Array as PropType<Array<AntiPattern>>,
    required: true
  }
})

const { nodes, edges } = getNodesAndEdges(props.antipatterns);

const nodeCount = ref(30)
// const nodes = reactive({})
// const edges = reactive({})

// initialize network
// buildNetwork(nodeCount.value, nodes, edges)

// watch(nodeCount, () => {
//   buildNetwork(nodeCount.value, nodes, edges)
// })

const d3ForceEnabled = computed({
  get: () => configs.view.layoutHandler instanceof ForceLayout,
  set: (value: boolean) => {
    if (value) {
      configs.view.d3ForceEnabled = new ForceLayout()
    } else {
      configs.view.layoutHandler = new vNG.SimpleLayout()
    }
  },
})

const configs = reactive(
  vNG.defineConfigs({
    view: {
      layoutHandler: new ForceLayout(),
    },
    node: {
      label: {
        visible: true,
      },
    },
    edge: {
      selectable: true,
    },
  })
)

// function buildNetwork(count: number, nodes: vNG.Nodes, edges: vNG.Edges) {
//   const idNums = [...Array(count)].map((_, i) => i)

//   // nodes
//   const newNodes = Object.fromEntries(idNums.map(id => [`node${id}`, {}]))
//   Object.keys(nodes).forEach(id => delete nodes[id])
//   Object.assign(nodes, newNodes1)

//   // edges
//   const makeEdgeEntry = (id1: number, id2: number) => {
//     return [`edge${id1}-${id2}`, { source: `node${id1}`, target: `node${id2}` }]
//   }
//   const newEdges = Object.fromEntries([
//     ...idNums
//       .map(n => [n, (Math.floor(n / 5) * 5) % count])
//       .map(([n, m]) => (n === m ? [n, (n + 5) % count] : [n, m]))
//       .map(([n, m]) => makeEdgeEntry(n, m)),
//   ])
//   Object.keys(edges).forEach(id => delete edges[id])
//   Object.assign(edges, newEdges1)
// }
</script>

<template>
  <div class="demo-control-panel">
    <label>Node count:</label>
    <v-text-field v-model="nodeCount" single-line type="number" :min="3" :max="200"/>
    <!-- <el-input-number v-model="nodeCount" :min="3" :max="200" /> -->
    <label>(&lt;= 200)</label>
    <v-checkbox
      v-model="d3ForceEnabled"
      label="D3-Force enabled"
    ></v-checkbox>
  </div>

  <v-network-graph :zoom-level="0.5" :nodes="nodes" :edges="edges" :configs="configs" />
</template>

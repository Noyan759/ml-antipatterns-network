<script setup lang="ts">
import { reactive, ref, watch } from "vue"
import type { PropType } from "vue"
import * as vNG from "v-network-graph"
import {
  ForceLayout,
  // ForceNodeDatum,
  // ForceEdgeDatum,
} from "v-network-graph/lib/force-layout"
import type { AntiPattern } from "../common/anti-pattern";

// Props
const props = defineProps({
  antipatterns: Array as PropType<Array<AntiPattern>>
})
console.log("Props.antipatterns - ", props.antipatterns)


const nodeCount = ref(10)
const nodes = reactive({})
const edges = reactive({})

// initialize network
buildNetwork(nodeCount.value, nodes, edges)

watch(nodeCount, () => {
  buildNetwork(nodeCount.value, nodes, edges)
})

const configs = reactive(
  vNG.defineConfigs({
    view: {
      layoutHandler: new ForceLayout({
        positionFixedByDrag: false,
        positionFixedByClickWithAltKey: true,
        // * The following are the default parameters for the simulation.
        // * You can customize it by uncommenting below.
        // createSimulation: (d3, nodes, edges) => {
        //   const forceLink = d3.forceLink<ForceNodeDatum, ForceEdgeDatum>(edges).id(d => d.id)
        //   return d3
        //     .forceSimulation(nodes)
        //     .force("edge", forceLink.distance(100))
        //     .force("charge", d3.forceManyBody())
        //     .force("collide", d3.forceCollide(50).strength(0.2))
        //     .force("center", d3.forceCenter().strength(0.05))
        //     .alphaMin(0.001)
        // }
      }),
    },
    node: {
      label: {
        visible: false,
      },
    },
  })
)

function buildNetwork(count: number, nodes: vNG.Nodes, edges: vNG.Edges) {
  const idNums = [...Array(count)].map((_, i) => i)

  // nodes
  const newNodes = Object.fromEntries(idNums.map(id => [`node${id}`, {}]))
  Object.keys(nodes).forEach(id => delete nodes[id])
  Object.assign(nodes, newNodes)

  // edges
  const makeEdgeEntry = (id1: number, id2: number) => {
    return [`edge${id1}-${id2}`, { source: `node${id1}`, target: `node${id2}` }]
  }
  const newEdges = Object.fromEntries([
    ...idNums
      .map(n => [n, (Math.floor(n / 5) * 5) % count])
      .map(([n, m]) => (n === m ? [n, (n + 5) % count] : [n, m]))
      .map(([n, m]) => makeEdgeEntry(n, m)),
  ])
  Object.keys(edges).forEach(id => delete edges[id])
  Object.assign(edges, newEdges)

  console.log("buildNetwork count - ", count)
  // console.log("buildNetwork newNodes - ", newNodes.node0)
  // console.log("buildNetwork newEdges - ", newEdges)
  // console.log("buildNetwork nodes - ", nodes)
  // console.log("buildNetwork edges - ", edges)
}
</script>

<template>
  <div class="demo-control-panel">
    <label>Node count:</label>
    <v-text-field v-model="nodeCount" hide-details single-line type="number" />
    <!-- <el-input-number v-model="nodeCount" :min="3" :max="200" /> -->
    <label>(&lt;= 200)</label>
  </div>

  <v-network-graph :zoom-level="0.5" :nodes="nodes" :edges="edges" :configs="configs" />
</template>
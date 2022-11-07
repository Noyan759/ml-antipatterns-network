import type { AntiPattern, RelatedItem } from "@/common/anti-pattern";
import type { Edges, Layouts, Nodes } from "v-network-graph";

export const getNodesAndEdges = (antipatterns: AntiPattern[]) => {
    const nodes: Nodes = {}
    const edges: Edges = {}
    antipatterns.forEach((antipattern: AntiPattern, index) => {
        nodes[antipattern.name] = {
            name: antipattern.name
        }
        antipattern.relatedItems?.forEach((relatedItem: RelatedItem) => {
            edges[`${antipattern.name}_${relatedItem.name}`] = {
                source: relatedItem.name,
                target: antipattern.name
            }
        })
    })
    return {
        nodes,
        edges
    }
}

export const nodeToLayouts = (nodes: Nodes): Layouts => {
    const layouts: Layouts = {
        nodes: {}
    };
    let x = 0, y = 0;
    Object.keys(nodes).forEach((node, index) => {
        layouts.nodes[node] = {
            x,
            y: index % 2 == 0 ? 0 : 100
        }
        x += 100;
    })
    return layouts;
}

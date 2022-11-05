export default {
  "name": "Unstable Data Dependencies",
  "aliases": [],
  "description": "To continue with the previously mentioned analogy of machine learning packages being a data blender that mixes features and signals together. Often times these signals come from external systems. This creates a dependency on an ML model over those external systems as their stability correlates with the stability of the consuming system. This pattern leaves us with the \"Unstable Data Dependencies\" antipattern.",
  "causes": "The signals consumed from external systems change behavior over time, hence unstable. This happens either implicitly when the source or the ML model from which the signal is consumed updates itself or explicitly when the source and the consuming model have separate ownerships. In such cases, new versions of the signal being consumed can be rolled out in terms of changes and improvements while the consuming model has to suffer for those improvements. In short, causing the CACE principle, changing anything changes everything.",
  "impact": "The infamous CACE principle, Change Anything Changes Everything, applies here as well[P3]. The so-called changes or updates to input signals might have hazardous effects on the consuming machine learning model that is pricey to diagnose and address. An example in this regard can be taken from a previously miscalibrated signal. The consuming model was built, trained, and fit to the miscalibrated signal. Recalibrating or fixing the same signal can cause the consuming ML model to react abruptly and produce unexpected results.",
  "category": "Development",
  "detectionStrategies": "",
  "mitigationStrategies": "Sculley stated that a mitigation strategy to tackle such unstable data dependencies is to maintain versioned copies of the input signals, specifically the ones taken from external machine learning systems or sources. This will immunize the consuming model of the changes in input signals in the source system. Later on, explicit conscious steps can be taken to update the input signal version and the consuming ML model accordingly.",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html}, volume = {28}, year = {2015} }"
  ],
  "tags": [
    "Development"
  ],
  "relatedItems": [
    {
      "relation": "relates",
      "name": "Feature Entanglement"
    },
    {
      "relation": "relates",
      "name": "Undeclared Consumers"
    }
  ]
}

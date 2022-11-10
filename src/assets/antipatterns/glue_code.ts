export default {
  "name": "Glue Code",
  "aliases": [],
  "description": "Glue code is a piece of code that connects or, as the term suggests, glues incompatible software components. Its sole purpose is to accommodate different parts of code that would be otherwise incompatible. Glue code design pattern requires a lot of supporting code to interact and process data flow in the system incorporating those external software components. It also happens in data and workflow pipelines comprising several modular steps that require glue code to transmit data flow in between steps and function properly.",
  "causes": "In the machine learning world, a lot of general-purpose solutions are bundled into self-contained collections. ML researchers and engineers tend to use such generic packages in abundance. This gives rise to a glue code system design pattern. Moreover, it's also mentioned that Ml systems constitute a very small fraction (around 5%) of actual machine learning code and the remaining infrastructure (around 95%) is just glue code. This shows the seriousness of this antipattern in machine learning systems.",
  "impact": "Glue code incurs a high cost in terms of the amount of wrapper code that is needed to adapt generic packages. In the long run, glue code incurs high cost as they limit the system's ability to the functionality of specific packages. It creates hurdles to achieving domain-specific functionalities while using generic-purpose packages, hence hindering improvement.",
  "category": [
    "Development"
  ],
  "detectionStrategies": "",
  "mitigationStrategies": "In some cases, it might be even less costly to develop a clean native solution rather than using a generic package that comes with a lot of glue code. If the usage of generic packages is inevitable then an effective approach for combatting glue code is to wrap generic black-box packages into APIs. This minimizes the cost of glue code and makes the system more reusable.",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html}, volume = {28}, year = {2015} }"
  ],
  "tags": [
    "Development"
  ],
  "relatedItems": [
    {
      "relation": "relates",
      "name": "Pipeline Jungles"
    },
    {
      "relation": "precedes",
      "name": "Dead Experimental Codepaths"
    }
  ]
}

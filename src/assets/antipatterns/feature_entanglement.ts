export default {
  "name": "Feature Entanglement",
  "aliases": [
    "CACE Principle"
  ],
  "description": "A machine learning package is essentially a complex data blender where features are more or less a combination of different features. These features most of the time are highly coupled and entangled with one another resulting in the \"Feature Entanglement\" antipattern. ",
  "causes": "The issue of entanglement is in some sense innate to machine learning, regardless of the particular learning algorithm being used [P3]. A machine learning package is a tool for mixing data sources and signals together that ends up creating entanglement.",
  "impact": "Feature entanglement in a machine learning model hinders incremental system improvements. To back up the claim let’s consider as an example a machine learning model that uses a bunch of features x1,...xn that are entangled together. A change in the composition of feature x1 may end up altering the value, weights, and use of the remaining n-1 features. Adding a new feature xn+1 as well as removing an existing feature can cause similar changes. Forget about changing a feature, even a change in the distribution of some features can result in a big change. This is referred to as the CACE principle (Changing Anything Changes Everything) [P3]. The same principle applies not only to input signals or features but also to hyper-parameters, including learning settings, sampling methods, convergence thresholds, data selection, and essentially every other possible tweak. Sculley states in his paper, ‘Hidden Technical Debt in Machine Learning Systems’ [P3], that the net result of such changes is that the prediction behavior may alter, either subtly or dramatically, on various slices of distribution.",
  "category": "Development",
  "detectionStrategies": "There are visualization tools available that do the detection job for us in quickly detecting changes in prediction behavior as they occur. A similar strategy was used in [35], where a high-dimensional visualization tool was used to allow researchers to quickly see effects across many dimensions and slicings.",
  "mitigationStrategies": "There are several strategies to mitigate this destructive pattern. One possible way is to isolate models which will smoothen the tracking of prediction measurement concerning changes in the previously mentioned aspect, which was rather complicated to track otherwise. Another solution is to serve ensembles, a machine learning technique that combines several base models in order to produce one optimal predictive model [34]. Using ensemble methods increases the robustness of machine learning systems against entanglement.",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html}, volume = {28}, year = {2015} }"
  ],
  "tags": [
    "Development"
  ],
  "relatedItems": [
    {
      "relation": "",
      "name": ""
    }
  ]
}

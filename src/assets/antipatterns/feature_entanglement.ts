export default {
  "name": "Feature Entanglement",
  "aliases": [
    "CACE Principle"
  ],
  "description": "A machine learning package is essentially a complex data blender where features are more or less a combination of different features. These features most of the time are highly coupled and entangled with one another resulting in the \"Feature Entanglement\" antipattern. ",
  "causes": "The issue of entanglement is in some sense innate to machine learning, regardless of the particular learning algorithm being used. A machine learning package is a tool for mixing data sources and signals together that ends up creating entanglement.",
  "impact": "Feature entanglement in a machine learning model hinders incremental system improvements. To back up the claim let's consider as an example a machine learning model, that uses three feature inputs x1, x2, and x3 that are entangled together. We might think that exchanging an existing feature, for example, x2 with a newly introduced feature x4 and retraining the machine learning model might only update a small part of the model catering to x2 but in reality change the entire model. A change in the composition of any feature may end up altering the value, weights, and use of the remaining features. Now instead of exchanging features, we add a new feature x4 to the initial model and retrain. We might expect the original part of the ML model to remain fixed, while only the newly added feature will isolatedly impact the model but it is not the case. The entire model changes again. The same is the case with removing an existing feature. Forget about changing a feature, even a change in the distribution of some features can result in a big change. This is referred to as the CACE principle (Changing Anything Changes Everything). The same principle applies not only to input signals or features but also to hyper-parameters, including learning settings, sampling methods, convergence thresholds, data selection, and essentially every other possible tweak. This is dangerous as the machine learning engineer might think that improving an input feature in an isolated fashion will improve the ML model but the opposite is true. Any change in a single input causes the model to be retrained thereby creating a completely new algorithm. Sculley states in his paper, \"Hidden Technical Debt in Machine Learning Systems\", that the net result of such changes is that the prediction behavior may alter, either subtly or dramatically, on various slices of distribution",
  "category": ["Development"],
  "detectionStrategies": "There are visualization tools available that do the detection job for us in quickly detecting changes in prediction behavior as they occur. A similar strategy was used in a case, where a high-dimensional visualization tool was used to allow researchers to quickly see effects across many dimensions and slicings.",
  "mitigationStrategies": "There are several strategies to mitigate this destructive pattern. One possible way is to isolate models that smoothen the tracking of prediction measurement concerning changes in the previously mentioned aspect, which was rather complicated to track otherwise. Another solution is to serve ensembles, a machine learning technique that combines several base models in order to produce one optimal predictive model. Using ensemble methods increases the robustness of machine learning systems against entanglement.",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html}, volume = {28}, year = {2015} }"
  ],
  "tags": [
    "Development"
  ],
  "relatedItems": [
    {
      "relation": "follows",
      "name": "Unstable Data Dependencies"
    }
  ]
}

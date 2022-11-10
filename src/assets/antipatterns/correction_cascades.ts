export default {
  "name": "Correction Cascades",
  "aliases": [],
  "description": "When a machine learning model uses an altered version of an external model that caters to the problem at hand, it is referred to as \"Correction Cascades\" as the changes made in the original model may lead to unforeseen ripple effects cascading to the \"corrected\" (altered) model. Correction Cascade is similar to the previously discussed antipattern \"Undeclared Consumers\", except that instead of using the output the whole model is reused.",
  "causes": "With deadlines on your head, it is often convenient to reuse prebuilt solutions for the problem at hand or in some cases reuse, with some alteration, the available solution for a similar problem. This is also the reason machine learning engineers fall into the trap of \"Correction Cascades\".",
  "impact": "Reusing a corrected version of an existing solution seems easy and faster in short term, but is very costly in the longer run. Suppose there exists a model Mx for problem X, but a solution for a slightly different problem X' is required. ML engineers in this case often choose to learn a model Mx' that uses model Mx as input and learn a small correction to cater to the problem X' at hand. This although seems like a quick solution but adds new dependencies on model Mx via the newly learned corrected model Mx'. Due to the newly created dependencies, it is now costly to analyze changes and enhancements on the corrected model Mx'. The cost further increases when the correction models are cascaded to learn model Mx'' to solve a further slightly different problem X'' on top of model Mx', and so on due to the ripple effects. Correction cascades impose a deadlock on future improvements due to the newly created cascading dependencies.",
  "category": ["Development"],
  "detectionStrategies": "",
  "mitigationStrategies": "Cascading dependencies and imporvment deadlock can be avoided if the initial model can be augmented to learn the corrections desired for the problem at hand by adding features to distinguish among the cases. Another way can also be to just accept the cost of building a separate model from scratch instead of reusing an existing model.",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html}, volume = {28}, year = {2015} }"
  ],
  "tags": [
    "Development"
  ],
  "relatedItems": [
    {
      "relation": "relates",
      "name": "Undeclared consumers"
    }
  ]
}

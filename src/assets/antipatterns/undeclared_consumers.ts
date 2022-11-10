export default {
  "name": "Undeclared Consumers",
  "aliases": [
    "Silent consumers"
  ],
  "description": "Looking at the “Unstable Data Dependencies” antipattern from the producer's angle(the system providing the signal to the consuming model), oftentimes a machine learning model produces a prediction that is made accessible to a wide variety of systems and later on consumed by other machine learning systems. If the prediction output is publicly available and there is no proper access control then the consumers possibly become undeclared consumers, consuming output of the prediction model as input signals for another component of the system.",
  "causes": "The absence of proper access control results in emerging undeclared consumers.",
  "impact": "Undeclared consumers are expensive at best and dangerous at worst. The prediction model ends up having a tight coupling to those undeclared consuming ML models. Any change to the prediction model will possibly have an impact on these undeclared consumers in abrupt, unintended, unexpected, and destructive ways. All in all the tight coupling makes it challenging and costly to make changes, including improvements, to the prediction model at all.",
  "category": ["Development"],
  "detectionStrategies": "Undeclared consumers are difficult to detect unless the system itself is specifically prepared and designed accordingly. Access restrictions or strict service-level agreements(SLAs) can be put in place to monitor consumers and restrict undeclared silent consumers.",
  "mitigationStrategies": "As mentioned in the detection strategies section, access restrictions or strict service-level agreements(SLAs) can be put in place to avoid undeclared silent consumers. With the absence of undeclared consumers, changes can be made to the prediction model while keeping the declared consumers intact.",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html}, volume = {28}, year = {2015} }"
  ],
  "tags": [
    "Development"
  ],
  "relatedItems": [
    {
      "relation": "relates",
      "name": "Unstable Data Dependencies"
    },
    {
      "relation": "relates",
      "name": "Correction Cascades"
    }
  ]
}

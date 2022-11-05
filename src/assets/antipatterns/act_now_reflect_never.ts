export default {
  "name": "Act Now, Reflect Never",
  "aliases": [],
  "description": "This antipattern refers to the use of the deployed model and its predictions as it is without any further supervision and analysis.",
  "causes": "This happens because often times the model and its predictions are left unattended once the model is deployed and operational in production. The predictions of such a model are used as-is without any filtering, updating, reflection, or even periodic manual inspection or analysis which later on causes problems.",
  "impact": "Muralidhar, in his paper [S27], stated that such unsupervised use od predictions can cause issues in presence of situations like concept drift, a situation in machine learning where the statistical properties of the target variable (what the model is trying to predict) change over time. Other scenarios can be irrelevant or easily recognizable erroneous predictions and adversarial attacks. All these issues are overlooked and go unalarmed if the deployed model’s predictions are continued to be used as is without further scrutiny and surveillance.",
  "category": "Maintenance",
  "detectionStrategies": "Having a system in place that monitors and tracks the deployed models can help in detecting output prediction issues that otherwise would go unnoticed.",
  "mitigationStrategies": "The same system doing the detection part can also be used to take on the debugging job. A meta-model in such situations can be set in place to analyze and evaluate the predictions made by the productive model and decide whether the predictions are meeting the required quality criteria or not. Another solution would be to inspect model decisions further by setting up explanation frameworks like LIME, Local Interpretable Model-Agnostic Explanations, a technique that approximates any black box machine learning model with a local, interpretable model to explain each individual prediction [40].",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html}, volume = {28}, year = {2015} }"
  ],
  "tags": [
    "Maintenance"
  ],
  "relatedItems": [
    {
      "relation": "",
      "name": ""
    }
  ]
}

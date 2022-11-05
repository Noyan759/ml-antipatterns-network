export default {
  "name": "Set & Forget",
  "aliases": [],
  "description": "This antipattern refers to the improper maintenance of the machine learning model and its data generation process causing performance degradation.",
  "causes": "A common assumption in machine learning pipelines is that the data generating process, generating data for training and inference, generates data samples that are independent and identically distributed (i.i.d) which is not the case in real projects. The assumption leads to a “Set & Forget” mentality in model training and inference.",
  "impact": "Despite the fact that data change over time, machine learning models assuming a static relationship between input and output variables suffer poor and degraded predictive performance [41]. As data changes, it is quite often the case that the statistical properties of the target variable that the learning model is trying to predict change over time causing concept drift. This causes a decline in the performance of machine learning models. Shibsankar, in his blog [42], gave an example of a recommendation system in e-Commerce whose model was trained before the COVID pandemic. In 2020, COVID emerged and consumer behavior changed drastically. The majority of users started focusing on purchasing daily essentials rather than expensive gadgets. Moreover, a lot of products are out of stock in the market due to this unforeseen situation. All this happened due to the change in statistical relation between the target products that the system was built to recommend and the input user behavior and external conditions.",
  "category": "Maintenance",
  "detectionStrategies": "The basic approach to address concept drift is to monitor the model to detect drift. Model monitoring should be implemented for model performance. Performance decline below a certain threshold should be measured.",
  "mitigationStrategies": "There are several approaches to dealing with concept drift. If the model performance declines under a certain threshold then it should be re-evaluated. Another way would also be to periodically update/re-fit the machine learning model with more recent historical data. In ML models using feature weights and coefficients, customized weighing can be used that is inversely proportional to the age of the data such that the model gives more importance to the most recent data (higher weight) and less importance to the least recent data (smaller weight) [41].",
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

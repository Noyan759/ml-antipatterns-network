export default {
  "name": "Feedback Loops",
  "aliases": [],
  "description": "Feedback loops refer to the process in which a machine learning model reuses its predicted output to train itself for future iterations. There are two kinds of feedback loops: - Direct feedback loops refer to a machine learning model that directly influences the input features or the selection of its own future training data. Direct feedback loops are common practices used in supervised ML algorithms. - Hidden feedback loops are related to direct feedback loops except that the influence, or the feedback, happens indirectly.",
  "causes": "Feedback loops are generally used in machine learning systems to improve the accuracy of labeling in turn improving the accuracy of the overall system. James Dicarlo states in his study [36] that the more feedback loops the neural networks have the more accurate the results will be.",
  "impact": "ML models having feedback loops makes it challenging to anticipate the behavior or outcome. This leads to a form of ‘analysis debt’ [P3]. Direct feedback loops cause the behavior of the ML model to converge into an arbitrary artificial solution that performs poorly [37]. Consider the example of a food recipe recommendation model. The ML model presents a bunch of recipes and the user chooses one - ‘Hot Pot’(an oriental dish), although his/her favorite cuisine is continental which can actually be found outside the pool of recipes the model has provided for selection. The model seeing that a user selected Hot Pot will feedback itself and modify its behavior to show the user more oriental dishes originating from Southeast Asian countries. The model starts converging its recommendations to increasingly specific target data that might lie far away from the user’s actual preferred taste. Hidden feedback loops are even more dangerous than direct ones as they are reinforced through external ML systems and are even harder to detect. Consider the example of an ML model (Mx) that predicts where the crime will occur. Another ML model (My) determines the deployment of police officers. My deploys more officers to the area predicted by Mx to be a high-crime rate area. Due to this increased patrolling, it is probable that more crimes will be uncovered and as a result will self-reinforce the hidden loop in the model’s (Mx) algorithm. If these loops aren't catered to properly then they result in confirmation bias. With feedback loops, a machine learning model becomes more confident in a bad prediction and therefore keeps predicting with similar behavior instead of searching for better predictions.",
  "category": "Development",
  "detectionStrategies": "Detecting feedback loops in a machine learning model is quite challenging, especially when the rate of change is slow. Frequent model updates make it easier to detect these feedback loops. Detecting a data shift or change in prediction/recommendation behavior is easier directly after deploying a model.",
  "mitigationStrategies": "There are multiple ways to mitigate or solve the issues related to feedback loops: - Introduce direct user feedback but that might as well lead to further feedback loops. - Add randomization, noise, or variability in outputs to always have unbias data in predictions systems-  Isolate certain parts of the system from being influenced by a given model. - Use bandit algorithms that balance exploration with exploitation[37]",
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
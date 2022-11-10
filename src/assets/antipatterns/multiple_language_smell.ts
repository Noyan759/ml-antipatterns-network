export default {
  "name": "Multiple-Language Smell",
  "aliases": [
    "Multi-Language Code Bases"
  ],
  "description": "This antipattern refers to the use of more than one language to develop an end-to-end machine learning system. Often times a machine learning application compromises components written in different programming languages. Such a heterogeneous approach causes different types of technical debts during the development, testing, and deployment stages. The problem is identified as 'Multiple-Language Smell'.",
  "causes": "The availability of convenient libraries in a particular language or syntax for the task at hand lures machine learning engineers to use different languages for different components within a machine learning application. Many popular libraries for machine learning and data science-related applications are written in python, for example, numpy, pandas, scikit-learn, and many more. On the other hand for data pre-processing, an open-source unified analytics engine Apache Spark is preferred due to its better support for parallel execution, which is written in Scala, another programming language.",
  "impact": "Having heterogeneous codebase results in several kinds of debts during the development, testing, and deployment phases. Refactoring, a very popular programming practice in both traditional and ML software, becomes costly when multiple languages are involved within a system. Effective and automated testing is also compromised as the error checking tool can only inspect either the python or the Scala part of the code, as per the above example, but will not be able to tackle problems across the language barrier. Furthermore, deploying such heterogeneous systems becomes harder as they require setups with many different components that need to be orchestrated. As the number of languages increases, so does the number of design defects. They generally do not prevent the program from functioning correctly, but they indicate a higher risk of future bugs and make the code less readable and harder to maintain.",
  "category": ["Development", "Deployment"],
  "detectionStrategies": "",
  "mitigationStrategies": "",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html}, volume = {28}, year = {2015} }"
  ],
  "tags": [
    "Development"
  ],
  "relatedItems": []
}

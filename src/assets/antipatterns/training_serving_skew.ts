export default {
  "name": "Training-Serving Skew",
  "aliases": [],
  "description": "The disparity between the performance of a machine learning model during the training phase and performance during the serving phase is referred to typically as ‘Training-serving skew’. An example of the said antipattern is when Google once built a quick access feature in Google Drive that recommends a list of files[32]. The model delivered good results during training and testing but failed in production. Further analysis revealed that the extracted data during training went through a specific pipeline which wasn't the case in production data extraction via API call. This additional data transformation caused the failure of the model in production and hence resulted in training-serving skew.",
  "causes": "There are multiple reasons why this problem occurs. It can be the case that the data processing and model serving in production mode differs in implementation compared to training or testing mode, resulting in a training-serving skew in model performance [P12]. Systems trained on small, public data sets are especially exposed to this issue. Drew Roselli highlighted, in his paper[P19], the example of the short-lived chatbot Tay that started mimicking the hate speech of its Twitter correspondents. Other reasons resulting in training-serving skew, as stated by Martin Zinkevich[G28], include changes in data between the training and serving phase, also sometimes a feedback loop between the ML model and the algorithm can cause this problem.",
  "impact": "Having skews in between testing and serving gives rise to performance disparity, low model accuracy, and data variation.",
  "category": "Maintenance",
  "detectionStrategies": "The only way to detect skew in your system is to explicitly monitor the system and data, and look for changes in model performance and data statistics. There are tools, like Tensor Flow Extended(TFX data validation and TFX model analysis) [33] that handles this monitoring and data change analysis job for us.",
  "mitigationStrategies": "The guideline to avoid training-serving skew is to just follow the causes, that made the skew in the first place and then tackle them as follows: - Any discrepancy between how the data is handled in the training and serving pipelines should be avoided. - Same data, no additional features should be added or removed, should be used to train and serve the machine learning model.",
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

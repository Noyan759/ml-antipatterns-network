export default {
  "name": "Data Leakage",
  "aliases": [],
  "description": "There are a variety of ways in which the separation of training from testing may be violated, despite being a common well-known hazard in the machine-learning world. Data leakage (or leaking) occurs when the model has access to information outside of the training dataset that the model is trying to predict.",
  "causes": "Ideally, there should be no intersection between training and test data sets but it still happens and there are many reasons for it that eventually result in data leakage. Distorting the data during the process of data preparation to the point that the built model works well for the ‘clean’ dataset but fails miserably when applied to real-world data. Leakage can happen sometimes unintentionally when feature selection is driven by model validation or test performance or due to the presence of (typically unavailable) features highly correlated with the label [S27]. Sometimes during the splitting phase of data into training and test subsets, some data present in the test subset is copied to the training subset or vice-versa, causing data leakage.",
  "impact": "Data leakage leads to overly optimistic model performance in the model building phase and poses serious downstream problems upon model deployment (specifically in high-risk applications) [43], which is followed by an unpleasant surprise when the machine learning model is implemented and then tested on new data and results are poor. In other words, a leaky environment might lead your system to train a suboptimal model that performs significantly worse in practice than one that is leak-free.",
  "category": "Development",
  "detectionStrategies": "An easy way to know you have data leakage is to check if the model is achieving performance that seems a little too good to be true. It might be the case that instead of learning and generalizing for unseen data, the model might be memorizing feature-target relations due to the presence of data leakage. It can also be worth detecting the features that are highly correlated to the target variables as they might be causing the leakage. Lastly, a trained model consisting of highly weighted features must be checked for possible leakage.",
  "mitigationStrategies": "There are numerous ways to minimize data leakage when developing predictive models. An important strategy is to closely monitor the data preparation phase as this is where information is easily leaked. Make sure the prepared data isn’t distorted to a point where the model is overfitted to it. Extracting an appropriate set of features for the machine learning model also helps in fixing the problem of data leakage. While choosing features, make sure that the selected features are not highly correlated with the target variable, as well as that they do not contain information about the target variable, which is not naturally available at the time of prediction in real-world scenarios. If sufficient data is available then a simpler approach is to split the training dataset into train and validation sets and store away the validation dataset. Once the model is built, trained, and in its final state, evaluate it against the validation dataset. This provides a final validation and allows a sanity check to see whether the estimates of model performance were overly optimistic and for data leakage presence",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html}, volume = {28}, year = {2015} }"
  ],
  "tags": [
    ""
  ],
  "relatedItems": [
    {
      "relation": "",
      "name": ""
    }
  ]
}

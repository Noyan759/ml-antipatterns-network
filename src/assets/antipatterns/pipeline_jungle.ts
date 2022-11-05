export default {
  "name": "Pipeline Jungles",
  "aliases": [],
  "description": "Machine learning models are typically powered by a series of workflow pipelines. These pipelines are liable for multiple real-time or batch data ingestion jobs and are most likely developed and maintained by different teams or departments. The data in these pipelines also are generally sourced from various data sources and this is where the disaster begins. An error or issue in one of the pipelines will result in consuming a lot of resources for debugging purposes. Testing such services is also quite expensive. All this leads to the pipeline jungle antipattern.",
  "causes": "",
  "impact": "In machine learning systems, pipeline evolve naturally as new signals are identified and new data sources are added to the system. Sculley also mentioned these pipeline jungles as a special case of glue code that often appears in the data preparation phase of the machine learning lifecycle [P3]. Oftentimes, just to fulfill a certain requirement a new pipeline is added to the system without following proper design principles and patterns. A lot of glue code is written to incorporate and manage different pipelines. The resulting system is a jungle of scrapes, joins, and sampling steps and is no less than a spaghetti system. As a result, systems accumulate substantial technical debt and become more expensive to innovate.",
  "category": "Development",
  "detectionStrategies": "",
  "mitigationStrategies": "Pipeline jungles occur when the tasks of feature extraction and data collection are implemented insincerely. The holistic picture of the system should be focused on during the data preparation and processing phase. One expensive approach to tackle this jungle would be to put some effort to scrape and clean up the pipeline. Redesigning from the scratch is undeniably an extensive investment, but will immensely reduce the drag and will help in speeding up further development and innovation. Pipeline jungles tend to snowball into a bigger problem for ML systems, so it is always better to tidy up before it is too late [30].",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html},volume = {28}, year = {2015}}"
  ],
  "tags": [
    "Development"
  ],
  "relatedItems": [
    {
      "relation": "relates",
      "name": "Glue Code"
    }
  ]
}

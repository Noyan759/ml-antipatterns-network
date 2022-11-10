export default {
  "name": "Throwing Models Over the Wall",
  "aliases": [
    "Black box scenario"
  ],
  "description": "This antipattern happens when the segregation of roles is so strong that by the end of the machine learning pipeline, no one has complete knowledge of how the end-to-end system works. It can also be considered as the opposite of the link{AI superhero} anti-pattern.",
  "causes": "This situation arises commonly due to the organizational structure set into the team. The roles are predefined and the employees are given the task according to their respective roles and in the end, they are only concerned with the tasks that are strictly under their assigned roles. This strict role segregation also sometimes happens when the organization is trying to tackle the AI Superhero antipattern and tries to divide the task among different employees. This division sometimes makes the features end up being developed in isolation.",
  "impact": "In such a situation where no one in the team has the understanding of how the end-to-end system works bites back in the integration and maintenance phase. Ahsan in his article, gave an example of a scenario where a machine learning researcher or data scientist built a complex, functioning machine learning model as a prototype. The software engineer took over the prototype, refactored, and engineered the code without completely understanding the ML model, and later on, the DevOps engineer containerized the application for deployment. The issue arises post deployment when the model does not run well or is not producing results as expected. The data scientist struggles to understand the refactored and containerized version of his original machine learning model. Debugging the model becomes a nightmare. Furthermore, improper documentation aggravates the problems even more if the team member, handling the ML model, decides to leave the team. Ahsan further stated that throwing models over the wall to DevOps teams is often a primary reason why enterprises find it so hard to get machine learning applications into production.",
  "category": ["Project Management"],
  "detectionStrategies": "",
  "mitigationStrategies": "To understand all the engineering components and the machine learning system at hand end-to-end, the engineering team should work closely and not in silos despite role segregation.",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html}, volume = {28}, year = {2015} }"
  ],
  "tags": [
    ""
  ],
  "relatedItems": []
}

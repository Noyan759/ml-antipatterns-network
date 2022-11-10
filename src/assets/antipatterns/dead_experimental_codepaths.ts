export default {
  "name": "Dead Experimental Codepaths",
  "aliases": [
    "Dead code",
    "Unused code",
    "Unreachable code",
    "Orphan code"
  ],
  "description": "Dead or unreachable code is code that will never be executed or if executed has no effect on the application's behavior.",
  "causes": "Dead experimental code paths are connected to and are the aftermath of two other antipatterns, namely, Glue code and Pipeline jungles. Rapid prototyping is an essential part of machine learning models that requires many experiments. The iterative and experimental process results in several conditional branches consisting of experimental codepaths within the main production code. These experimental branches are with time forgotten resulting in dead code.",
  "impact": "The problem with dead code is that after a while it starts to “smell bad.” The older it is, the stronger and more sour the odor becomes. This is because keeping dead code around could be harmful. Over time, the accumulating dead codepaths add to the technical debt of the system by making the system more difficult to maintain and an exponential increase in cyclomatic complexity. A rather infamous example of dead experimental code path dangers was when Knight Capital’s system lost around 456 million dollars in less than an hour due to unexpected behavior resulting due to the presence of obsolete experimental code paths.",
  "category": ["Development"],
  "detectionStrategies": "Reexamining the code periodically in search of obsolete code and conditional branches is beneficial for monitoring and detecting dead experimental code paths.",
  "mitigationStrategies": "Reexamining the code periodically in search of obsolete code and conditional branches is beneficial for monitoring dead experimental code paths. Most of the time only a small subset of these conditional and experimental branches are actually being used, the rest are just abandoned and should be ripped out of the system.",
  "sources": [
    "@inproceedings{Sculley2015, author = {D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips}, title = {{Hidden Technical Debt in Machine Learning Systems}}, url = {https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html}, volume = {28}, year = {2015} }"
  ],
  "tags": [
    "Development"
  ],
  "relatedItems": [
    {
      "relation": "follows",
      "name": "Glue Code"
    },
    {
      "relation": "follows",
      "name": "Pipeline Jungles"
    }
  ]
}
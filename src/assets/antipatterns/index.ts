import ActNowReflectNever from './act_now_reflect_never';
import AISueprHero from './ai_superhero';
import CorrectionCascades from './correction_cascades';
import DataLeakage from './data_leakage';
import DeadExperimentalCodePaths from './dead_experimental_codepaths';
import FeatureEntanglement from './feature_entanglement';
import FeedbackLoops from './feedback_loops';
import GlueCode from './glue_code';
import MultipleLanguageSmell from './multiple_language_smell';
import PipelineJungle from './pipeline_jungle';
import SetAndForget from './set_forget';
import ThrowingModelsOverTheWall from './throwing_models_over_the_wall';
import TrainingServingSkew from './training_serving_skew';
import UndeclaredConsumers from './undeclared_consumers';
import UnstableDataDependencies from './unstable_data_dependencies';

export default [
    ActNowReflectNever,
    AISueprHero,
    DataLeakage,
    FeedbackLoops,
    DeadExperimentalCodePaths,
    GlueCode,
    PipelineJungle,
    MultipleLanguageSmell,
    SetAndForget,
    ThrowingModelsOverTheWall,
    TrainingServingSkew,
    FeatureEntanglement,
    UnstableDataDependencies,
    UndeclaredConsumers,
    CorrectionCascades,
]
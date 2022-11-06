export class AntiPattern {
    public name?: string;
    public aliases?: string[];
    public description?: string;
    public causes?: string;
    public impact?: string;
    public category?: string;
    public detectionStrategies?: string;
    public mitigationStrategies?: string;
    public sources?: string[];
    public tags?: string[];
    public evidence?: number;
    public relatedItems?: RelatedItem[];
    public relatedAntiPatterns?: RelatedAntiPattern[];

    constructor(name?: string, aliases?: string[], description?: string, causes?: string, impact?: string,
                category?: string, detectionStrategies?: string, mitigationStrategies?: string, sources?: string[],
                tags?: string[], relatedItems?: RelatedItem[]) {
        this.name = name;
        this.aliases = aliases;
        this.description = description;
        this.causes = causes;
        this.impact = impact;
        this.category = category;
        this.detectionStrategies = detectionStrategies;
        this.mitigationStrategies = mitigationStrategies;
        this.sources = sources;
        this.tags = tags;
        this.relatedItems = relatedItems;
    }
}

export interface RelatedItem {
    relation: string;
    name: string;
}

export interface RelatedAntiPattern {
    relation: string;
    name: string;
    description: string;
}

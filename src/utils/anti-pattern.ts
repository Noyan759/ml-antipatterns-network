
import type { AntiPattern, RelatedAntiPattern } from "../common/anti-pattern";

export const setRelatedAntiPatterns = (antiPatterns: AntiPattern[]) => {
    for (const antiPattern of antiPatterns) {
        if (antiPattern.relatedItems) {
            antiPattern.relatedItems.forEach((relatedItem) => {
                const relatedAntipatternName = antiPatterns.filter((item) => item.name === relatedItem.name).pop();
                if (relatedAntipatternName) {
                    if (!antiPattern.relatedAntiPatterns) {
                        antiPattern.relatedAntiPatterns = [];
                    }
                    const relatedAntipattern = {
                        relation: relatedItem.relation,
                        name: relatedAntipatternName.name,
                        description: relatedAntipatternName.description,
                    } as RelatedAntiPattern;
                    if (antiPattern.relatedAntiPatterns.filter(
                        (p) => p.name === relatedAntipattern.name).length === 0) {
                        antiPattern.relatedAntiPatterns.push(relatedAntipattern);
                    }
                }
            });
        }
    }
}

type Resource = {
    title: string;
    url: string;
    type: string;
};

type Topic = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    unlocked: boolean;
    children: string[];
    level: number;
    xp: number;
    resources: Resource[];
    tips: string[];
};

export type { Resource, Topic };

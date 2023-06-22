export type StudentData = {
    id: string;
    NetworkImage: NetworkImage;
    name: string;
    school: string;
    match_level: number;
    AI_degree: number;
    wrap_up: WrapUp[];
    questions: Question[];
};

export type WrapUp = {
    genre: string;
    content: string;
};

export type Question = {
    genre: string;
    content: string[];
};

export type NetworkImage = {
    url: string;
};



export interface StudentData {
    id: string;
    NetworkImage: NetworkImage;
    name: string;
    school: string;
    match_level: number;
    AI_degree: number;
    wrap_up: WrapUp[];
    questions: Question[];
    ability_to_compose_a_text: ability_to_compose_a_text;
}

type ability_to_compose_a_text = {
    __html: string;
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

export interface firebaseData {
  id: string;
  data: StudentData;
}
export interface StudentData {
  id?: string;
  icon: string;
  networkImage: NetworkImage;
  originalNetworkImage: NetworkImage;
  name: string;
  school: string;
  match_level: number;
  originality: number;
  wrap_up: WrapUp[];
  questions: Question[];
  ability_to_compose_a_text: ability_to_compose_a_text;
}

type ability_to_compose_a_text = {
  __html: string;
};

export type WrapUp = {
  question: string;
  content: string;
};

export type Question = {
  genre: string;
  content: string;
};

export type NetworkImage = {
  url: string;
};

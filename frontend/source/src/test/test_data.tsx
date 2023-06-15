import { StudentData, NetworkImage } from "@/types/types";

const testNetworkImage: NetworkImage = { url: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" };

export const testStudentData: StudentData = {
    NetworkImage: testNetworkImage,
    name: "就活太郎",
    school: "静岡大学３年",
    match_level: 80,
    AI_degree: 10,
    wrap_up: [{ genre: "志望動機", content: "貴社の事業領域の広さと新規事業への積極性に魅力を感じる" }],
    questions: [{ genre: "幅広い事業展開", content: ["現代社会の課題解決に向けてどのような業界との連携が必要であると考えますか？"] }],
};



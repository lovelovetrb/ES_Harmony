import style from "@/components/atoms/Button/Button.module.css";

type sortType = "match_level" | "originality";
type props = {
  text: string;
  // TODO: できることならジェネリクス使ってうまくやりたい
  onClickFunc: (feild: sortType) => void;
  feild: sortType;
};

const Button = ({ text, onClickFunc, feild }: props) => {
  return (
    <button
      className={style.button}
      onClick={() => {
        onClickFunc(feild);
      }}
    >
      {text}
    </button>
  );
};

export default Button;

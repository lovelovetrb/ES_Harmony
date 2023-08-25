import style from "@/components/atoms/SortButton/SortButton.module.css";

type sortType = "match_level" | "originality";
type props = {
  text: string;
  onClickFunc: (feild: sortType) => void;
  feild: sortType;
};

const SortButton = ({ text, onClickFunc, feild }: props) => {
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

export default SortButton;

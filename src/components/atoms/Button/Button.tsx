import style from "@/components/atoms/Button/Button.module.css";

type props = {
  text: string;
  field?: string;
  onClickFunc?: (field?: string | undefined) => void;
};

const Button = ({ text, onClickFunc, field }: props) => {
  return (
    <button
      className={style.button}
      onClick={() => {
        if (onClickFunc != undefined) {
          onClickFunc(field);
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;

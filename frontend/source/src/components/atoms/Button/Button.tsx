import style from "@/components/atoms/Button/Button.module.css";

type props = {
    text: string;
    onClickFunc: any;
};

const Button = ({ text, onClickFunc }: props) => {
    return (
        <button
            className={style.button}
            onClick={() => {
                onClickFunc();
            }}
        >
            {text}
        </button>
    );
};

export default Button;

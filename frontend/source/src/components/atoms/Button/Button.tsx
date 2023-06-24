import style from "@/components/atoms/Button/Button.module.css";

type props = {
    text: string;
    onClickFunc?: any;
    field?: string;
};

const Button = ({ text, onClickFunc, field }: props) => {
    return (
        <button
            className={style.button}
            onClick={() => {
                onClickFunc(field);
            }}
        >
            {text}
        </button>
    );
};

export default Button;

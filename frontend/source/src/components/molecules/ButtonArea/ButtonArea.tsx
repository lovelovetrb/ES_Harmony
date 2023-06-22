import style from "@/components/molecules/ButtonArea/ButtonArea.module.css";

type props = {
    children: React.ReactNode;
};

const ButttonArea = ({ children }: props) => {
    return <div className={style.buttonArea}>{children}</div>;
};

export default ButttonArea;

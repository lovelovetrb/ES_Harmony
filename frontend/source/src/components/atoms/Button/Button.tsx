type props = {
  text:string;
};

const Button = ({ text } : props) => {
    return <button>{text}</button>;
};

export default Button;

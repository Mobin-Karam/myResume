import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_green";
};
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      <label className="bold-16 whitespace-nowrap">{title}</label>{" "}
      {icon && (
        <Image className="" src={icon} alt={title} width={24} height={24} />
      )}
    </button>
  );
};

export default Button;

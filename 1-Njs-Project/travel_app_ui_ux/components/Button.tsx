import Image from "next/image";

// This is used for TypeScript
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};
// The most important things is props in Button Components
const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} `}
      type={type}
    >
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>{" "}
      {icon && (
        <Image className="" src={icon} alt={title} width={24} height={24} />
      )}
    </button>
  );
};

export default Button;

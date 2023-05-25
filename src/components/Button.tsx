type ButtonProps = {
  text: string;
  variant: string;
  className?: string;
};

export default function Button({ text, variant, className = "" }: ButtonProps) {
  return (
    <button
      className={`py-2 px-4 rounded-full font-semibold ${
        variant === "primary"
          ? "bg-primary dark:bg-light text-light dark:text-primary dark:hover:text-white hover:bg-gradient-to-tr from-green-300 to-purple-400"
          : "border border-primary dark:border-light text-primary dark:text-light hover:bg-gradient-to-tr from-green-300 to-purple-400 hover:text-white hover:border-transparent"
      } ${className}`}
    >
      {text}
    </button>
  );
}

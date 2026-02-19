import type React from "react";

type Props = {
    variant: "primary" | "secondary" | "danger",
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AppButton: React.FC<Props> = ({
    children,
    variant,
    className,
    ...rest
}) => {
    const baseTailwindClassName = "rounded font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
        secondary: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-300",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    } as const;

    const classNameResult = [
        baseTailwindClassName,
        variantClasses[variant],
        className
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button className={classNameResult} {...rest}>{children}</button>
    )
}
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
    const baseTailwindClassName = "w-12 h-4 text-white hover:opacity-50 transition-all delay-50";

    const variantClasses = {
        primary: "bg-blue-500",
        secondary: "bg-green-500",
        danger: "bg-red-600",
    } as const;

    const classNameResult = [
        baseTailwindClassName,
        variantClasses[variant],
        className
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button className={classNameResult} { ...rest }>{children}</button>
    )
}
import type React from "react";

type Props = {
    variant: "primary" | "secondary" | "danger",
} & React.HTMLAttributes<HTMLButtonElement>;

export const AppButton: React.FC<Props> = ({
    children,
    variant,
    className,
    ...rest
}) => {
    const baseTailwindClassName = "w-12 h-4 text-white";

    let variantTailwindClassName;
    switch (variant) {
        case "primary":
            variantTailwindClassName = "bg-blue-500";
            break;
        case "secondary":
            variantTailwindClassName = "bg-green-500";
            break
        case "danger":
            variantTailwindClassName = "bg-red-600";
            break;
    };

    const classNameResult = [
        baseTailwindClassName,
        variantTailwindClassName,
        className
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button className={classNameResult} { ...rest }>{children}</button>
    )
}
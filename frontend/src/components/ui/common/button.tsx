import type React from "react";

type Props = {
    variant: "primary" | "secondary" | "danger"
}

export const AppButton = ({ children, props }: { children: React.ReactNode, props: Props }) => {
    let tailwindClassName;
    switch (props.variant) {
        case "primary":
            tailwindClassName = "";
            break;
        case "secondary":
            tailwindClassName = "";
            break
        case "danger":
            tailwindClassName = "";
            break;
    }

    return (
        <button className={tailwindClassName}>{children}</button>
    )
}
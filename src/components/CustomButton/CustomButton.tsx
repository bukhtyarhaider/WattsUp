import React from "react";
import styles from "./CustomButton.module.scss";
import { CustomButtonProps } from "./CustomButtonProps";

const CustomButton: React.FC<CustomButtonProps> = ({
    icon,
    title,
    variant,
    size,
    onClick,
}) => {
    const buttonClassName = `${styles["custom-button"]} ${icon ? styles["custom-button-with-icon"] : ""
        } ${styles[variant]} ${styles[size]}`;

    return (
        <button className={buttonClassName} onClick={onClick}>
            {icon && (
                <div className={styles.iconWrapper}>
                    <img src={icon} />
                </div>
            )}
            {title}
        </button>
    );
};

export default CustomButton;
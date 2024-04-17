import React from "react";
import styles from "./Collapse.module.scss";
import { CollapseProps } from "./CollapseProps";

const Collapse: React.FC<CollapseProps> = ({
    title,
    description,
    onClick,
    isOpen,
}) => {
    return (
        <div className={`${styles.accordionContainer} ${isOpen ? styles.accordionContainerOpen : ""}`}>
            <div className={styles.header} onClick={onClick}>
                <p>{title}</p>
                <div>{isOpen ? "-" : "+"}</div>
            </div>
            <div className={`${styles.body} ${isOpen ? styles.show : ""}`}>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Collapse;

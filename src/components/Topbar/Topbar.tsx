import { useState } from "react";
import { Drawer } from "antd";
import styles from "./Topbar.module.scss";
import TopbarProps from "./TopbarProps";
import { Link } from "react-router-dom";
import { call, logo } from "../../assets";
import CustomButton from "../CustomButton/CustomButton";

const Topbar: React.FC<TopbarProps> = ({ navItems }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };
    return (
        <div className={styles.topBarContainer}>
            <div className={styles.logoContainer}>
                <div className={styles.logoWrapper}>
                    <Link to="/" onClick={() => setSelectedIndex(0)}>
                        <img src={logo} />
                    </Link>
                </div>
            </div>

            <div className={styles.menuContainer}>
                <ul>
                    {navItems.map((label, index) => (
                        <li key={label.name} onClick={() => setSelectedIndex(index)}>
                            <Link
                                to={label.url}
                                className={selectedIndex == index ? styles.active : ""}
                            >
                                {label.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.button}>
                <CustomButton icon={call} title="+1 (205)  349 4928" variant="primary" size="medium" />
            </div>


            <div className={styles.menuIcon} onClick={toggleDrawer}>
                <span className={styles.menuBar1}></span>
                <span className={styles.menuBar2}></span>
                <span className={styles.menuBar3}></span>
            </div>
            <Drawer
                title={<img src={logo} />}
                closable={true}
                onClose={toggleDrawer}
                open={openDrawer}
                placement="top"
            >
                <div className={styles.menuContainerMobile}>
                    <ul>
                        {navItems.map((label, index) => (
                            <Link
                                to={label.url}
                                className={selectedIndex == index ? styles.active : ""}
                            >
                                <li
                                    key={label.name}
                                    onClick={() => {
                                        setSelectedIndex(index);
                                        toggleDrawer();
                                    }}
                                >
                                    {label.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

export default Topbar;
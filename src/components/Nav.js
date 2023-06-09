import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillBrightnessLowFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { IonIcon } from "@ionic/react";
import { menu } from "ionicons/icons"
import { close } from "ionicons/icons"


let MyButton = ({ children }) => {
    return <button>{children}</button>;
}

const Nav = () => {
    const [theme, setTheme] = useState(null);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode) {
            setTheme(JSON.parse(savedDarkMode));
        }
    }, []);

    useEffect(() => {
        if (theme) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    const themeSwitch = () => {
        const newMode = !theme;
        setTheme(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    }

    return (
        <nav
            className={"w-full lg:flex lg:justify-between lg:items-center lg:py-8 lg:px-16 py-7 bg-white dark:bg-black text-black dark:text-white"}>
            <Link to={"/"}>
                <h1 className={"w-20 text-3xl font-quicksand font-bold text-left md:md-0 ml-12"}>
                    Kurt
                </h1>
            </Link>
            <div className={"lg:hidden z-10"}>
                <BsFillMoonStarsFill
                    className={"absolute right-28 top-10 cursor-pointer text-xl text-black dark:hidden"}
                    onClick={themeSwitch}
                />
            </div>
            <div className={"lg:hidden z-10"}>
                <BsFillBrightnessLowFill
                    className={"absolute right-28 top-8 cursor-pointer text-3xl text-yellow-400 hidden dark:block"}
                    onClick={themeSwitch}
                />
            </div>
            <div className={"absolute lg:right-8 right-12 lg:top-8 top-7 text-4xl lg:hidden lg:z-0 z-50"}
                onClick={() => setOpen(!open)}>
                <IonIcon icon={open ? close : menu} className={"text-black dark:text-white"} />
            </div>
            <ul className={`lg:flex lg:justify-between justify-center ${!open ? 'hidden' : ''}`}>
                <li className={"lg:mr-12 lg:my-0 my-7 z-10"}>
                    <Link to={"/about"} className={"hover:text-gray-500 duration-500"}>
                        <MyButton>About</MyButton>
                    </Link>
                </li>
                <li className={"lg:mr-12 lg:my-0 my-7 z-10"}>
                    <Link to={"/resume"} className={"hover:text-gray-500 duration-500"}>
                        <MyButton>Resume</MyButton>
                    </Link>
                </li>
                <li className={"lg:mr-12 lg:my-0 my-7 z-10"}>
                    <Link to={"/projects"} className={"hover:text-gray-500 duration-500"}>
                        <MyButton>Projects</MyButton>
                    </Link>
                </li>
                <li className={"lg:mr-12 lg:my-0 my-7 z-10"}>
                    <Link to={"/experience"} className={"hover:text-gray-500 duration-500"}>
                        <MyButton>Experience</MyButton>
                    </Link>
                </li>
                <li className={"lg:mr-12 lg:my-0 my-7 z-10"}>
                    <Link to={"/contact"} className={"hover:text-gray-500 duration-500"}>
                        <MyButton>Contact</MyButton>
                    </Link>
                </li>
                <li className={"lg:-mr-12 lg:flex hidden z-10"}>
                    <BsFillMoonStarsFill
                        className={"lg:mr-12 lg:ml-0 lg:my-0 my-7 cursor-pointer text-xl text-black dark:hidden"}
                        onClick={themeSwitch}
                    />
                    <BsFillBrightnessLowFill
                        className={"lg:mr-12 lg:ml-0 lg:my-0 my-7 cursor-pointer text-2xl text-yellow-400 hidden dark:block"}
                        onClick={themeSwitch}
                    />
                </li>
            </ul>
        </nav>
    )

}

export default Nav;
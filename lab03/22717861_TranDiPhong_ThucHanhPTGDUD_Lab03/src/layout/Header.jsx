import { useEffect, useState } from "react";
import "../css/Header.css";

const data = ["What to cook", "Recipes", "Ingredients", "Occasions", "About us"];

const Header = () => {
    const [headerItem, setHeaderItem] = useState([]);

    useEffect(() => {
        setHeaderItem(data);
    }, [headerItem])

    return (
        <div className="header">

            <div className="header-left">
                <img src="../../public/img/logo.PNG" alt="Logo" />

                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>

            <div className="header-right">
                <div className="nav">
                    <ul>
                        {headerItem.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>

                <div className="recipe-box">
                    <img src="../../public/img/box.PNG" alt="Recipe Box" />
                    <a href="#">Your Recipe Box</a>
                </div>

                <div className="avatar">
                    <img src="../../public/img/avatar.PNG" alt="Avatar" />
                </div>
            </div>
        </div>
    );
}

export default Header;
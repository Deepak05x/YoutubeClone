import React from "react";
import "./Navbar.css";
import menu_png from "../../assests/menu.png";
import yt_png from "../../assests/yt.png";
import search_png from "../../assests/search.png";
import video_png from "../../assests/videostart.png";
import app_png from "../../assests/app.png";
import noti_png from "../../assests/notification.png";
import person_png from "../../assests/person.png";
import dot_png from "../../assests/dot.png";
import close_png from "../../assests/close.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setSideBar, sideBar }) => {
    const [search, setSearch] = useState(false);
    const [drop, setDrop] = useState(false);

    const handleSearch = () => {
        setSearch(!search);
    };

    const handleDrop = () => {
        setDrop(!drop);
    };

    const handleSideBar = () => {
        setSideBar((prev) => (prev === false ? true : false));
    };

    return (
        <div className={`yt__navbar ${sideBar === true ? "yt__navbar" : ""}`}>
            {search === false ? (
                <>
                    <div className="yt__navbar-left">
                        <img src={menu_png} alt="" onClick={() => handleSideBar()} />
                        <Link to={"/"}>
                            <span>
                                <img src={yt_png} alt="" />
                                <h4>StreamifY</h4>
                            </span>
                        </Link>
                    </div>
                    <div className="yt__navbar-right">
                        <img src={video_png} alt="" />
                        <img src={app_png} alt="" />
                        <img src={noti_png} alt="" />
                        <img src={person_png} alt="" />
                    </div>
                    <div className={`yt__navbar-right_drop ${drop ? "drop" : ""}`}>
                        <img src={dot_png} alt="" onClick={handleDrop} />
                        <div className="yt__navbar-right_drop-menu">
                            <img src={video_png} alt="" />
                            <img src={app_png} alt="" />
                            <img src={noti_png} alt="" />
                            <img src={person_png} alt="" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="yt__navbar-search">
                        <img src={close_png} alt="" onClick={() => setSearch(false)} />
                        <input type="text" placeholder="Search" />
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;

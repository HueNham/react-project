import React from "react";
import { Link } from "react-router-dom";
import './logo.scss';

interface ILogoProps {
    cName: string;
    onClick?: () => void
}

const Logo: React.FC<ILogoProps> = ({ cName, onClick }) => {
    return (
        // <div className={cName} onClick={onClick}>
        //     <Link to="/new">BOOKSTORE-NHK</Link>
        // </div>

        <div className="logo-content"> 
            <Link to="/new">LOGO</Link>
        </div>
    );
};

export default Logo;

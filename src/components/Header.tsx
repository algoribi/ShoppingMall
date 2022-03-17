import { FC } from "react";

const Header: FC = ({ children }) => {
    return (
        <div className='header'>
            <h1 className="title_name">🐃Cowpang🐃</h1>
            {children}
        </div>
    );
}

export default Header;
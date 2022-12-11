import {NavLink} from "react-router-dom";
import {BookLogo} from "../../assets";

export default function Header() {

    return (
        <>
            <header>
                <nav>
                    <NavLink to={"/"}>
                        <BookLogo/>
                    </NavLink>
                </nav>
            </header>
        </>
    );
}

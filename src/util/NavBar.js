import React from 'react'
import {
    NavLink as Link,
} from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav className='navStyle'>
                <ul className='listStyle'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/selection">Selection</Link>
                    </li>
                    <li>
                        <Link to="/design">Design</Link>
                    </li>
                    <li>
                        <Link to="/result">Result</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

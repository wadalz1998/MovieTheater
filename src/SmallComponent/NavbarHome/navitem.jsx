import React from 'react'
import { useHistory } from 'react-router'
import { Link as LinkScroll } from "react-scroll"
import { Link as LinkRouter } from "react-router-dom";
import "./style.scss"
export default function NavItem(props) {
    const history = useHistory();
    return (
        <>
            {history.location.pathname === "/" ? <li className="nav-item">
                <LinkScroll to={props.scrollToClass} className="aCursor"
                    spy={false}
                    smooth={true}
                    duration={500}>
                    <a className="nav-link">
                       {props.title}
                    </a>
                </LinkScroll>
            </li> : (
                <li className="nav-item">
                    <LinkRouter to="/">
                        <a className="nav-link">
                        {props.title}
                        </a>
                    </LinkRouter>
                </li>
            )}
        </>
    )
}

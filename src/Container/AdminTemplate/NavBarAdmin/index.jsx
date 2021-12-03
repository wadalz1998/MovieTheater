import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useHistory, useLocation } from 'react-router-dom'
import logo from "../../../logo.svg"
import { AiFillHome } from "react-icons/ai";
import { BsFilm } from "react-icons/bs";
import "./style.scss"
export default function NavBarAdmin() {
    const history = useHistory();
    const aiFillHome = <AiFillHome />
    const bsFilm = <BsFilm />
    const navBarFunc = [
        {
            name: "DashBoard", to: "/dashboard", icon: aiFillHome,
        },
        {
            name: "Quản Lý Phim", to: "/add", icon: bsFilm,
        },
    ]
    const navBarActive = props => {
        const historyTemp = history.location.pathname;
        const pathFunc = props.to;
        const active = historyTemp === pathFunc ? 'active' : ''
        return (
            <div className="navBarAdminLeft">
                <Navbar className={` ${active}`}>
                    <Container>
                        <Navbar.Brand>
                            <p className="customPaddingNavbar">{props.icon} {props.name}</p>
                        </Navbar.Brand >
                    </Container >
                </Navbar >
            </div>
        )
    }
    const loopFunction = () => {
        return navBarFunc.map((item, index) => {
            return (
                <Link to={item.to} key={index}>
                    {navBarActive(item)}
                </Link>
            )
        })
    }
    return (
        <div className="customTexta">
            <div style={{ height: '100vh' }}>
                <div className="LogoAdmin">
                    <img src={logo} />
                    <h3>Logo</h3>
                </div>
                {loopFunction()}
            </div>
        </div>
    )
}

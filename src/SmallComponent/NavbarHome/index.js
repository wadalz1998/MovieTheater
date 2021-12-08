import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/web-logo.png";
import menuOption from "../../assets/images/menu-options.png";
import avatar from "../../assets/images/avatar.png";
import locationHeder from "../../assets/images/location-header.png";
import { Link as LinkScroll } from "react-scroll"
import NavItem from "./navitem.jsx"

import "./style.scss";
export class NavBarHome extends Component {

  logOut = () => {
    localStorage.clear()
  }
  checkUserLogin = () => {
    if (localStorage.getItem("UserAdmin") !== null || localStorage.getItem("UserCustomer") !== null) {
      {
        const usernameCustomer = JSON.parse(localStorage.getItem('UserCustomer'))
        // const usernameAdmin = JSON.parse(localStorage.getItem('UserAdmin'))
        return (
          <div className="statusUser">
            {usernameCustomer ? <p>Xin Chào Bạn {usernameCustomer.hoTen}</p> : <p>Xin Chào, Admin</p>}
            <p>&nbsp;-&nbsp;</p>
            <Link to="/" onClick={this.logOut}> Thoát</Link>
          </div>
        )
      }
    }
    else
      return (
        <div className="imgCircle">
          <Link className="white" to="/login">   <img src={avatar} alt />Đăng Nhập</Link>
        </div>
      )
  }
  render() {
    // scrollListMovie
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand header__left">
            <img className="webLogo" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={menuOption} alt="" />
          </button>
          <div
            className="collapse navbar-collapse center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <NavItem scrollToClass={`scrollListMovie`} title="Lịch chiếu" />
              <NavItem scrollToClass={`scrollTheater`} title="Cụm rạp" />
              <NavItem scrollToClass={`scrollToNews`} title="Tin Tức" />
              <NavItem scrollToClass={`scrollToHomeApp`} title="Ứng dụng" />
            </ul>
          </div>
          <div className="right">
            {/* <div className="imgCircle">
              <Link className="white" to="/login">   <img src={avatar} alt />Đăng Nhập</Link>
            </div> */}
            {this.checkUserLogin()}
            <div className="selectLocation ">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle selectMenu"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img className="puh" src={locationHeder} alt="" />
                  Hồ Chí Minh
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <ul className="selectScroll">
                    <a className="dropdown-item" href="#">
                      Hà Nội
                    </a>
                    <a className="dropdown-item" href="#">
                      Đà Nẵng
                    </a>
                    <a className="dropdown-item" href="#">
                      Hải Phòng
                    </a>
                    <a className="dropdown-item" href="#">
                      Biên Hòa
                    </a>
                    <a className="dropdown-item" href="#">
                      Nha Trang
                    </a>
                    <a className="dropdown-item" href="#">
                      Bình Dương
                    </a>
                    <a className="dropdown-item" href="#">
                      Phan Thiết
                    </a>
                    <a className="dropdown-item" href="#">
                      Cần Thơ
                    </a>
                    <a className="dropdown-item" href="#">
                      Hạ Long
                    </a>
                    <a className="dropdown-item" href="#">
                      Vũng Tàu
                    </a>
                    <a className="dropdown-item" href="#">
                      Quy Nhơn
                    </a>
                    <a className="dropdown-item" href="#">
                      Huế
                    </a>
                    <a className="dropdown-item" href="#">
                      Long Xuyên
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header >
    );
  }
}

export default NavBarHome;
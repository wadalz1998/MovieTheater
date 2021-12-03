import React from 'react'
import { Link } from 'react-router-dom';
import "./style.scss";
export default function BannerAdmin() {
    const logOut = () => {
        localStorage.clear()
    }
    const displayUserAdmin = () => {
        const usernameAdmin = JSON.parse(localStorage.getItem('UserAdmin'))
        if (usernameAdmin)
            return (
                <div className="statusUserAdmin pt-2">
                    <p>Xin Chào, Admin {usernameAdmin.hoTen}</p>
                    <p>&nbsp; -&nbsp; </p>
                    <Link to="/login" onClick={logOut} style={{ color: 'red' }}> Thoát</Link>
                </div>
            )
        else
            <p>Failed</p>
    }
    return (
        <div className="">
            <div className="navBarAdmin">
                <div className="navBarAdmin_ConTent">
                    <div>
                        {displayUserAdmin()}
                    </div>

                </div>
            </div>
              </div>
    )
}

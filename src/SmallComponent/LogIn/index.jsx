import React, { useEffect, useState } from 'react'
import { FiUser, FiKey } from "react-icons/fi";
import "./style.scss"
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchLoginAPI } from "./module/action"
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
// import Loader from "../../SmallComponent/Loader"
import Loader from '../Loader';
function LogIn() {
    const [Account, setAccount] = useState({ taiKhoan: "", matKhau: "" });
    const dataLogin = useSelector(state => state.authReducer.data);
    const errLogin = useSelector(state => state.authReducer.err);
    const loading = useSelector(state => state.authReducer.loading);
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: '200px',
            width: '200px',
            background: 'transparent',
            border: 'transparent',
        },
    };
    const dispatch = useDispatch();
    // console.log(Account);
    const history = useHistory();
    // console.log(history.location.pathname);
    const handleSubmit = (e) => {
        e.preventDefault();
        openModal();
        dispatch(fetchLoginAPI(Account, history))
        setTimeout(() => {
            closeModal()
        }, 2200);
    }
    const renderNotice = () => {
        if (errLogin === undefined) {
            return <div className="alert alert-danger"> Tài khoản hoặc mật khẩu không đúng!
                {/* {errLogin.response.data} */}
            </div>
        }
    }
    const checkLoadingLogin = () => {
        if (loading)
            return (
                <div className="loader">
                </div>
            )
        if (errLogin === undefined && !dataLogin)
            return (
                <div className="loader fail">
                </div>
            )
        if (dataLogin)
            return (
                <div className="loader success"></div>
            )
    }
    return (
        <div className="backGroundLogIn">
            <div className="container">
                <div className="d-flex justify-content-center h-100 paddingCustom">
                    <div className="card">
                        <div className="card-header">
                            <h3>Đăng nhập</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                {renderNotice()}
                                <Modal
                                    isOpen={modalIsOpen}
                                    // onAfterOpen={afterOpenModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    {checkLoadingLogin()}

                                </Modal>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FiUser /></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Tên đăng nhập" name="taiKhoan" onChange={e => {
                                        e.preventDefault(); setAccount({ ...Account, taiKhoan: e.target.value })
                                    }} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FiKey /></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Mật khẩu" name="matKhau" onChange={e => {
                                        e.preventDefault(); setAccount({ ...Account, matKhau: e.target.value })
                                    }} />
                                </div>
                                <div className="row align-items-center remember text-white">
                                    <input type="checkbox" />Lưu mật khẩu
                                </div>
                                <div className="submitContent">
                                    <div className="submitCustom">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <input type="submit" value="Đăng Nhập" className="">
                                        </input>
                                        {/* <a type="submit" value="Đăng Nhập" className="submidCustom">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Đăng Nhập
                                    </a> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Bạn chưa có mật khẩu?&nbsp;<Link to="./register">Đăng Ký</Link>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Quên mật khẩu?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogIn;
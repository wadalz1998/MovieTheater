import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { fetchRegisterAPI } from './module/action'
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import "../Loader/Loader2/style.scss"

import "./style.scss"
function Register() {
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
    const initialFieldValues = {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP08",
        maLoaiNguoiDung: 'KhachHang',
        hoTen: ""
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const schema = yup.object().shape({
        matKhau: yup.string().min(4).max(20).required(),
        xacNhanMatKhau: yup.string().required().oneOf([yup.ref('matKhau')], 'matKhau must Match'),
        taiKhoan: yup.string().min(4).max(20).required(),
        email: yup.string().email().required(),
        soDt: yup.string().min(4).max(20).required().matches(phoneRegExp, 'So Dien Thoai is not valid'),
        hoTen: yup.string().min(4).max(20).required(),

    })
    const [fieldValues, setFieldValues] = useState(initialFieldValues);
    const registerStatus = useSelector(state => state.registerReducer.data)
    const errorRegister = useSelector(state => state.registerReducer.err)
    const loading = useSelector(state => state.registerReducer.loading)
    const dispatch = useDispatch();
    const history = useHistory();
    let status = 0;

    const checkStatusRegister = () => {
        if (loading)
            return (
                <div className="loader">
                </div>
            )
        if (errorRegister === undefined && registerStatus !== 200 && !loading) {
            status = -1;
            return (
                <div className="loader fail">
                </div>
            )
        }
        if (registerStatus === 200) {
            status = 1;
            return (
                <div className="loader success"></div>
            )
        }
    }
    // useFormContext 
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const SubmitHandler = (data) => {
        setFieldValues({
            ...fieldValues,
            taiKhoan: data.taiKhoan,
            matKhau: data.matKhau,
            email: data.email,
            hoTen: data.hoTen,
            soDt: data.soDt,
        })
        openModal();

        dispatch(fetchRegisterAPI(fieldValues, history));
        console.log(status);
        if (status === -1 || status === 1) {
            setTimeout(() => {
                closeModal()
            }, 2000);
        }
        if (status === 0) {
            setTimeout(() => {
                closeModal()
            }, 3000);
        }
        if (registerStatus === 200 && errorRegister === null && !loading) {
            setTimeout(() => {
                history.push("/login");
            }, 2100);
        }
    }
    // console.log(errors && errors);
    const renderNoticeRegister = () => {
        if (errorRegister === undefined) {
            return <div className="alert alert-danger"> Tài khoản đã tồn tại!
                {/* {errLogin.response.data} */}
            </div>
        }
    }
    return (
        <div className="backGroundLogIn">
            {/* {loading ? <div className="customLoader">
                <Loader />
            </div> : ""} */}
            <div className="container register__content">
                <div className="d-flex justify-content-center h-100 padding__RegisterCustom">
                    <div className="card backGround__register">
                        <div className="card-header">
                            <h3>Đăng Ký</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(SubmitHandler)}>
                                <Modal
                                    isOpen={modalIsOpen}
                                    // onAfterOpen={afterOpenModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    {checkStatusRegister()}
                                    {/* <button onClick={closeModal}>Open Modal</button> */}
                                </Modal>
                                {renderNoticeRegister()}

                                <Controller name="hoTen" control={control} defaultValue="hoTen Test"
                                    render={({ field }) => (
                                        <TextField {...field} label="Họ Tên" variant="filled"
                                            error={!!errors.hoTen}
                                            helperText={errors.hoTen ? errors.hoTen?.message : ''} />
                                    )} />

                                <Controller name="taiKhoan" control={control}
                                    render={({ field }) => (
                                        <TextField {...field} label="Tên Tài Khoản" variant="filled"
                                            error={!!errors.taiKhoan}
                                            helperText={errors.taiKhoan ? errors.taiKhoan?.message : ''} />
                                    )} />

                                <Controller name="matKhau" control={control}
                                    render={({ field }) => (
                                        <TextField {...field} label="Mật Khẩu" variant="filled"
                                            type="password"
                                            error={!!errors.matKhau}
                                            helperText={errors.matKhau ? errors.matKhau?.message : ''} />
                                    )} />

                                <Controller name="xacNhanMatKhau" control={control}
                                    render={({ field }) => (
                                        <TextField {...field} label="Nhập lại Mật Khẩu" variant="filled"
                                            type="password"
                                            error={!!errors.xacNhanMatKhau}
                                            helperText={errors.xacNhanMatKhau ? errors.xacNhanMatKhau?.message : ''} />
                                    )} />
                                <Controller name="email" control={control} defaultValue="gsagag@gmail.com"
                                    render={({ field }) => (
                                        <TextField {...field} label="Email" variant="filled"
                                            error={!!errors.email}
                                            helperText={errors.email ? errors.email?.message : ''} />
                                    )} />

                                <Controller name="soDt" control={control}
                                    render={({ field }) => (
                                        <TextField {...field} label="Số Điện Thoại" variant="filled"
                                            error={!!errors.soDt}
                                            helperText={errors.soDt ? errors.soDt?.message : ''} />
                                    )} />
                                <div className="submitContent">
                                    <input type="submit" value="Đăng Ký" className="customInput__Register" />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Bạn đã có tài khoản ?&nbsp;<Link to="./Login">Đăng Nhập</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Register;
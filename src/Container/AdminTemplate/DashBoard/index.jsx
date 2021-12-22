import { TableBody, TableHead } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actListUserAPI, actDeleteUserAPI, actUpdateUserAPI } from "./module/action"
import { AiFillSetting } from "react-icons/ai";
import ReactPaginate from 'react-paginate';
import Loader from '../../../SmallComponent/Loader';
import Button from "@material-ui/core/Button";
import DoneIcon from '@mui/icons-material/Done';
// import { CSSTransition } from "react-transition-group";
import "./style.scss"
function DashBoard() {
    const [totalPage, setTotalPage] = useState('')
    const [currentPageUserTemp, setCurrentPageUserTemp] = useState({ indexPage: 0 })
    const listUser = useSelector(state => state.listInfoUserReducer.data)
    const loading = useSelector(state => state.listInfoUserReducer.loading)
    const dataOfDeleteUser = useSelector(state => state.listInfoUserReducer.dataDeleteUser)
    const dataUpdateUser = useSelector(state => state.listInfoUserReducer.dataUpdateUser)
    const limitItemOfPage = 10;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actListUserAPI(1, limitItemOfPage));
    }, [])
    useEffect(() => {
        if (listUser)
            setTotalPage(listUser.totalPages)
    }, [listUser])
    useEffect(() => {
        if (dataOfDeleteUser)
            dispatch(actListUserAPI(currentPageUserTemp.indexPage, limitItemOfPage));
    }, [dataOfDeleteUser])
    useEffect(() => {
        if (dataUpdateUser)
            dispatch(actListUserAPI(currentPageUserTemp.indexPage, limitItemOfPage));
    }, [dataUpdateUser])
    const handleDeleteUser = (taiKhoan) => {
        if (window.confirm('Bạn có chắc muốn xóa User ? ')) {
            dispatch(actDeleteUserAPI(taiKhoan))
        }
    }
    const handleCancelEditUser = () => {
        setLocationClick({ index: null })
    }
    const handleEditUser = (e, indexs, taiKhoan, matKhau, hoTen, email, maLoaiNguoiDung, soDt) => {
        setLocationClick({ index: indexs })
        e.preventDefault();
        setAccountUpdate({
            ...accountUpdate,
            taiKhoan: taiKhoan,
            matKhau: matKhau,
            email: email,
            soDt: soDt,
            maLoaiNguoiDung: maLoaiNguoiDung,
            hoTen: hoTen
        })
    }

    const handleEditUserSucess = () => {
        if (window.confirm('Bạn có chắc muốn Thay Đổi User ? ')) {
            dispatch(actUpdateUserAPI(accountUpdate))
            setLocationClick({ index: null })
        }
    }
    // accessToken
    // const toKen = JSON.parse(localStorage.getItem('UserAdmin'));
    const [locationClick, setLocationClick] = useState({ index: null })
    const [accountUpdate, setAccountUpdate] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP08",
        maLoaiNguoiDung: "",
        hoTen: ""
    })
    // console.log(accountUpdate);
    const tableManageUser = () => {
        if (loading)
            return <Loader />
        else if (listUser) {
            return listUser.items.map((item, index) => {
                return (
                    <tr key={index} className="customInputChange">
                        {locationClick.index === index ?
                            <>
                                <td>{item.taiKhoan}</td>
                                <td>   <input defaultValue={item.matKhau} onChange={(e) => {
                                    e.preventDefault(); setAccountUpdate({ ...accountUpdate, matKhau: e.target.value })
                                }}></input>
                                </td>
                                <td>
                                    <input defaultValue={item.hoTen} onChange={(e) => {
                                        e.preventDefault(); setAccountUpdate({ ...accountUpdate, hoTen: e.target.value })
                                    }}></input>
                                </td>
                                <td>
                                    <input defaultValue={item.email} onChange={(e) => {
                                        e.preventDefault(); setAccountUpdate({ ...accountUpdate, email: e.target.value })
                                    }}></input>
                                </td>
                                <td>
                                    <input defaultValue={item.soDt} onChange={(e) => {
                                        e.preventDefault(); setAccountUpdate({ ...accountUpdate, soDt: e.target.value })
                                    }}></input>
                                </td>
                                {/* {item.maLoaiNguoiDung} */}
                                <td>
                                    <select onChange={(e) => {
                                        e.preventDefault();
                                        setAccountUpdate({ ...accountUpdate, maLoaiNguoiDung: e.target.value })
                                    }}>
                                        {item.maLoaiNguoiDung === "KhachHang" ? (
                                            <>
                                                <option value="KhachHang">KhachHang</option>
                                                <option value="QuanTri">QuanTri</option>
                                            </>
                                        ) :
                                            (
                                                <>
                                                    <option value="QuanTri">QuanTri</option>
                                                    <option value="KhachHang">KhachHang</option>
                                                </>
                                            )
                                        }

                                    </select>
                                </td>
                                <td className="customPaddingManageUser">
                                    <Button color="primary" variant="contained" onClick={() => {
                                        handleEditUserSucess();
                                    }}>
                                        <DoneIcon />
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => {
                                        handleCancelEditUser()
                                    }}>
                                        X
                                    </Button>
                                </td>
                            </>
                            :
                            <>
                                <td>{item.taiKhoan}</td>
                                <td>{item.matKhau}</td>
                                <td>{item.hoTen}</td>
                                <td>{item.email}</td>
                                <td>{item.soDt}</td>
                                <td>{item.maLoaiNguoiDung}</td>
                                <td className="customPaddingManageUser">
                                    <Button color="primary" variant="contained" onClick={(event) => {
                                        handleEditUser(event, index, item.taiKhoan, item.matKhau,
                                            item.hoTen,
                                            item.email,
                                            item.maLoaiNguoiDung, item.soDt);
                                    }}>
                                        Sửa
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => {
                                        handleDeleteUser(item.taiKhoan)
                                    }}>
                                        Xóa
                                    </Button>
                                </td>
                            </>
                        }

                    </tr>
                )
            })
        }
    }
    const handlePageUserClicked = (e) => {
        let currentPageUser = e.selected + 1;
        setCurrentPageUserTemp({ indexPage: e.selected + 1 });
        dispatch(actListUserAPI(currentPageUser, limitItemOfPage));
    }
    return (
        <div className="DashBoard__Admin">
            <div className="DashBoard__content">
                <h3>Danh sách nhân viên</h3>
                <Row>
                    <Col lg={12}>
                        <Table>
                            <TableHead>
                                <tr>
                                    <th>Tài Khoản</th>
                                    <th>Mật Khẩu</th>
                                    <th>Họ Tên</th>
                                    <th>Email</th>
                                    <th>Số ĐT</th>
                                    <th>Quyền hạn</th>
                                    <th><AiFillSetting /></th>
                                </tr>
                            </TableHead>
                            <TableBody>
                                {tableManageUser()}
                            </TableBody>
                        </Table>
                    </Col>
                </Row>

                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={totalPage}
                    marginPagesDisplayed={3}
                    onPageChange={handlePageUserClicked}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    )
}
export default DashBoard;
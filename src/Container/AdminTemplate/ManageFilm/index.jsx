import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { TableBody, TableHead } from '@material-ui/core';
import { AiFillSetting } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { actListFilmAPI } from "./module/action"
import Button from "@material-ui/core/Button";
import Loader from '../../../SmallComponent/Loader';
import Modal from 'react-modal';
import ModalVideo from 'react-modal-video';
import getVideoId from 'get-video-id';
import ConditionHanding from "./ConditionHanding"
import "./style.scss";
function ManageFilm() {
    const [modalIsOpen, setModalIsOpen] = useState({
        modalEditIsOpen: false,
        modalTrailerIsOpen: false,
        videoModal: null,

    });
    const dataListFilm = useSelector(state => state.listInfoFilmReducer.data);
    const loading = useSelector(state => state.listInfoFilmReducer.loading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actListFilmAPI())
    }, [])

    const showModalTrailer = () => {
        if (modalIsOpen.videoModal) {
            const trailer = modalIsOpen.videoModal;
            const { id } = getVideoId(trailer);
            return (
                <React.Fragment>
                    <ModalVideo channel='youtube' autoplay isOpen={modalIsOpen.modalTrailerIsOpen} videoId={id} onClose={() => setModalIsOpen({ modalTrailerIsOpen: false })} />
                </React.Fragment>
            );
        }
    };
    const tableManageFilm = () => {
        if (loading)
            return <Loader />
        if (dataListFilm) {
            return dataListFilm.map((item, index) => {
                return (
                    <tr key={index} className="managerFilm__Content">
                        <td><p>{item.maPhim}</p></td>
                        {/* item.hinhAnh */}
                        <td><p className="textLong">{item.tenPhim}</p></td>
                        <td><p className="textLong">{item.biDanh}</p></td>
                        <td>
                            <p className="textLong">
                                <Button variant="link" className="text-decoration-none text-black btnTempPlayListMovie" onClick={(e) => {
                                    setModalIsOpen({ modalTrailerIsOpen: true, videoModal: item.trailer })

                                }}>
                                    <p>Trailer</p>
                                </Button>
                                {showModalTrailer()}
                            </p>
                        </td>
                        <td className="tdFilm">
                            <div>
                                <img src={item.hinhAnh} alt={item.maPhim}></img>
                            </div>
                        </td>
                        <td><p className="textLong">{item.moTa}</p></td>
                        <td>{new Date(item.ngayKhoiChieu).toLocaleDateString()}</td>
                        <td><p style={{ textAlign: "center" }}>{item.danhGia}</p></td>
                        <td className="customPaddingManageUser">
                            <Button color="primary" variant="contained">
                                Sửa
                            </Button>
                            <Button variant="contained" color="secondary">
                                Xóa
                            </Button>
                        </td>
                    </tr >
                )
            })
        }
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -60%)',
            height: '600px',
            width: '600px',
            // transform: 'translateY(-100px)',
            // transition: 'all 500ms ease-in-out',
            // background: 'transparent',
            // border: 'transparent',
        },
    };
    const openModalEdit = (showValue) => {
        setModalIsOpen({ modalEditIsOpen: showValue })
    }
    const handleAddFilm = () => {
        openModalEdit(true)
    }
    useEffect(() => {
        Modal.setAppElement('body');
    }, [])
    return (
        <div className="manageFilm">
            <div className="manageFilm__content">
                <div className="manageFilm__title">
                    <Row>
                        <h3 style={{ paddingLeft: "15px" }}>Quản Lý Phim</h3>
                        <Button variant="contained" className="customMarginButton" onClick={() => {
                            handleAddFilm()
                        }} style={{ marginBottom: "8px", backgroundColor: "rgba(20, 50, 93, 0.9)", color: "white" }}>
                            Thêm Phim
                        </Button>
                        {/* <Button variant="contained" onClick={handleAddFilm()} style={{ marginBottom: "8px", backgroundColor: "rgba(20, 50, 93, 0.9)", color: "white" }}>
                            Thêm Phim
                        </Button> */}
                    </Row>
                </div>
                <Modal
                    isOpen={modalIsOpen.modalEditIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={() => {
                        setModalIsOpen({ modalEditIsOpen: false })
                    }}
                    // className="customModalTransition"
                    style={customStyles}
                    overlayClassName="Overlay"
                    contentLabel="Example Modal"
                >
                    <ConditionHanding />
                    {/* <button onClick={() => {
                        openModalEdit(false)
                    }}>Close Modal</button> */}
                </Modal>
                <div className="test">
                </div>
                <Row>
                    <Col lg={12}>
                        <Table size="sm">
                            <TableHead>
                                <tr>
                                    <th>Mã Phim</th>
                                    <th>Tên Phim</th>
                                    <th>Bí Danh</th>
                                    <th>trailer</th>
                                    <th>Hình Ảnh</th>
                                    <th>Mô Tả</th>
                                    <th>Ngày Khởi Chiếu</th>
                                    <th>Đánh Giá</th>
                                    <th style={{ textAlign: "center" }}><AiFillSetting /></th>
                                </tr>
                            </TableHead>
                            <TableBody>
                                {tableManageFilm()}
                            </TableBody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default ManageFilm;
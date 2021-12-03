import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom"
import { actDetailMovieAPI } from './module/action';
import Loader from "../../../SmallComponent/Loader";
import Button from "@material-ui/core/Button";
import star from "../../../assets/images/star1.png";
import halfStar from "../../../assets/images/star1.2.png";
import "./style.scss"
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
function DetailsPage() {
    const param = useParams()
    const details = useSelector(state => state.detailsPageReducer.data)
    console.log(details);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actDetailMovieAPI(param.id));
    }, [])
    const soSao = (chiSoDanhGia) => {
        let arrSoSao = [];
        for (let i = 1; i <= chiSoDanhGia / 2; i++) {
            arrSoSao.push(<img src={star} alt="" />);
        }
        if (chiSoDanhGia % 2 > 0) arrSoSao.push(<img src={halfStar} alt="" />);
        return arrSoSao;
    };
    return (
        <div className="pageDetail__main" style={{ width: "100%", height: "100%" }}>
            <div className="pagedetail__content">
                {details ? (
                    <>
                        <div className="backgroundImage__Custom" style={{ backgroundImage: `url(${details.hinhAnh})` }} >
                        </div>
                        <div className="pagedetail__title">
                            <Row>
                                <Col lg={3} className="imgDetail">
                                    <img src={details.hinhAnh}></img>
                                </Col>
                                <Col lg={5} className="titleDetail">
                                    <div className="titleDetailInfo1">
                                        <span>{new Date(details.ngayKhoiChieu).toLocaleDateString()}</span>
                                    </div>
                                    <div className="titleDetailInfo2">
                                        <button className="btn btn-success py-0 px-3 mr-1 disable">C18</button>
                                        <p>{details.tenPhim}</p>
                                    </div>
                                    <div className="titleDetailInfo3">
                                        <p>120 phút</p>
                                    </div>
                                    <Button variant="contained" color="secondary">
                                        Mua vé
                                    </Button>
                                </Col>
                                <Col lg={2} className="awardDetail">
                                    <b> {details.danhGia}/10</b>
                                    <p>{soSao(details.danhGia)}</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="tabInfo">
                            <Tabs
                                id="controlled-tab-example"
                                defaultActiveKey="home"
                                // onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Home">
                                    Home
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    Profile
                                </Tab>
                                <Tab eventKey="contact" title="Contact">
                                    Contact
                                </Tab>
                            </Tabs>
                        </div>
                    </>
                ) :
                    <div style={{ height: "100vh" }}>
                        <div className="customLoader">
                            <Loader />
                        </div>
                    </div>

                }
            </div>
        </div>
    )
}
export default DetailsPage;
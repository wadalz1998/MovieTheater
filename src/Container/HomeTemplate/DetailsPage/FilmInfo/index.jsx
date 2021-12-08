import React from 'react'
import propTypes from "prop-types";
import { Row, Col } from 'react-bootstrap'

import "./style.scss"
FilmInfo.propTypes = {
    ngayKhoiChieu: propTypes.string,
    moTa: propTypes.string,
};
FilmInfo.defaultProps = {
    ngayKhoiChieu: null,
    moTa: null,
};
export default function FilmInfo(props) {
    const { ngayKhoiChieu, moTa } = props;
    return (
        <div className="mainFilmInfo">
            <Row>
                <Col lg={6}>
                    <div className="rowLeftTitle">
                        <div className="contentTitle">
                            <p>Ngày công chiếu</p>
                        </div>
                        <div className="contentInfo">
                            <p>{new Date(ngayKhoiChieu).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="rowLeftTitle">
                        <div className="contentTitle">
                            <p>Đạo diễn</p>
                        </div>
                        <div className="contentInfo">
                            <p>NaN</p>
                        </div>
                    </div>
                    <div className="rowLeftTitle">
                        <div className="contentTitle">
                            <p>Diễn viên</p>
                        </div>
                        <div className="contentInfo">
                            <p>NaN</p>
                        </div>
                    </div>
                    <div className="rowLeftTitle">
                        <div className="contentTitle">
                            <p>Thể Loại</p>
                        </div>
                        <div className="contentInfo">
                            <p>NaN</p>
                        </div>
                    </div>
                    <div className="rowLeftTitle">
                        <div className="contentTitle">
                            <p>Định dạng</p>
                        </div>
                        <div className="contentInfo">
                            <p> 2D/Digital</p>
                        </div>
                    </div>
                    <div className="rowLeftTitle">
                        <div className="contentTitle">
                            <p>Quốc Gia SX</p>
                        </div>
                        <div className="contentInfo">
                            <p>NaN</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="rowLeftTitle">
                        <div className="contentTitle">
                            <p>Nội Dung</p>
                        </div>
                        <div className="contentFilmInfo">
                            <p>{moTa}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

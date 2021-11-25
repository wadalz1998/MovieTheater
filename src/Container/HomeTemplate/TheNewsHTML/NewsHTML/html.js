import React from 'react'
import { Col, Row } from 'react-bootstrap'
import hinh1 from "../../../../assets/images/imgNews/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
import hinh2 from "../../../../assets/images/imgNews/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
import hinh3 from "../../../../assets/images/imgNews/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
import hinh4 from "../../../../assets/images/imgNews/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
import hinh5 from "../../../../assets/images/imgNews/review-spider-man-into-the-spider-vesre-15886520889426.png"
import hinh6 from "../../../../assets/images/imgNews/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
import hinh7 from "../../../../assets/images/imgNews/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
import hinh8 from "../../../../assets/images/imgNews/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
import imgLike from "../../../../assets/images/like.png"
import imgComment from "../../../../assets/images/comment.png"

import "../style.scss"

export default function NewsHTML() {
    return (
        <div>
            <div className="news__item mb-4 container-md-fluid container-lg">
                <Row>
                    <Col lg={6} sm={6}>
                        <div className="news__item__img">
                            <a href="#"><img src={hinh1} alt="" /></a>
                        </div>
                        <div className="news__item__text">
                            <a href="#" className="news__item__text_tieude ">
                                <p>Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết</p>
                            </a>
                            <p>Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám</p>
                            <span><img src={imgLike} alt="" /> 0</span>
                            <span><img src={imgComment} alt="" /> 0</span>
                        </div>
                    </Col>
                    <Col lg={6} sm={6}>
                        <div className="news__item__img">
                            <a href="#"><img src={hinh2} alt="" /></a>
                        </div>
                        <div className="news__item__text">
                            <a href="#" className="news__item__text_tieude  ">
                                <p>Review: Dinh Thự Oan Khuất (Ghost Of War)</p>
                            </a>
                            <p>Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ
                                để đem khán giả trở lại phòng vé!</p>
                            <span><img src={imgLike} alt="" /> 0</span>
                            <span><img src={imgComment} alt="" /> 0</span>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="news__item container-md-fluid container-lg">
                <Row>
                    <Col lg={4} sm={4}>
                        <div className="news__item__img">
                            <a href="#"><img src={hinh3} alt="" /></a>
                        </div>
                        <div className="news__item__text">
                            <a href="#" className="news__item__text_tieude  ">
                                <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX </p>
                            </a>
                            <p>Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là
                                một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho
                                tới tận hôm nay.</p>
                            <span><img src={imgLike} alt="" /> 4</span>
                            <span><img src={imgComment} alt="" /> 0</span>
                        </div>
                    </Col>
                    <Col lg={4} sm={4}>
                        <div className="news__item__img">
                            <a href="#"><img src={hinh4} alt="" /></a>
                        </div>
                        <div className="news__item__text">
                            <a href="#" className="news__item__text_tieude">
                                <p>American Sniper - Chính nghĩa hay phi nghĩa?</p>
                            </a>
                            <p>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé
                                trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.</p>
                            <span><img src={imgLike} alt="" /> 0</span>
                            <span><img src={imgComment} alt="" /> 0</span>
                        </div>
                    </Col>
                    <Col lg={4} sm={4} className="container-sm">
                        <div className="container-sm">
                            <Row>
                                <Col lg={12} className="news_empty col-12">
                                    <Row>
                                        <Col lg={2} sm={3} className="p-0">
                                            <div className="news__item__img">
                                                <img src={hinh5} alt="" />
                                            </div>
                                        </Col>
                                        <Col lg={10} sm={9}>
                                            <a href="#" className="news__item__text_tieude  ">
                                                <p>Review: Spider-Man: Into The Spider-Vesre </p>
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={!2} className="news_empty">
                                    <Row>
                                        <Col lg={2} sm={3} className="p-0">
                                            <div className="news__item__img">
                                                <img src={hinh6} alt="" />
                                            </div>
                                        </Col>
                                        <Col lg={10} sm={9}>
                                            <a href="#" className="news__item__text_tieude  ">
                                                <p>COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                                                </p>
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={12} className="news_empty">
                                    <Row>
                                        <Col lg={2} sm={3} className="p-0">
                                            <div className="news__item__img">
                                                <img src={hinh7} alt="" />
                                            </div>
                                        </Col>
                                        <Col lg={10} sm={9}>
                                            <a href="#" className="news__item__text_tieude">
                                                <p>[Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao
                                                    giờ...</p>
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={12} className="news_empty">
                                    <Row>
                                        <Col lg={2} sm={3} className="p-0">
                                            <div className="news__item__img">
                                                <img src={hinh8} alt="" />
                                            </div>
                                        </Col>
                                        <Col lg={10} sm={9}>
                                            <a href="#" className="news__item__text_tieude">
                                                <p>[Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                                                    hùng...</p>
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

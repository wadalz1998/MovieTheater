import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgMobile from "../../assets/images/mobile.png"
import { Col, Row } from 'react-bootstrap';
import Button from "@material-ui/core/Button";
import slide1 from "../../assets/images/slide1.jpg"
import slide2 from "../../assets/images/slide2.jpg"
import slide3 from "../../assets/images/slide3.jpg"
import "./style.scss"
export default function HomeApp() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <section className="app__content">
            <div className="" id="homeApp">
                <div className="container">
                    <Row className="textCustom">
                        <Col lg={6} md={6} className="customPadding">
                            <p>Ứng dụng tiện lợi dành cho người yêu điện ảnh</p><br />
                            <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p><br />
                            <Button variant="contained" color="secondary">App miễn phí - Tải về ngay!</Button>
                        </Col>
                        <Col lg={6} md={6} className="mobileCarousel">
                            <div>
                                <img src={imgMobile} className="imgMobile" alt="imgMobile"></img>
                            </div>
                            <div className="carouselMobile">
                                <Slider {...settings}>
                                    <div>
                                        <img src={slide1} alt="slide1"></img>
                                    </div>
                                    <div>
                                        <img src={slide2} alt="slide2"></img>
                                    </div>
                                    <div>
                                        <img src={slide3} alt="slide3"></img>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>

    )
}

import React, { Component } from "react";

import BannerA from "../../../assets/images/chong-nguoi-ta-bannerC.png";
import BannerB from "../../../assets/images/BannerB.jpg";
import BannerC from "../../../assets/images/BannerC.png";
import BannerD from "../../../assets/images/BannerD.jpg";
import ButtonLeftCarousel from "../../../assets/images/back-session.png";
import ButtonRightCarousel from "../../../assets/images/next-session.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonPlay from "../../../assets/images/play-video.png";

import "./style.scss";

import { Link } from "react-router-dom";

export default class BannerCarousel extends Component {
  render() {
    return (
      <section className="movieCarousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={BannerA} className="d-block w-100" alt="..." />
              <div className="movie__detail">
                <a
                  className="venobox text-decoration-none text-white "
                  data-autoplay="true"
                  data-vbtype="video"
                  href="https://youtu.be/PF8_2V2wAUQ"
                >
                  <img src={ButtonPlay}></img>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={BannerB} className="d-block w-100" alt="..." />
              <div className="movie__detail">
                <a
                  className="venobox text-decoration-none text-white "
                  data-autoplay="true"
                  data-vbtype="video"
                  href="https://youtu.be/Vk-gqL3c5qU"
                >
                  <img src={ButtonPlay}></img>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={BannerC} className="d-block w-100" alt="..." />
              <div className="movie__detail">
                <a
                  className="venobox text-decoration-none text-white "
                  data-autoplay="true"
                  data-vbtype="video"
                  href="https://youtu.be/0qaStyeKpLo"
                >
                  <img src={ButtonPlay}></img>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={BannerD} className="d-block w-100" alt="..." />
              <div className="movie__detail">
                <a
                  className="venobox text-decoration-none text-white "
                  data-autoplay="true"
                  data-vbtype="video"
                  href="https://youtu.be/L2EodPu-3DY"
                >
                  <img src={ButtonPlay}></img>
                </a>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <img src={ButtonLeftCarousel} alt="" />
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <img src={ButtonRightCarousel} alt="" />
          </a>
        </div>
        {/* thanh chọn mua vé */}
        <div className="buyTicket">
          <div className="content">
            <div className="row ml-0">
              <div className="col-4 widthByPercent px-0">
                <div
                  className="btn btn-primary  btn-block dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Phim
                  <span className="caret" />
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Nữ Thần Chiến Binh 1984 - Wonder Woman 1984
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận - Demon Slayer
                        The Movie: Mugen Train (P)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hoa Phong Nguyệt Vũ - The Crawler (C18)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Doraemon: Nobita và Những Bạn Khủng Long Mới - Doraemon
                        the Movie: Nobita's New Dinosaurs (P)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Nghề Siêu Khó - Extreme Job (C18)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Gia Đình Croods: Kỷ Nguyên Mới - The Croods: New Age (P)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bí Mật Của Gió - Secrets of the Wind (C16)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Chồng Người Ta (C18)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Trái Tim Quái Vật (C18)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-2 widthByPercent px-0 ">
                <div className="dropdown">
                  <button
                    className="btn btn-block dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                  >
                    Rạp
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        BHD Star Vincom Lê Văn Việt
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        BHD Star Vincom Quang Trung
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        BHD Star Vincom 3/2
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-2 widthByPercent px-0 ">
                <div className="dropdown">
                  <button
                    className="btn btn-block dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Ngày chiếu
                    <span className="caret" />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="friendly ng-binding">Hôm nay</span>
                        <span className="origin ng-binding">2020-12-14</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="friendly ng-binding">Hôm mai</span>
                        <span className="origin ng-binding">2020-12-15</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="friendly ng-binding">Thứ 4</span>
                        <span className="origin ng-binding">2020-12-16</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-2 widthByPercent px-0 ">
                <div className="dropdown">
                  <button
                    className="btn btn-block dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                  >
                    Suất chiếu
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        10:10
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        11:15
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        13:30
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-2 widthByPercent px-0 ">
                <button type="button" className="btn btnMua">
                  MUA VÉ NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

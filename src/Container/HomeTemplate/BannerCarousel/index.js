import React, { Component } from "react";

import BannerA from "../../../assets/images/chong-nguoi-ta-bannerC.png";
import BannerB from "../../../assets/images/BannerB.jpg";
import BannerC from "../../../assets/images/BannerC.png";
import BannerD from "../../../assets/images/BannerD.jpg";
import ButtonLeftCarousel from "../../../assets/images/back-session.png";
import ButtonRightCarousel from "../../../assets/images/next-session.png";
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
        {/* thanh ch???n mua v?? */}
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
                        N??? Th???n Chi???n Binh 1984 - Wonder Woman 1984
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Thanh G????m Di???t Qu???: Chuy???n T??u V?? T???n - Demon Slayer
                        The Movie: Mugen Train (P)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hoa Phong Nguy???t V?? - The Crawler (C18)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Doraemon: Nobita v?? Nh???ng B???n Kh???ng Long M???i - Doraemon
                        the Movie: Nobita's New Dinosaurs (P)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Ngh??? Si??u Kh?? - Extreme Job (C18)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Gia ????nh Croods: K??? Nguy??n M???i - The Croods: New Age (P)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        B?? M???t C???a Gi?? - Secrets of the Wind (C16)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Ch???ng Ng?????i Ta (C18)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Tr??i Tim Qu??i V???t (C18)
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
                    R???p
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        BHD Star Vincom L?? V??n Vi???t
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
                    Ng??y chi???u
                    <span className="caret" />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="friendly ng-binding">H??m nay</span>
                        <span className="origin ng-binding">2020-12-14</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="friendly ng-binding">H??m mai</span>
                        <span className="origin ng-binding">2020-12-15</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="friendly ng-binding">Th??? 4</span>
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
                    Su???t chi???u
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
                  MUA V?? NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

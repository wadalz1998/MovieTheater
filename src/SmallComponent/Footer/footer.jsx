import React from 'react'

import Loopicon from "./loopicon.js"

import cgv from "../../assets/images/iconFooter/cgv.png"
import bhd from "../../assets/images/iconFooter/bhd.png"
import cinestar from "../../assets/images/iconFooter/cgv.png"
import lotte from "../../assets/images/iconFooter/404b8c4b80d77732e7426cdb7e24be20.png"
import galaxycine from "../../assets/images/iconFooter/galaxycine.png"
import megags from "../../assets/images/iconFooter/megags.png"
import appleLogo from "../../assets/images/iconFooter/apple-logo.png"
import androidLogo from "../../assets/images/iconFooter/android-logo.png"
import facebookLogo from "../../assets/images/iconFooter/facebook-logo.png"
import zaloLogo from "../../assets/images/iconFooter/zalo-logo.png"
import zionLogo from "../../assets/images/iconFooter/zion-logo.jpg"
import infoVerify from "../../assets/images/iconFooter/d1e6bd560daa9e20131ea8a0f62e87f8.png"
import "./style.scss"
export default function Footer() {
      return (
        <footer id="footer" className="py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className="title">Tix</p>
                        <div className="row">
                            <div className="col-md-6 fontSizeP">
                                <a href="#">FAQ</a><br />
                                <a href="#">Brand Guidelines</a>
                            </div>
                            <div className="col-md-6 fontSizeP">
                                <a href="#">Thỏa thuận sử dụng</a><br />
                                <a href="#">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-3 ">
                        <p className="title">Đối tác</p>
                        <div className="row">
                            <Loopicon iconName1={cgv} iconName2={cinestar} iconName3={megags} iconName4={megags} />
                            <Loopicon iconName1={cinestar} iconName2={galaxycine} iconName3={cgv} iconName4={bhd} />
                            <Loopicon iconName1={megags} iconName2={lotte} iconName3={megags} iconName4={lotte} />
                            <Loopicon iconName1={lotte} iconName2={bhd} iconName3={cinestar} iconName4={galaxycine} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className="title">Mobile App</p>
                        <div className="row">
                            <div className="col-md-6">
                                <a href="#"><img className="iconApp" src={appleLogo} alt="appleLogo" /></a>
                                <a href="#"><img className="iconApp" src={androidLogo} alt="androidLogo" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className="title">Social</p>
                        <div className="row">
                            <div className="col-md-6">
                                <a href="#"><img className="iconApp" src={facebookLogo} alt="facebookLogo" /></a>
                                <a href="#"><img className="iconApp" src={zaloLogo} alt="zaloLogo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="hrFooter" />
                <div className="row">
                    <div className="col-md-1">
                        <img className="imgZion" src={zionLogo} alt="zionLogo" />
                    </div>
                    <div className="col-md-9 infoFooter">
                        <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span><br />
                        <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span><br />
                        <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,<br />đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
                            ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
                            Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí Minh cấp. <br /></span>
                        <span>Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436 <br />Email: <a href="mailto:support@tix.vn" style={{ color: '#FB4226' }}>support@tix.vn</a></span>
                    </div>
                    <div className="col-md-2t">
                        <img className="imgBoCo" src={infoVerify} alt="infoVerify" />
                    </div>
                </div>
            </div>
        </footer>


    )
}

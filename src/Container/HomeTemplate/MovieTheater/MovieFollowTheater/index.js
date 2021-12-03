import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actListMovieFollowTheaterAPI } from "./module/action";
import Loader from "../../../../SmallComponent/Loader";
import { Link } from "react-router-dom"
import "./style.scss";

MovieFollowTheater.propTypes = {
  keyHeThongRap: propTypes.array,
  diaChiCha: propTypes.array,
};
MovieFollowTheater.defaultProps = {
  keyHeThongRap: [],
  diaChiCha: null,
};
function MovieFollowTheater(props) {
  // const [dateTime, setDateTime] = useState(new Date());
  const { keyHeThongRap, diaChiCha } = props;
  const loading = useSelector(
    (state) => state.listMovieFollowTheaterReducer.loading
  );
  const flimFollowTheater = useSelector(state => state.listMovieFollowTheaterReducer.data);

  const dispatch = useDispatch();
  useEffect(() => {
    if (keyHeThongRap) dispatch(actListMovieFollowTheaterAPI(keyHeThongRap))
  }, [])

  // className={item && item.diaChi === diaChiCha ? 'true' : 'emptyFlim'}
  const convert = (time) => {
    const timezone = time.slice(-2);
    let [hours, minutes] = time.split(':');
    if (timezone === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  }
  return (
    //  md={8} sm={}
    <Row>
      <Col lg={12} className="movie__FollowingTheater">
        <div className="movie__FollowingTheater__item">
          {flimFollowTheater && Object.entries(flimFollowTheater).map(([keyName, key], i) => {
            return (
              <div key={keyName + i}>
                {keyName === keyHeThongRap ?
                  [key[0].lstCumRap.map((item, i) => {
                    // { console.log(item) }
                    return (
                      <div key={i}>
                        {item.diaChi && item.diaChi === diaChiCha
                          ?
                          (
                            <div className="pb-2">
                              <a href="#">
                                <div className="movie__FollowingTheater__title">
                                  {item.danhSachPhim.map((itemDanhSachPhim, i) => {
                                    return (<>
                                      {itemDanhSachPhim ? (
                                        <Row key={i} className="customTopBot">
                                          <Col lg={2} className="text-center">
                                            <img src={itemDanhSachPhim.hinhAnh}></img>
                                          </Col>
                                          <Col lg={10}>
                                            <p className="font-weight-bold mb-0"> <span className="bg-danger px-1 mr-1 text-light">C16</span>{itemDanhSachPhim.tenPhim}</p>
                                            <p className="text_90p mb-0">90 Phút</p>
                                            <Row>
                                              {/* {console.log(new Date(itemDanhSachPhim.lstLichChieuTheoPhim[0].ngayChieuGioChieu).toLocaleDateString())} */}
                                              {/* itemDanhSachPhim.lstLichChieuTheoPhim (props) = maLichChieu - maRap - tenRap - ngayChieuGioChieu - giaVe*/}

                                              {itemDanhSachPhim && itemDanhSachPhim.lstLichChieuTheoPhim.slice(0, 5).map((item) => {
                                                return (
                                                  <div className="mr-2 p-0 py-1 m-1 cinema__item__time">
                                                    <Link to="/bookticket">
                                                      <p> {convert(new Date(item.ngayChieuGioChieu).toLocaleTimeString())}</p>
                                                    </Link>
                                                  </div>
                                                )
                                              })}
                                            </Row>
                                          </Col>
                                        </Row>)
                                        :
                                        ""
                                      }
                                    </>
                                    )
                                  })}
                                </div>
                              </a>
                            </div>
                          )
                          :
                          ""
                        }
                      </div>
                    )
                  })]
                  : ""
                }
              </div>)
          })}
        </div>
      </Col>
    </Row>
  );
}
export default MovieFollowTheater;

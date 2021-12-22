import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loader from '../../../../SmallComponent/Loader';
import PropTypes from 'prop-types';


import "./style.scss"
export default function Showtimes(props) {
  // const [testState, setTestState] = useState(false)
  const { detailShowTimes } = props;
  console.log(detailShowTimes);
  const listMovieTheater = useSelector(
    (state) => state.listMovieTheaterReducer.data
  );

  // localStorage.getItem('myData');
  const loading = useSelector((state) => state.listMovieTheaterReducer.loading);

  if (listMovieTheater) {
    localStorage.setItem("logoTheater", JSON.stringify(listMovieTheater))
  }
  const logoTheater = JSON.parse(localStorage.getItem('logoTheater'))

  const renderDayOfWeek = (param) => {
    switch (param) {
      case 'Mon':
        return 'Thứ 2';
      case 'Tue':
        return 'Thứ 3';
      case 'Wed':
        return 'Thứ 4';
      case 'Thu':
        return 'Thứ 5';
      case 'Fri':
        return 'Thứ 6';
      case 'Sat':
        return 'Thứ 7';
      case 'Sun':
        return 'Chủ Nhật';
      default:
        return 'DayOfWeek';
    }
  }
  const renderDateOfMonth = (day, month) => {
    const even = [0, 2, 4, 6, 7, 9, 11]
    const odd = [1, 3, 5, 8, 10]
    if (even.indexOf(`${month}`)) {
      if (day > 31) {
        return day - 31;
      }
    }
    if (odd.indexOf(`${month}`)) {
      if (day > 30) {
        return day - 30;
      }
    }
    return day;
  }

  // const even = [0, 2, 4, 6, 7, 9, 11]
  // console.log(even.indexOf(10) > -1);
  const handleDisableDrag = (e) => {
    e.preventDefault();
  }
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  const checkDate = () => {
    const arrayHTML = [];
    for (let i = 0; i <= 7; i++) {
      let dateOfWeek = new Date();
      dateOfWeek.setDate(dateOfWeek.getDate() + i);
      let t = `${dateOfWeek}`;
      let sliceDayOfWeek = t.slice(0, 3);
      let finalDate = date + i;
      arrayHTML.push(
        <Nav.Link eventKey={i} onDragStart={handleDisableDrag}>
          <p>{renderDayOfWeek(sliceDayOfWeek)}</p>
          {/* <p>{date + i}</p> */}
          <p>{renderDateOfMonth(`${finalDate}`, month)}</p>
        </Nav.Link>
      )
    }
    return arrayHTML;
  }
  const contentOfCheckDate = (maHeThongRap, detailShowTimes) => {
    const arrayTabContent = [];
    for (let i = 0; i <= 7; i++) {
      arrayTabContent.push(
        <Tab.Pane eventKey={i}>
          {detailShowTimes
            ?
            detailShowTimes.lichChieu.map((lichChieu, i) => {
              if (lichChieu.thongTinRap.maHeThongRap === maHeThongRap) {
                let finalDate = date + i;
                const temp = renderDateOfMonth(`${finalDate}`, month)
                const temp2 = lichChieu.ngayChieuGioChieu.slice(0, 10);
                const temp3 = temp2.slice(-2)
                // console.log(temp3);
                if (temp3 === temp)
                  return (
                    <p key={i}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString()}</p>
                  )
                  else if(!i)
                  return <p>Không có suất chiếu</p>
              }
              else if(!i){
                return <p>Không có suất chiếu</p>
              }
            }
            )
            :
           ""
          }

        </Tab.Pane>
      )
    }
    return arrayTabContent;
  }

  return (
    <div>
      <Row className="rowTheaterDetail">
        <Col lg={12}>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey={`BHDStar`}
          >
            <Row className="movieTheaterRow__Detail">
              <Col lg={4} className="icon__TheaterDetail">
                <Nav variant="pills" className="flex-column navItem__logoTheareDetail">
                  <Nav.Item>
                    {loading ? (
                      <Loader />
                    ) : (
                      logoTheater &&
                      logoTheater.map((item, i) => {
                        return (
                          <Nav.Link eventKey={item.maHeThongRap} key={i} className="navLink__theaterDetail">
                            <img src={item.logo}></img> <p>{item.tenHeThongRap}</p>
                          </Nav.Link>
                        );
                      })
                    )}
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={8} className="scrollBarMenu__Detail">
                <Tab.Content>
                  {loading ? (
                    <Loader />
                  ) : (
                    logoTheater &&
                    logoTheater.map((item, i) => {
                      return (
                        <Tab.Pane key={i} eventKey={item.maHeThongRap}>
                          {/* -------- */}
                          <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="0"
                          >
                            <Nav variant="pills" className="flex-column">
                              <Nav.Item id="customScrollBar__Detail">
                                {checkDate()}
                              </Nav.Item>
                            </Nav>
                            <Tab.Content>
                              {contentOfCheckDate(item.maHeThongRap, detailShowTimes)}
                              {/* <Tab.Pane eventKey="0">
                                YAY 2
                              </Tab.Pane>
                              <Tab.Pane eventKey="1">
                                YAY 3
                              </Tab.Pane> */}
                            </Tab.Content>
                          </Tab.Container>
                          {/* -------- */}
                        </Tab.Pane>
                      );
                    })
                  )}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </div>
  )
}

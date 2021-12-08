import React from 'react'
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loader from '../../../../SmallComponent/Loader';

import "./style.scss"
export default function Showtimes() {
  const listMovieTheater = useSelector(
    (state) => state.listMovieTheaterReducer.data
  );
  const loading = useSelector((state) => state.listMovieTheaterReducer.loading);
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
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    {loading ? (
                      <Loader />
                    ) : (
                      listMovieTheater &&
                      listMovieTheater.map((item, i) => {
                        return (
                          <Nav.Link eventKey={item.maHeThongRap} key={i}>
                            <img src={item.logo}></img> <h5>{item.tenHeThongRap}</h5>
                          </Nav.Link>
                        );
                      })
                    )}
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={8}>
                <Tab.Content>
                  {loading ? (
                    <Loader />
                  ) : (
                    listMovieTheater &&
                    listMovieTheater.map((item, i) => {
                      return (
                        <Tab.Pane key={i} eventKey={item.maHeThongRap}>
                          {/* -------- */}
                          <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="Monday"
                          >
                            <Nav variant="pills" className="flex-column">
                              <Nav.Item>
                                <Nav.Link eventKey="Monday">
                                  Thứ 2
                                </Nav.Link>
                                <Nav.Link eventKey="Thursday">
                                  Thứ 3
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                            <Tab.Content>
                              <Tab.Pane eventKey="Monday">
                                YAY 2
                              </Tab.Pane>
                              <Tab.Pane eventKey="Thursday">
                                YAY 3
                              </Tab.Pane>
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

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import FilmMovieOfTheater from "./FilmMovieOfTheater";
import MovieTheaterList from "./MovieTheaterList";
import { actListMovietheaterAPI } from "./module/action";
import Loader from "../../../SmallComponent/Loader";
import { Col, Nav, Tab, Row } from "react-bootstrap";
import "./style.scss";

// MovieTheater.prototype = {};

function MovieTheater() {
  const listMovieTheater = useSelector(
    (state) => state.listMovieTheaterReducer.data
  );
  const loading = useSelector((state) => state.listMovieTheaterReducer.loading);
  const isWaitting = useSelector(
    (state) => state.listMovieTheaterReducer.isWaitting
  );
  //   shallowEqual xai` khi co 2 phan tu tro len de clear code
  //   const listMovieTheater = useSelector(
  //     (state) => ({list: state.listMovieTheaterReducer.data ,loadding: state.listMovieTheaterReducer.loadding}),
  //     shallowEqual
  //   );
  //   console.log(listMovieTheater);
  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actListMovietheaterAPI());
  }, []);

  return (
    <section className="cinema" id="c2">
      <div className="d-none d-md-block black_news">
        <div className="container" />
        <div className="cinema_custom d-none d-md-block container-md-fluid container-lg my-4">
          <div className="bd-example bd-example-tabs">
            <div className="">
              {/* <MovieTheaterList
                listMovieTheater={listMovieTheater}
                loading={loading}
              /> */}
              <Row>
                <Col lg={12} sm={1}>
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey={`BHDStar`}
                  >
                    <Row>
                      <Col sm={2} className="icon__theater">
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            {loading ? (
                              <Loader />
                            ) : (
                              listMovieTheater &&
                              listMovieTheater.map((item) => {
                                return (
                                  <Nav.Link eventKey={item.maHeThongRap}>
                                    <img src={item.logo}></img>
                                  </Nav.Link>
                                );
                              })
                            )}
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={10}>
                        <Tab.Content>
                          {loading ? (
                            <Loader />
                          ) : (
                            listMovieTheater &&
                            listMovieTheater.map((item, i) => {
                              return (
                                <Tab.Pane key={i} eventKey={item.maHeThongRap}>
                                  {/* {item.maHeThongRap} */}

                                  <MovieTheaterList
                                    maHeThongRap={item.maHeThongRap}
                                  />
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
          </div>
        </div>
      </div>
    </section>
  );
}
export default MovieTheater;

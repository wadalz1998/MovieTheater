import React, { useEffect, useRef, useState } from "react";
import propTypes from "prop-types";
import Loader from "../../../../SmallComponent/Loader";
import { Col, Nav, Tab, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { actMovieTheaterItemAPI } from "./module/action";
import MovieFollowTheater from "./MovieFollowTheater"

import "./style.scss";
// tuong tu const{ ten } = this.props;
MovieTheaterList.propTypes = {
  maHeThongRap: propTypes.array,
};
MovieTheaterList.defaultProps = {
  maHeThongRap: [],
};
function MovieTheaterList(props) {
  // const { listMovieTheater, loading } = props;
  const { maHeThongRap } = props;
  const loading = useSelector(
    (state) => state.listMovieTheaterItemReducer.loading
  );
  const heThongRap = useSelector(
    (state) => state.listMovieTheaterItemReducer.data
  );
  // const targetRef = useRef();
  // const [dimensions, setDimensions] = useState({ height:0 });
  //   if (targetRef.current) {
  //     setDimensions({
  //       // width: targetRef.current.offsetWidth,
  //       height:[...dimensions,newHeight] ,
  //     });
  //   }
  const dispatch = useDispatch();
  useEffect(() => {
    if (maHeThongRap) dispatch(actMovieTheaterItemAPI(maHeThongRap));
  }, []);
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
        <Row>
          <Col sm={4}>
            <Nav variant="pills" className="flex-column">
            
                {/* <Nav.Link eventKey="second">Tab 2</Nav.Link> */}
                {/* <p>{dimensions.height}</p> */}
                {loading ? (
                  <Loader />
                ) : (
                  heThongRap &&
                  Object.entries(heThongRap).map(([key, items], i) => {
                    // console.log(key + " vs " + items);
                    return (
                      <Nav.Item className={key === maHeThongRap && items.length>5 ? 'addScrollBarY' : ''}>
                      <>
                        {key === maHeThongRap ? (
                          items.length &&
                          items.map((item, i)=>{                 
                             return (<> 
                                   <Nav.Link eventKey={key + i} >
                                      {/* {setDimensions({height:targetRef.current.offsetHeight})}     */}
                                                             
                                      <div>
                                        <p className="cinema__nametheater">
                                          {item.tenCumRap}
                                        </p>
                                        <p className="cinema__nameaddress">
                                          {item.diaChi}
                                        </p>
                                      </div>                             
                                    </Nav.Link>  
                                    </>                                                                 
                          )})
                        ) : (
                          <></>
                        )} 
                      </>
                      </Nav.Item> );
                  })
                )}
                {/* <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item> */}
            
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              {loading ? (
                <Loader />
              ) : (
                heThongRap &&
                Object.entries(heThongRap).map(([key, items], i) => {
                  // console.log(key + " vs " + items);
                  return (
                    <>
                      {key === maHeThongRap ? (
                        items.length &&
                        items.map((item, i) => {
                          return (
                            <Tab.Pane eventKey={key + i}>
                              <MovieFollowTheater keyHeThongRap={key}></MovieFollowTheater>
                            </Tab.Pane>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })
              )}
              {/* <Tab.Pane eventKey="second">2</Tab.Pane> */}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default MovieTheaterList;

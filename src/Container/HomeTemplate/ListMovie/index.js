import React, { Component } from "react";
import MovieItem from "./MovieItem";
import Loader from "../../../SmallComponent/Loader";
import { actListMovieAPI } from "./module/action";
import { connect } from "react-redux";

import "./style.scss";
import { Carousel } from "react-bootstrap";

class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      postsPerPage: 8,
      index: 0,
    };
  }
  componentDidMount() {
    this.props.fetchListMovie();
  }
  renderHTMLTemp = () => {
    <div className="carousel-item active" data-interval="false">
      <div classname="movieComing_hover">
        <div className="movieComing_item"></div>
      </div>
    </div>;
  };
  handleSelect(selectedIndex) {
    this.setState({
      ...this.state,
      index: selectedIndex,
    });
  }
  renderCarouselHTML = () => {
    const { loading, data } = this.props;
    const { postsPerPage } = this.state;

    let arrCarouselItem = [];
    if (loading) return <Loader />;
    if (data) {
      const totalPageMovie = Math.ceil(data.length / postsPerPage);
      for (let i = 1; i <= totalPageMovie; i++) {
        const currentPage = i;
        const indexOfLastMovie = currentPage * postsPerPage;
        const indexOfFirstMovie = indexOfLastMovie - postsPerPage;
        arrCarouselItem.push(
          <Carousel.Item>
            <div className="row">
              {this.renderHTML(indexOfFirstMovie, indexOfLastMovie)};
            </div>
          </Carousel.Item>
        );
      }

      return arrCarouselItem;
    }
  };

  renderHTML = (indexOfFirstMovie, indexOfLastMovie) => {
    const { data } = this.props;
    return (
      data &&
      data.slice(indexOfFirstMovie, indexOfLastMovie).map((item) => {
        return (
          <>
            <MovieItem key={item.maPhim} movie={item} />

            {/* /* ----------------------------------tab2 */}
            {/* <div className="carousel-item" data-interval="false">
              <div classname="movieComing_hover">
                <div className="row movieComing_item"></div>
              </div>
            </div> */}
          </>
        );
      })
    );
  };

  render() {
    const { index } = this.state;
    return (
      <section className="movieComing" id="c1">
        <div className="container-md-fluid container-lg">
          <nav>
            <div
              className="nav nav-tabs justify-content-center"
              id="nav-tab"
              role="tablist"
            >
              <a
                className="nav-link active"
                id="nav-dangchieu-tab"
                data-toggle="tab"
                href="#nav-dangchieu"
                role="tab"
                aria-controls="nav-dangchieu"
                aria-selected="true"
              >
                <p>Đang chiếu</p>
              </a>
              <a
                className="nav-link"
                id="nav-sapchieu-tab"
                data-toggle="tab"
                href="#nav-sapchieu"
                role="tab"
                aria-controls="nav-sapchieu"
                aria-selected="false"
              >
                <p>Sắp chiếu</p>
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-dangchieu"
              data-interval="false"
              role="tabpanel"
              aria-labelledby="nav-dangchieu-tab"
            >
              {/* <Carousel> */}
              <Carousel
                interval={null}
                activeIndex={index}
                indicators={false}
                onSelect={this.handleSelect}
              >
                {this.renderCarouselHTML()}
              </Carousel>
            </div>
            {/* ------------------------tab sap chieu */}
            <div
              className="tab-pane fade"
              id="nav-sapchieu"
              role="tabpanel"
              aria-labelledby="nav-sapchieu-tab"
            >
              <div
                id="carouselExampleInterval2"
                className="carousel slide"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-interval="false">
                    <Carousel
                      interval={null}
                      activeIndex={index}
                      onSelect={this.handleSelect}
                    >
                      {this.renderCarouselHTML()};
                    </Carousel>
                    {/* <div className="row">
                      <div className="movieComing_hover col-6 col-md-3">
                        <div className="movieComing_item">
                          <div className="movieComing_img">
                            <img
                              src="./img/trai-tim-quai-vat-c18-16050651706870.png"
                              alt
                            />
                            <div className="movieComing_img_hover"></div>
                          </div>
                          <div className="movieComing_award">
                            <span>
                              <b>6.1</b>
                              <p>
                                <img src="./img/star1.png" alt />
                                <img src="./img/star1.png" alt />
                                <img src="./img/star1.png" alt />
                                <img src="./img/star1.2.png" alt />
                              </p>
                            </span>
                          </div>
                          <div className="movieComing_soon">
                            <p className="btn btn-danger">Suất chiếu sớm</p>
                          </div>
                          <div className="movieComing_freeYourChoose">
                            <img src="./img/film_type_2.png" alt />
                          </div>
                          <div className="movieComing_content my-2">
                            <div className="movieComing_content_text">
                              <p className="mb-2">
                                <button className="btn btn-danger py-0 px-3 mr-1 ">
                                  P
                                </button>
                                Trái tim quái vật (C18)
                              </p>
                              <p className="movieComing_time">89 phút</p>
                            </div>
                            <div className="movieComing_content_text_hover">
                              <button className="btn">MUA VÉ</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actListMovieAPI());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);

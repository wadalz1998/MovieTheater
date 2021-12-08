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
              className="nav nav-tabs justify-content-center scrollListMovie"
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

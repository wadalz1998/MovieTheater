import React, { Component } from "react";

import star from "../../../../assets/images/star1.png";
import halfStar from "../../../../assets/images/star1.2.png";
import ButtonPlay from "../../../../assets/images/play-video.png";
import getVideoId from 'get-video-id';
import { Button } from "react-bootstrap";
import ModalVideo from 'react-modal-video'
import "./style.scss";
import { Link } from "react-router-dom";

export default class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isOpen: false,
    };
  }
  soSao = (chiSoDanhGia) => {
    let arrSoSao = [];
    for (let i = 1; i <= chiSoDanhGia / 2; i++) {
      arrSoSao.push(<img src={star} alt="" />);
    }
    if (chiSoDanhGia % 2 > 0) arrSoSao.push(<img src={halfStar} alt="" />);
    return arrSoSao;
  };
  handleClose = (e) => {
    // e.preventDefault();
    this.setState({
      showModal: false,
    });
  };
  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };
  showModal = (trailer) => {
    const { id } = getVideoId(trailer);
    return (
      <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={this.state.isOpen} videoId={id} onClose={() => this.setState({ isOpen: false })} />
        <Button variant="link" className="text-decoration-none text-white btnTempPlayListMovie" onClick={() => this.setState({ isOpen: true })}>
          <img src={ButtonPlay}></img>
        </Button>

      </React.Fragment>
    );
  };
  render() {
    const { movie } = this.props;
    return (
      <>
        <div className="col-3 movieComing_hover">
          <div className="movieComing__detail">
            {this.showModal(movie.trailer)}
          </div>
          <Link to={`/detail/${movie.maPhim}`} >
            <div className="movieComing_img">
              <img src={movie.hinhAnh} alt />
              <div className="movieComing_img_hover"></div>
            </div>
          </Link>
          <div className="movieComing_award">
            <span>
              <b>{movie.danhGia}</b>
              <p>{this.soSao(movie.danhGia)}</p>
            </span>
          </div>
          {/* <Carousel.Caption> */}
          <div className="movieComing_content my-2">
            <div className="movieComing_content_text">
              <p className="mb-2">
                <button className="btn btn-success py-0 px-3 mr-1 disable">
                  C13
                </button>
                <span className="font-weight-bold">{movie.tenPhim}</span>
              </p>
              <p className="movieComing_time"> 100 phút</p>
            </div>
            <div className="movieComing_content_text_hover">
              <button className="btn"><Link to={`/detail/${movie.maPhim}`}>MUA VÉ </Link></button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

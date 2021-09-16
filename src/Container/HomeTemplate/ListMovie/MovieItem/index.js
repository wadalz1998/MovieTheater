import React, { Component } from "react";

import star from "../../../../assets/images/star1.png";
import halfStar from "../../../../assets/images/star1.2.png";
import ButtonPlay from "../../../../assets/images/play-video.png";
import buttonClose from "../../../../assets/images/buttonClose.png";

import { Button, Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./style.scss";

export default class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
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
    return (
      <>
        <Button
          variant="link"
          className="text-decoration-none text-white"
          onClick={this.handleShow}
        >
          <img src={ButtonPlay}></img>
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header>
            <div>
              <Button variant="link" onClick={this.handleClose}>
                <img src={buttonClose} className="btn__close"></img>
              </Button>
            </div>
            <ReactPlayer url={trailer} playing />
          </Modal.Header>
        </Modal>
      </>
    );
  };
  render() {
    const { movie } = this.props;
    return (
      <div className="col-3 movieComing_hover">
        <div className="movieComing__detail">
          {this.showModal(movie.trailer)}
          {/* <a
            className="text-decoration-none text-white "
            // data-autoplay="true"
            // data-vbtype="video"
            href={movie.trailer}
          >
            <img src={ButtonPlay}></img>
          </a> */}
        </div>
        <div className="movieComing_img">
          <img src={movie.hinhAnh} alt />
          <div className="movieComing_img_hover"></div>
        </div>
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
                P
              </button>
              <span className="font-weight-bold">{movie.tenPhim}</span>
            </p>
            <p className="movieComing_time"> 100 phút</p>
          </div>
          <div className="movieComing_content_text_hover">
            <button className="btn">MUA VÉ</button>
          </div>
        </div>
      </div>
    );
  }
}

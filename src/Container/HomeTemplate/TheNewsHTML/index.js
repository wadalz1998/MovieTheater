import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import NewsHTML from "./NewsHTML/html.js"
import "./style.scss";
export default function TheNewsHTML() {
    return (
        <section className="news">
            <Tabs
                defaultActiveKey="home"
                id="noanim-tab-example"
                className="mb-3 container-md-fluid container-lg scrollToNews"
            >
                <Tab eventKey="home" title="Điện ảnh 24h">
                    <NewsHTML />
                </Tab>
                <Tab eventKey="profile" title="Review">
                    <NewsHTML />
                </Tab>
                <Tab eventKey="contact" title="Khuyến mãi">
                    <NewsHTML />
                </Tab>
            </Tabs>
            <div class="button_responsive text-center my-3">
                <button id="buttonMore" class="btn btn-outline-secondary">XEM THÊM</button>
            </div>
        </section>
    )
}

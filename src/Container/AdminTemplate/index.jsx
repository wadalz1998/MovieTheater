import React from 'react'
import { Redirect, Route } from 'react-router'
import BannerAdmin from './BannerAdmin'
import { Col, Row } from 'react-bootstrap';
import NavBarAdmin from "./NavBarAdmin"
function AdminLayout(props) {
    return (
        <div>
            {/* <BannerAdmin /> */}
            {props.children}
        </div>
    )
}
export default function AdminTemplate({ Component, ...props }) {
    const divStyle = {
        well: {
            boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
        },
    }
    return (
        <Route
            {...props}
            render={(propsComponent) => {
                // const userNameAmin = JSON.parse(localStorage.getItem('UserAdmin'))
                if (localStorage.getItem("UserAdmin")) {
                    return (
                        <AdminLayout>
                            {/* luu y height: '100vh' } */}
                            <div>
                                <Row style={{ width: '100%', height: '100%' }}>
                                    <Col lg={2} style={divStyle.well}>
                                        <NavBarAdmin />
                                    </Col>
                                    <Col lg={10}>
                                        <BannerAdmin />
                                        <Component {...propsComponent} />
                                    </Col>
                                </Row>
                            </div>
                        </AdminLayout >
                    )
                }
                return <Redirect to="/login" />;
            }}
        />
    )
}

import React, { Component } from 'react'
import {Layout, Row, Col} from 'antd';
const {Footer} = Layout;


class BPFooter extends Component {
    render() {
        return (        
            <Footer className="app-footer">
                <Row>
                    <Col>
                        This is your HelloBase project and it's using API Version 43.0
                    </Col>
                </Row>
                <Row>
                    <Col>
                        This is your org: [org placeholder] and it will expire on Wed Mar 11 2020
                    </Col>
                </Row>
            </Footer>
        )
    }
}

export default BPFooter;
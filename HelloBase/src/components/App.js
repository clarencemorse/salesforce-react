import React, { Component } from 'react'
import { Layout, Button, Steps, Icon, Row, Col, Divider } from 'antd';
const ButtonGroup = Button.Group;
const { Content } = Layout;
const { Step } = Steps;
import BPFooter from './BPFooter';
import BPHeader from './BPHeader';
import './App.css'
import BPTable from './BPTable';

class App extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <BPHeader />
          <Content className="content-body">
            <Row>
              <Col>
                <Steps>
                  <Step status="finish" title="Login" icon={<Icon type="user" />} />
                  <Step status="finish" title="Validation" icon={<Icon type="solution" />} />               
                  <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                </Steps>
              </Col>
            </Row>
            <Divider/> 
            <Row>
              <Col>
                <BPTable />
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col>
                <ButtonGroup> 
                  <Button type="primary">
                    <Icon type="left" />
                    Go back
                  </Button>
                  <Button type="primary">
                    Go forward
                    <Icon type="right" />
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Divider />
            <Row>
                <Col>It uses Webpack for resource bundling and ANT Design for styling.</Col>
            </Row>            
          </Content>

          <BPFooter />
        </Layout>
      </div>
    );
  }
}

export default App
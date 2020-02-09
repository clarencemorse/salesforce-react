import React, { Component } from 'react'
import {PageHeader, Button, Icon} from 'antd';


class BPHeader extends Component {
    render() {
      return (
        <PageHeader
            className="app-header"
            ghost={false}
            onBack={() => window.history.back()}
            title="Salesforce + React + ANT Design"
            subTitle="React + Salesforce Workflow"
            extra={[
                <Button key="2"><Icon type="question-circle" />Help</Button>,
                <Button key="1" type="primary">
                    Sign In
                </Button>,
            ]}>  
        </PageHeader>
        );
    }
}

export default BPHeader;
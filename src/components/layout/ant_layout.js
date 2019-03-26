import {Component} from "react";
import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import NavHeader from "./NavHeader";
import NavFooter from "./NavFooter";

const {Header, Footer, Content } = Layout;


export default class AntLayout extends Component {

    render() {
        return (
            <Layout className="layout" style={{ display: "flex", minHeight: "100vh",
                flexDirection: "column"}}>
                <Header style={{ padding: '0'}}>
                    <NavHeader/>
                </Header>
                <Content style={{ padding: "50px", background: "#ffff", flex: "1"}}>
                    {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center', bottom: "0px"}}>
                    <NavFooter/>
                </Footer>
            </Layout>


        );
    }
}

import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {Menu, Row,Col} from "antd"
import IndexList from "./list"
class Index extends Component{
    render(){
        console.log(this.props);
        return(
            <Row className="wrap">
                <Col md={6} xs={0}>
                    <Menu id="indexMenu">
                        <Menu.Item>
                            <Link to="/index/ask">前部</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/good">精华</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/ask">问题</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/share">分享</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/job">招聘</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/test">测试</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col md={0} xs={24}>
                    <Menu 
                        id="indexMenu"
                        mode="horizontal"    
                    >
                        <Menu.Item>
                            <Link to="/index/ask">前部</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/good">精华</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/ask">问题</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/share">分享</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/job">招聘</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/test">测试</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col
                md={18} 
                xs={24}
                className="indexList">
                      <IndexList />  
                </Col>
            </Row>
        )
    }
}
export default Index;
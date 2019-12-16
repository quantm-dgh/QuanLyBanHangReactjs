import React, {Component} from 'react';
import './App.css';
import Sibar from './components/Sibar/Sibar';
import routes from './routes';

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { Layout, Avatar, Typography } from 'antd';


const { Title } = Typography;
const { Header, Footer } = Layout;

class TrangQuanTri extends Component{
  render(){
    return (
      <Router>
          <Layout>
            <Header style ={{padding:15}}>
              <Avatar style={{float:'right'}} icon="user" />
              <Title style={{color:"white"}} level={3}>Quản lý bán hàng</Title>
            </Header>
            <Layout>
              <Sibar/>
              <Layout>
                  {this.showContentMenus(routes)}
                  <Footer style={{ textAlign: 'center' }}>Design ©2019 Created by ThaiMinhQuan</Footer>
              </Layout>
            </Layout>  
          </Layout>
      </Router>
    );
  }    

  showContentMenus = (routes) =>{
    var result = null; 
    if(routes.length > 0)
    {
      result = routes.map((route, index) => {
        return(
          <Route
            key = {index}
            path = {route.path}
            exact= {route.exact}
            component = {route.main}
          />
        );
  
      });
    }
    return <Switch>{result}</Switch>; 
  }
  
}



export default TrangQuanTri;

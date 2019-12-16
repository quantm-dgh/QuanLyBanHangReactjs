import React, {Component} from 'react';
import { Breadcrumb, Layout } from 'antd';
const { Content } = Layout;

class TrangQuanLyThongKe extends Component{
    render(){    
      return (   
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>TrangQuanLyThongKê</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
              <h1>TrangQuanLyThongkê</h1>
            </div>
        </Content>  
      );
    }
}
export default TrangQuanLyThongKe;
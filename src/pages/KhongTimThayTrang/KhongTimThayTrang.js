import React, {Component} from 'react';
import { Breadcrumb, Layout } from 'antd';
const { Content } = Layout;

class KhongTimThayTrang extends Component{
    render(){    
      return (   
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>không tìm thấy trang</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
              <h1>ERROR</h1>
            </div>
        </Content>  
      );
    }
}
export default KhongTimThayTrang;
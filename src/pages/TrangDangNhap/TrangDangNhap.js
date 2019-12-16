import React, {Component} from 'react';
import { Breadcrumb, Layout } from 'antd';
const { Content } = Layout;
class TrangDangNhap extends Component{
    render(){    
      return (   
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>TrangQuanLyHeThong</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <form>
                        <legend>Đăng nhập</legend>
                        <div class="form-group">
                            <label>Tên đăng nhập</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                name="txtUsername"
                            />
                        </div>
                        <div class="form-group">
                            <label>Mật khẩu</label>
                            <input 
                                type="password" 
                                class="form-control"
                                name="txtPassword"
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">Đăng nhập</button>
                    </form> 
                </div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
            </div>
        </Content>  
        
      );
    }
}
export default TrangDangNhap;

import { Menu,  Layout } from 'antd';
import {Route, Link} from 'react-router-dom';

import React, {Component} from 'react';
const { Sider} = Layout;
const { SubMenu } = Menu;

const menus = [
    {
        name : 'Quản lý bán hàng',
        to : '/quanlybanhang',
        exact: true
    }, 
    {
        name : 'Quản lý khách hàng',
        to: '/quanlykhachhang-ds',
        exact: false
    },
    {
        name : 'Quản lý nhập hàng',
        to: '/quanlynhaphang',
        exact: false
    },
    {
        name : 'Quản lý nhà cung cấp',
        to: '/quanlynhacungcap-ds',
        exact: false
    },
    {
        name : 'Quản lý thống kê',
        to: '/quanlythongke',
        exact: false      
    }
];
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route 
          path = {to}
          exact = {activeOnlyWhenExact}
          children = {() => {
            return ( 
                 <Link to = {to} >
                    {label}
                 </Link>
            );
          }}
        />
    );
}
class Sibar extends Component{
    render() {
        return (
            <Sider>
                <Menu 
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu
                        key="sub2"
                        title={
                        <span>
                            <span>Quản lý Sản phẩm</span>
                        </span>
                        }
                    >
                        <Menu.Item key={"sanpham1"}>
                            <MenuLink
                                key={"quanlysanpham"}
                                label={"Sản phẩm"}
                                to={"/quanlysanpham-ds"}
                                activeOnlyWhenExact={false}  
                            />
                        </Menu.Item>
                        <Menu.Item key={"sanpham2"}>
                            <MenuLink
                                key={"quanlyloaisanpham"}
                                label={"Loại sản phẩm"}
                                to={"/quanlyloaisanpham-ds"}
                                activeOnlyWhenExact={false}  
                            />
                        </Menu.Item>
                    </SubMenu>

                    {this.showMenus(menus)}

                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <span>Quản lý hệ thống</span>
                        </span>
                        }
                    >
                        <Menu.Item key={"hethong1"}>
                            <MenuLink
                                key={"quanlynhanvien"}
                                label={"Quản lý nhân viên"}
                                to={"/quanlynhanvien-ds"}
                                activeOnlyWhenExact={false}  
                            />
                        </Menu.Item>
                        <Menu.Item key={"hethong2"}>
                            <MenuLink
                                key={"quanlychucvu"}
                                label={"Quản lý chức vụ"}
                                to={"/quanlychucvu-ds"}
                                activeOnlyWhenExact={false}  
                            />
                        </Menu.Item>
                    </SubMenu>
                </Menu>    
            </Sider>
        );
    }

    showMenus = (menus) =>{
        var result = null; 
        if(menus.length > 0){
          result = menus.map((menu, index) => {
            return (
                <Menu.Item key={index+1}>
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}  
                    />
                </Menu.Item>
            );
          });      
        }
        return result;
    }
}
export default Sibar;



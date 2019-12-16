import React, {Component} from 'react';
import { Breadcrumb, Layout } from 'antd';
import {Link} from 'react-router-dom';
import QuanLyKhachHang from '../../components/QuanLyKhachHang/QuanLyKhachHang';
import MucKhachHang from '../../components/QuanLyKhachHang/MucKhachHang';
import TrangTimKiemKhachHang from '../TrangTimKiem/TrangTimKiemKhachHang/TrangTimKiemKhachHang';
import axios from 'axios';

const { Content } = Layout;

class TrangQuanLyKhachHang extends Component{
  constructor(props){
    super(props); 
    this.state={
      khachhangs:[],
    }
  }
  componentDidMount(){
    axios({
      method : "GET",
      url: 'https://localhost:3001/api/khachhangs',
      data : null
    }).then(res =>{
      this.setState({
        khachhangs : res.data
      });
    }).catch(err=>{
      console.log(err);
    });
    
  }
//delete khách hàng
  onDelete=(id) =>{
    var {khachhangs} = this.state;
    axios({
      method : "DELETE",
      url: 'https://localhost:3001/api/khachhangs/'+id,
      data : null
    }).then(res =>{

      if(res.status === 200)
      {
        var index= this.findIndex(khachhangs,id);
        if(index!== -1){
          khachhangs.splice(index,1);
          this.setState({
            sanphams:khachhangs 
          });
        }
      }
    }).catch(err=>{
      console.log(err);
    });
  }

  //tìm phầm tử trong mảng de xóa
  findIndex = (khachhangs,id) =>{
    var result = -1; 
    khachhangs.forEach((khachhang,index) =>{
      if(khachhang.maKhachHang===id){
        result=index;
      }
    });
    return result;
  } 
//tìm kiếm danh sách
  onSearch=(keyword) =>{
    this.setState({
        keyword:keyword
    });
  }


    render(){ 
      var {khachhangs,keyword} = this.state;  
      if(keyword){
        khachhangs=khachhangs.filter((khachhang)=>{//filter dùng hàm javascript
                return khachhang.tenKhachHang.toLowerCase().indexOf(keyword)!==-1;//chuyển chuổi task.name thành chữ thường và kiểm tra filter.name có nằm trong hay kh
        });
      }
      return (   
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Trang quản lý khách hàng</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
            <Link to="/quanlykhachhang/them" className ="btn btn-info" style={{marginBottom:'10px',float:'right'}}>
                    Thêm khách hàng
                </Link>
                <TrangTimKiemKhachHang 
                  onSearch={this.onSearch}
                />
                <QuanLyKhachHang>
                    {this.showMucKhachHangs(khachhangs)}
                </QuanLyKhachHang> 
            </div>
        </Content>  
      );
    }

    showMucKhachHangs = (khachhangs) => {
      var result = null;
      if (khachhangs.length > 0) {
          result = khachhangs.map((khachhang, index) => {
              return (
                  <MucKhachHang
                      key={index}
                      khachhang={khachhang}
                      index={index}
                      onDelete={this.onDelete}
                  />
              );
          });
      }
      return result;
    }
}
export default TrangQuanLyKhachHang;
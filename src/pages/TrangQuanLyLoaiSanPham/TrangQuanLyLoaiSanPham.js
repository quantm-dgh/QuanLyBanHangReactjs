import React, {Component} from 'react';

import { Breadcrumb,Layout} from 'antd';
import MucLoaiSanPham from '../../components/QuanLyLoaiSanPham/MucLoaiSanPham';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import TrangTimKiemLoaiSanPham from '../TrangTimKiem/TrangTimKiemLoaiSanPham/TrangTimKiemLoaiSanPham';
import QuanLyLoaiSanPham from '../../components/QuanLyLoaiSanPham/QuanLyLoaiSanPham';

const { Content } = Layout;
class TrangQuanLyLoaiSanPham extends Component{
  
  constructor(props){
    super(props); 
    this.state={
      loaisanphams:[],
    }
  }

//get dữ liệu
  componentDidMount(){
    axios({
      method : "GET",
      url: 'https://localhost:3001/api/loaisanphams',
      data : null
    }).then(res =>{
      this.setState({
        loaisanphams : res.data
      });
    }).catch(err=>{
      console.log(err);
    });

  }
//delete
  onDelete=(id) =>{
    var {loaisanphams} = this.state;
    axios({
      method : "DELETE",
      url: 'https://localhost:3001/api/loaisanphams/'+id,
      data : null
    }).then(res =>{
      
      if(res.status === 200)
      {
        var index= this.findIndex(loaisanphams,id);
        if(index!== -1){
          loaisanphams.splice(index,1);
          this.setState({
             loaisanphams:loaisanphams 
          });
        }
      }
    }).catch(err=>{
      console.log(err);
    });
  }
//tìm phầm tử trong mảng 
  findIndex = (loaisanphams,id) =>{
    var result = -1; 
    loaisanphams.forEach((loaisanpham,index) =>{
      if(loaisanpham.maLoaiSanPham===id){
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
    //var {sanphams}=this.props;
    var {loaisanphams,keyword}=this.state; 
    if(keyword){
      loaisanphams=loaisanphams.filter((loaisanpham)=>{//filter dùng hàm javascript
              return loaisanpham.tenLoaiSanPham.toLowerCase().indexOf(keyword)!==-1;//chuyển chuổi task.name thành chữ thường và kiểm tra filter.name có nằm trong hay kh
      });
      
    }

    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Quản lý loại sản phẩm</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
                <Link to="/quanlyloaisanpham/them" className ="btn btn-info" style={{marginBottom:'10px',float:'right'}}>
                    Thêm loại sản phẩm
                </Link>
                <TrangTimKiemLoaiSanPham 
                  onSearch={this.onSearch}
                />
                <QuanLyLoaiSanPham>
                    {this.showMucSanPhams(loaisanphams)}
                </QuanLyLoaiSanPham>   
            </div>
        </Content>
    );
  }
  showMucSanPhams = (loaisanphams) => {
    var result = null;
    if (loaisanphams.length > 0) {
        result = loaisanphams.map((loaisanpham, index) => {
            return (
                <MucLoaiSanPham
                    key={index}
                    loaisanpham={loaisanpham}
                    index={index}
                    onDelete={this.onDelete}
                />
            );
        });
    }
    return result;
  }
}

export default TrangQuanLyLoaiSanPham;

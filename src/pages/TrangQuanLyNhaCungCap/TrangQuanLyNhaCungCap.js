import React, {Component} from 'react';

import { Breadcrumb,Layout} from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';
import QuanLyNhaCungCap from '../../components/QuanLyNhaCungCap/QuanLyNhaCungCap';
import MucNhaCungCap from '../../components/QuanLyNhaCungCap/MucNhaCungCap';
import TrangTimKiemNhaCungCap from '../TrangTimKiem/TrangTimKiemNhaCungCap/TrangTimKiemNhaCungCap';

const { Content } = Layout;
class TrangQuanLyNhaCungCap extends Component{
  
  constructor(props){
    super(props); 
    this.state={
      nhacungcaps:[],
    }
  }

//get dữ liệu
  componentDidMount(){
    axios({
      method : "GET",
      url: 'https://localhost:3001/api/nhacungcaps',
      data : null
    }).then(res =>{
      this.setState({
        nhacungcaps : res.data
      });
    }).catch(err=>{
      console.log(err);
    });

  }
//delete
  onDelete=(id) =>{
    var {nhacungcaps} = this.state;
    axios({
      method : "DELETE",
      url: 'https://localhost:3001/api/nhacungcaps/'+id,
      data : null
    }).then(res =>{
      
      if(res.status === 200)
      {
        var index= this.findIndex(nhacungcaps,id);
        if(index!== -1){
          nhacungcaps.splice(index,1);
          this.setState({
             nhacungcaps:nhacungcaps 
          });
        }
      }
    }).catch(err=>{
      console.log(err);
    });
  }
//tìm phầm tử trong mảng 
  findIndex = (nhacungcaps,id) =>{
    var result = -1; 
    nhacungcaps.forEach((nhacungcap,index) =>{
      if(nhacungcap.maNhaCungCap===id){
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
    var {nhacungcaps,keyword}=this.state; 
    if(keyword){
      nhacungcaps=nhacungcaps.filter((nhacungcap)=>{//filter dùng hàm javascript
              return nhacungcap.tenNhaCungCap.toLowerCase().indexOf(keyword)!==-1;//chuyển chuổi task.name thành chữ thường và kiểm tra filter.name có nằm trong hay kh
      });
      
    }

    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Quản lý nhà cung cấp</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
                <Link to="/quanlynhacungcap/them" className ="btn btn-info" style={{marginBottom:'10px',float:'right'}}>
                    Thêm nhà cung cấp
                </Link>
                <TrangTimKiemNhaCungCap
                  onSearch={this.onSearch}
                />
                <QuanLyNhaCungCap>
                    {this.showMucNhaCungCaps(nhacungcaps)}
                </QuanLyNhaCungCap>   
            </div>
        </Content>
    );
  }
  showMucNhaCungCaps = (nhacungcaps) => {
    var result = null;
    if (nhacungcaps.length > 0) {
        result = nhacungcaps.map((nhacungcap, index) => {
            return (
                <MucNhaCungCap
                    key={index}
                    nhacungcap={nhacungcap}
                    index={index}
                    onDelete={this.onDelete}
                />
            );
        });
    }
    return result;
  }
}

export default TrangQuanLyNhaCungCap;

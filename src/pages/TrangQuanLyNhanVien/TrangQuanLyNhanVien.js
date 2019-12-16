import React, {Component} from 'react';
import QuanLyNhanVien from '../../components/QuanLyNhanVien/QuanLyNhanVien';
import { Breadcrumb,Layout} from 'antd';
import MucNhanVien from '../../components/QuanLyNhanVien/MucNhanVien';
import axios from 'axios';
import {Link} from 'react-router-dom';
import TrangTimKiemNhanVien from '../TrangTimKiem/TrangTimKiemNhanVien/TrangTimKiemNhanVien';

const { Content } = Layout;
class TrangQuanLyNhanVien extends Component{
  
  constructor(props){
    super(props); 
    this.state={
      nhanviens:[],
    }
  }

//get dữ liệu
  componentDidMount(){
    axios({
      method : "GET",
      url: 'https://localhost:3001/api/nhanviens',
      data : null
    }).then(res =>{
      this.setState({
        nhanviens : res.data
      });
    }).catch(err=>{
      console.log(err);
    });

  }
//delete
  onDelete=(id) =>{
    var {nhanviens} = this.state;
    axios({
      method : "DELETE",
      url: 'https://localhost:3001/api/nhanviens/'+id,
      data : null
    }).then(res =>{
      
      if(res.status === 200)
      {
        var index= this.findIndex(nhanviens,id);
        if(index!== -1){
          nhanviens.splice(index,1);
          this.setState({
             nhanviens:nhanviens 
          });
        }
      }
    }).catch(err=>{
      console.log(err);
    });
  }
//tìm phầm tử trong mảng 
  findIndex = (nhanviens,id) =>{
    var result = -1; 
    nhanviens.forEach((nhanvien,index) =>{
      if(nhanvien.maNhanVien===id){
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
    var {nhanviens,keyword}=this.state; 
    if(keyword){
      nhanviens=nhanviens.filter((nhanvien)=>{//filter dùng hàm javascript
              return nhanvien.tenNhanVien.toLowerCase().indexOf(keyword)!==-1;//chuyển chuổi task.name thành chữ thường và kiểm tra filter.name có nằm trong hay kh
      });
      
    }

    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Quản lý nhân viên</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
                <Link to="/quanlynhanvien/them" className ="btn btn-info" style={{marginBottom:'10px',float:'right'}}>
                    Thêm nhân viên
                </Link>
                <TrangTimKiemNhanVien
                  onSearch={this.onSearch}
                />
                <QuanLyNhanVien>
                    {this.showMucNhanViens(nhanviens)}
                </QuanLyNhanVien>   
            </div>
        </Content>
    );
  }
  showMucNhanViens = (nhanviens) => {
    var result = null;
    if (nhanviens.length > 0) {
        result = nhanviens.map((nhanvien, index) => {
            return (
                <MucNhanVien
                    key={index}
                    nhanvien={nhanvien}
                    index={index}
                    onDelete={this.onDelete}
                />
            );
        });
    }
    return result;
  }
}

export default TrangQuanLyNhanVien;

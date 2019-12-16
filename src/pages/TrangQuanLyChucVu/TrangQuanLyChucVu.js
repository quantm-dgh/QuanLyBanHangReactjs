import React, {Component} from 'react';
import { Breadcrumb,Layout} from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';
import TrangTimKiemChucVu from './../TrangTimKiem/TrangTimKiemChucVu/TrangTimKiemChucVu';
import QuanLyChucVu from './../../components/QuanLyChucVu/QuanLyChucVu';
import MucChucVu from './../../components/QuanLyChucVu/MucChucVu';
const { Content } = Layout;
class TrangQuanLyChucVu extends Component{
  
  constructor(props){
    super(props); 
    this.state={
      chucvus:[],
    }
  }

//get dữ liệu
  componentDidMount(){
    axios({
      method : "GET",
      url: 'https://localhost:3001/api/chucvus',
      data : null
    }).then(res =>{
      this.setState({
        chucvus : res.data
      });
    }).catch(err=>{
      console.log(err);
    });

  }
//delete
  onDelete=(id) =>{
    var {chucvus} = this.state;
    axios({
      method : "DELETE",
      url: 'https://localhost:3001/api/chucvus/'+id,
      data : null
    }).then(res =>{
      
      if(res.status === 200)
      {
        var index= this.findIndex(chucvus,id);
        if(index!== -1){
          chucvus.splice(index,1);
          this.setState({
             chucvus:chucvus 
          });
        }
      }
    }).catch(err=>{
      console.log(err);
    });
  }
//tìm phầm tử trong mảng 
  findIndex = (chucvus,id) =>{
    var result = -1; 
    chucvus.forEach((chucvu,index) =>{
      if(chucvu.maChucVu===id){
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
    var {chucvus,keyword}=this.state; 
    if(keyword){
      chucvus=chucvus.filter((chucvu)=>{//filter dùng hàm javascript
              return chucvu.tenChucVu.toLowerCase().indexOf(keyword)!==-1;//chuyển chuổi task.name thành chữ thường và kiểm tra filter.name có nằm trong hay kh
      });
      
    }

    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Quản lý chức vụ</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
                <Link to="/quanlychucvu/them" className ="btn btn-info" style={{marginBottom:'10px',float:'right'}}>
                    Thêm chức vụ
                </Link>
                <TrangTimKiemChucVu 
                  onSearch={this.onSearch}
                />
                <QuanLyChucVu>
                    {this.showMucChucVus(chucvus)}
                </QuanLyChucVu>   
            </div>
        </Content>
    );
  }
  showMucChucVus = (chucvus) => {
    var result = null;
    if (chucvus.length > 0) {
        result = chucvus.map((chucvu, index) => {
            return (
                <MucChucVu
                    key={index}
                    chucvu={chucvu}
                    index={index}
                    onDelete={this.onDelete}
                />
            );
        });
    }
    return result;
  }
}
export default TrangQuanLyChucVu;

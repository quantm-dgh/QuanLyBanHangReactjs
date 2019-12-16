import React, {Component} from 'react';
import QuanLySanPham from '../../components/QuanLySanPham/QuanLySanPham';
import { Breadcrumb,Layout} from 'antd';
import MucSanPham from '../../components/QuanLySanPham/MucSanPham';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import TrangTimKiemSanPham from '../TrangTimKiem/TrangTimKiemSanPham/TrangTimKiemSanPham';

const { Content } = Layout;
class TrangQuanLySanPham extends Component{
  
  constructor(props){
    super(props); 
    this.state={
      sanphams:[],
    }
  }

//get dữ liệu
  componentDidMount(){
    axios({
      method : "GET",
      url: 'https://localhost:3001/api/sanphams',
      data : null
    }).then(res =>{
      this.setState({
        sanphams : res.data
      });
    }).catch(err=>{
      console.log(err);
    });

  }
//delete
  onDelete=(id) =>{
    var {sanphams} = this.state;
    axios({
      method : "DELETE",
      url: 'https://localhost:3001/api/sanphams/'+id,
      data : null
    }).then(res =>{
      
      if(res.status === 200)
      {
        var index= this.findIndex(sanphams,id);
        if(index!== -1){
          sanphams.splice(index,1);
          this.setState({
             sanphams:sanphams 
          });
        }
      }
    }).catch(err=>{
      console.log(err);
    });
  }
//tìm phầm tử trong mảng 
  findIndex = (sanphams,id) =>{
    var result = -1; 
    sanphams.forEach((sanpham,index) =>{
      if(sanpham.maSanPham===id){
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
    var {sanphams,keyword}=this.state; 
    if(keyword){
      sanphams=sanphams.filter((sanpham)=>{//filter dùng hàm javascript
              return sanpham.tenSanPham.toLowerCase().indexOf(keyword)!==-1;//chuyển chuổi task.name thành chữ thường và kiểm tra filter.name có nằm trong hay kh
      });
      
    }

    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Quản lý sản phẩm</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
                <Link to="/quanlysanpham/them" className ="btn btn-info" style={{marginBottom:'10px',float:'right'}}>
                    Thêm sản phẩm
                </Link>
                <TrangTimKiemSanPham 
                  onSearch={this.onSearch}
                />
                <QuanLySanPham>
                    {this.showMucSanPhams(sanphams)}
                </QuanLySanPham>   
            </div>
        </Content>
    );
  }
  showMucSanPhams = (sanphams) => {
    var result = null;
    if (sanphams.length > 0) {
        result = sanphams.map((sanpham, index) => {
            return (
                <MucSanPham
                    key={index}
                    sanpham={sanpham}
                    index={index}
                    onDelete={this.onDelete}
                />
            );
        });
    }
    return result;
  }
}
const mapStateToProps = state =>{
  return {
      sanphams : state.sanphams
  }
}
export default connect(mapStateToProps,null) (TrangQuanLySanPham);

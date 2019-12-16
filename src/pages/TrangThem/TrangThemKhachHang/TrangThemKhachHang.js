import React, {Component} from 'react';
import { Breadcrumb, Layout } from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';
const { Content } = Layout;

class TrangThemKhachHang extends Component{
    constructor(props){
        super(props);
        this.state={
            id: '',
            txtTenKhachHang:'',
            nbSoDienThoai:'',
            txtDiaChi:'',  
            sltCapDoKh:''
        }   
        this.onChange=this.onChange.bind(this);
        this.onSave=this.onSave.bind(this);
    }

    componentDidMount(){
        var {match} = this.props; 
        var id;
        if(match){
            id = match.params.id;
            axios({
                method : "GET",
                url: 'https://localhost:3001/api/khachhangs/'+id ,
                data : null
              }).then(res =>{
                var data = res.data;
                this.setState({
                  id:data.maKhachHang,
                  txtTenKhachHang:data.tenKhachHang,
                  txtDiaChi:data.diaChi,
                  nbSoDienThoai:data.soDienThoai,
                  sltCapDoKh:data.maCapDo,  
                }); 

              }).catch(err=>{
                console.log(err);
              });
           }
    }

    onChange = (e) =>{
        var target = e.target; 
        var name = target.name; 
        var value = target.value;
        this.setState({
            [name] : value
        });
    }
    onSave = (e) =>{
        e.preventDefault();
        console.log(this.state);
        
        
        var {id, txtTenKhachHang,nbSoDienThoai,txtDiaChi,sltCapDoKh} = this.state;  
        var {history} = this.props;
        if(id){//update
            axios({
                method : "PUT",
                url: 'https://localhost:3001/api/khachhangs/'+id,
                data : {
                    maKhachHang:Number(id),
                    tenKhachHang:txtTenKhachHang,
                    diaChi:txtDiaChi,
                    soDienThoai:nbSoDienThoai,
                    maCapDo:Number(sltCapDoKh)   
                }
              }).then(res =>{
                
                  history.goBack();
                
              }).catch(err=>{
                console.log(err);
              });
        }else{//thêm mới
            axios({
                method : "POST",
                url: 'https://localhost:3001/api/khachhangs',
                data : {
                    tenKhachHang:txtTenKhachHang,
                    diaChi:txtDiaChi,
                    soDienThoai:nbSoDienThoai,
                    maCapDo:Number(sltCapDoKh)   
                }
              }).then(res =>{
                  
                  history.goBack();
                
              }).catch(err=>{
                console.log(err);
              });
        }
    }

    render(){  
      var {id, txtTenKhachHang, txtDiaChi,nbSoDienThoai} = this.state;  
      var tieude;
      if(id){tieude='Trang sửa khách hàng'}else{tieude='Trang thêm khách hàng'}
      return (   
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{tieude}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>    
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
                      <form onSubmit= {this.onSave}>
                        <div className="form-group">
                            <label>Tên khách hàng: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name= "txtTenKhachHang"
                                value={txtTenKhachHang}
                                onChange={this.onChange}
                            /> 
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name= "txtDiaChi"
                                value={txtDiaChi}
                                onChange={this.onChange}
                            /> 
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ: </label>
                            <input 
                                type="number" 
                                className="form-control" 
                                name= "nbSoDienThoai"
                                value={nbSoDienThoai}
                                onChange={this.onChange}
                            /> 
                        </div>

                        <div className="form-group">
                            <label> Cấp độ: </label>
                            <select 
                                className="form-control"
                                name="sltCapDoKh"
                                value={this.state.sltCapDoKh}
                                onChange={this.onChange}
                                
                            >
                                <option value={1}>cấp độ A</option>
                                <option value={2}>Cấp độ B</option>
                                <option value={3}>Cấp độ C</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{marginRight:'20px'}} >
                            Lưu lại
                        </button>
                        <Link to="/quanlykhachhang-ds" className="btn btn-danger"> 
                            Trở lại
                        </Link>
                    </form>  
                    </div> 
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>
            </div>
        </Content>  
      );
    }
}
export default TrangThemKhachHang;
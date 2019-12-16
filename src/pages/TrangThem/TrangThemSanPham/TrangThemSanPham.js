import React, {Component} from 'react';
import { Breadcrumb, Layout } from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';
const { Content } = Layout;

class TrangThemSanPham extends Component{
    constructor(props){
        super(props);
        this.state={
            loaisanphams:[],
            id: '',
            txtTenSanPham:'',
            nbGiaSanPham:'',
            sltLoaiSanPham:1,
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
                url: 'https://localhost:3001/api/sanphams/'+id ,
                data : null
              }).then(res =>{
                var data = res.data;
                this.setState({
                  id:data.maSanPham,
                  txtTenSanPham:data.tenSanPham,
                  nbGiaSanPham:data.giaSanPham,
                  sltLoaiSanPham:data.maLoaiSanPham,  
                }); 
              }).catch(err=>{
                console.log(err);
            });
        }
//lấy danh sách loại sản phẩm.
        axios({
                method : "GET",
                url: 'https://localhost:3001/api/loaisanphams/' ,
                data : null
            }).then(res =>{
                console.log(res.data);
                this.setState({
                    loaisanphams : res.data
                });
            }).catch(err=>{
                console.log(err);
        });


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
        
        var {id, txtTenSanPham, nbGiaSanPham,sltLoaiSanPham} = this.state;  
        var {history} = this.props;
        if(id){//update
            axios({
                method : "PUT",
                url: 'https://localhost:3001/api/sanphams/'+id,
                data : {
                    maSanPham:Number(id),
                    tenSanPham:txtTenSanPham,
                    giaSanPham:Number(nbGiaSanPham),
                    maLoaiSanPham:Number(sltLoaiSanPham)
                }
              }).then(res =>{
                  history.goBack();
              }).catch(err=>{
                console.log(err);
              });
        }else{//thêm mới
            axios({
                method : "POST",
                url: 'https://localhost:3001/api/sanphams',
                data : {
                    tenSanPham:txtTenSanPham,
                    giaSanPham:Number(nbGiaSanPham),
                    maLoaiSanPham:Number(sltLoaiSanPham)
                }
              }).then(res =>{
                  history.goBack();
                
              }).catch(err=>{
                console.log(err);
              });
        }
    }

    render(){  
      var {id, txtTenSanPham, nbGiaSanPham,loaisanphams} = this.state;  
        var tieude;
      if(id){tieude='Trang sửa sản phẩm'}else{tieude='Trang thêm sản phẩm'}
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
                            <label>Tên sản phẩm: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name= "txtTenSanPham"
                                value={txtTenSanPham}
                                onChange={this.onChange}
                            /> 
                        </div>
                        <div className="form-group">
                            <label>Giá sản phẩm: </label>
                            <input 
                                type="number" 
                                className="form-control" 
                                name= "nbGiaSanPham"
                                value={nbGiaSanPham}
                                onChange={this.onChange}
                            /> 
                        </div>
                        <div className="form-group">
                            <label>Loại sản phẩm: </label>
                            <select 
                                className="form-control"
                                name="sltLoaiSanPham"
                                value={this.state.sltLoaiSanPham}
                                onChange={this.onChange}
                                
                            >
                                {this.showOption(loaisanphams)}
                                
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{marginRight:'20px'}} >
                            Lưu lại
                        </button>
                        <Link to="/quanlysanpham-ds" className="btn btn-danger"> 
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

    showOption = (loaisanphams)=>{  
    var result = null;
    if (loaisanphams.length > 0) {
        result = loaisanphams.map((loaisanpham, index) => {
            return (
                <option 
                    value={loaisanpham.maLoaiSanPham}
                    key={index}
                >
                    {loaisanpham.tenLoaiSanPham}
                </option>
            );
         });
        }
        return result;
    }

}
export default TrangThemSanPham;
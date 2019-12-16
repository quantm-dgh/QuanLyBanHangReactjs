import React, {Component} from 'react';
import { Breadcrumb, Layout } from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';
const { Content } = Layout;

class TrangThemNhanVien extends Component{
    constructor(props){
        super(props);
        this.state={
            chucvus:[],
            id: '',
            txtTenNhanVien:'',
            txtDiaChi:'',
            txtNgaySinh:'',
            nbCMND:'',
            nbSoDienThoai:'',
            nbPassWork:'',
            sltMaChucVu:1,
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
                url: 'https://localhost:3001/api/nhanviens/'+id ,
                data : null
              }).then(res =>{
                var data = res.data;
                this.setState({
                  id:data.maNhanVien,
                  txtTenNhanVien:data.tenNhanVien,
                  txtDiaChi:data.diaChi,
                  txtNgaySinh:data.ngaySinh,
                  nbCMND:data.cmnd,
                  nbSoDienThoai:data.soDienThoai,
                  nbPassWork:data.passWork,
                  sltMaChucVu:data.maChucVu,  
                }); 
              }).catch(err=>{
                console.log(err);
            });
        }
//lấy danh sách loại sản phẩm.
        axios({
                method : "GET",
                url: 'https://localhost:3001/api/chucvus' ,
                data : null
            }).then(res =>{
                this.setState({
                    chucvus : res.data
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
        console.log(this.state);
        var {id,txtTenNhanVien,txtDiaChi,txtNgaySinh,nbCMND,nbSoDienThoai,nbPassWork,sltMaChucVu } = this.state;  
        var {history} = this.props;
        if(id){//update
            axios({
                method : "PUT",
                url: 'https://localhost:3001/api/nhanviens/'+id,
                data : {
                    maNhanVien:Number(id),
                    tenNhanVien:txtTenNhanVien,
                    diaChi:txtDiaChi,
                    ngaySinh:txtNgaySinh,
                    cmnd:nbCMND,
                    soDienThoai:nbSoDienThoai,
                    passWork:nbPassWork,
                    maChucVu:Number(sltMaChucVu),
                }
              }).then(res =>{
                  history.goBack();
              }).catch(err=>{
                console.log(err);
              });
        }else{//thêm mới
            
            axios({
                method : "POST",
                url: 'https://localhost:3001/api/nhanviens',
                data : {
                    tenNhanVien:txtTenNhanVien,
                    diaChi:txtDiaChi,
                    ngaySinh:txtNgaySinh,
                    cmnd:nbCMND,
                    soDienThoai:nbSoDienThoai,
                    passWork:nbPassWork,
                    maChucVu:Number(sltMaChucVu),
                }
              }).then(res =>{
                  history.goBack();
              }).catch(err=>{
                console.log(err);
              });
        }
    }

    render(){  
      var {chucvus,id,txtTenNhanVien,txtDiaChi,txtNgaySinh,nbCMND,nbSoDienThoai,nbPassWork,sltMaChucVu} = this.state;  
        var tieude;
      if(id){tieude='Trang sửa nhân viên'}else{tieude='Trang thêm nhân viên'}
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
                            <label>Tên nhân viên: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name= "txtTenNhanVien"
                                value={txtTenNhanVien}
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
                            <label>Ngày sinh: </label>
                            <input 
                                type="Date" 
                                className="form-control" 
                                name= "txtNgaySinh"
                                value={txtNgaySinh}
                                onChange={this.onChange}
                            /> 
                        </div>
                        <div className="form-group">
                            <label>CMND: </label>
                            <input 
                                type="number" 
                                className="form-control" 
                                name= "nbCMND"
                                value={nbCMND}
                                onChange={this.onChange}
                            /> 
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại: </label>
                            <input 
                                type="number" 
                                className="form-control" 
                                name= "nbSoDienThoai"
                                value={nbSoDienThoai}
                                onChange={this.onChange}
                            /> 
                        </div>
                        <div className="form-group">
                            <label>mật khẩu: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name= "nbPassWork"
                                value={nbPassWork}
                                onChange={this.onChange}
                            /> 
                        </div>
                        <div className="form-group">
                            <label>Loại chức vụ: </label>
                            <select 
                                className="form-control"
                                name="sltMaChucVu"
                                value={sltMaChucVu}
                                onChange={this.onChange}
                                
                            >
                                {this.showOption(chucvus)}
                                
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

    showOption = (chucvus)=>{  
    var result = null;
    if (chucvus.length > 0) {
        result = chucvus.map((chucvu, index) => {
            return (
                <option 
                    value={chucvu.maChucVu}
                    key={index}
                >
                    {chucvu.tenChucVu}
                </option>
            );
         });
        }
        return result;
    }
}
export default TrangThemNhanVien;
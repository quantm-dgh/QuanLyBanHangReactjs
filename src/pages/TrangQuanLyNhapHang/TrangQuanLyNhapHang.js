import React, {Component} from 'react';
import { Breadcrumb, Layout } from 'antd';
import axios from 'axios';
import MucPhieuNhap from '../../components/QuanLyNhapHang/MucPhieuNhap';
import QuanLyChiTietPhieuNhap from '../../components/QuanLyNhapHang/QuanLyChiTietPhieuNhap';
import MucChiTietPhieuNhap from '../../components/QuanLyNhapHang/MucChiTietPhieuNhap';
import QuanLyPhieuNhap from '../../components/QuanLyNhapHang/QuanLyPhieuNhap';
const { Content } = Layout;

class TrangQuanLyNhapHang extends Component{

  constructor(props){
    super(props); 
    this.state={
      hoadonnhaps:[],
      chitiethoadonnhaps:[],
      sanphams:[],
      nhacungcaps:[],
      nhanviens:[],
      nbMaPhieuNhap:'',
      sltMaNhanVien:1,
      sltMaNhaCungCap:1,
      dtNgayNhap:'',
      sltMaSanPham:1,
      nbDonGia:0,
      nbSoLuong:0,

    }
  }
  componentDidMount(){
    axios({
      method : "GET",
      url: 'https://localhost:3001/api/hoadonnhaps',
      data : null
    }).then(res =>{
      this.setState({
        hoadonnhaps : res.data
      });
    }).catch(err=>{
      console.log(err);
    });

    axios({
      method : "GET",
      url: 'https://localhost:3001/api/chitiethoadonnhaps',
      data : null
    }).then(res =>{
      
      this.setState({
        chitiethoadonnhaps : res.data
      });
    }).catch(err=>{
      console.log(err);
    });
    
    axios({
        method : "GET",
        url: 'https://localhost:3001/api/sanphams' ,
        data : null
    }).then(res =>{
        
        this.setState({
            sanphams : res.data
        });
    }).catch(err=>{
        console.log(err);
    });

    axios({
        method : "GET",
        url: 'https://localhost:3001/api/nhacungcaps' ,
        data : null
    }).then(res =>{
        
        this.setState({
            nhacungcaps : res.data
        });
    }).catch(err=>{
        console.log(err);
    });

    axios({
        method : "GET",
        url: 'https://localhost:3001/api/nhanviens' ,
        data : null
    }).then(res =>{
        
        this.setState({
            nhanviens : res.data
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

onSavePhieuNhap = (e) =>{
    e.preventDefault();
    var {nbMaPhieuNhap, sltMaNhanVien,sltMaNhaCungCap,dtNgayNhap} = this.state; 
    
    axios({
        method : "POST",
        url: 'https://localhost:3001/api/hoadonnhaps',
        data : {
            maPhieuNhap:nbMaPhieuNhap,
            maNhanVien:Number(sltMaNhanVien),
            maNhaCungCap:Number(sltMaNhaCungCap),
            ngayNhap:dtNgayNhap
        }
      }).then(res =>{

        axios({
            method : "GET",
            url: 'https://localhost:3001/api/hoadonnhaps',
            data : null
          }).then(res =>{
            this.setState({
              hoadonnhaps : res.data
            });
          }).catch(err=>{
            console.log(err);
          });

      }).catch(err=>{
        console.log(err);
      });
}

onSaveChiTietPhieuNhap = (e) =>{
    e.preventDefault();
    var {nbMaPhieuNhap,sltMaSanPham,nbDonGia,nbSoLuong} = this.state; 
    
    axios({
        method : "POST",
        url: 'https://localhost:3001/api/chitiethoadonnhaps',
        data : {
            maPhieuNhap:nbMaPhieuNhap,
            maSanPham:Number(sltMaSanPham),
            donGia:Number(nbDonGia),
            soLuong:Number(nbSoLuong)
        }
      }).then(res =>{
        axios({
            method : "GET",
            url: 'https://localhost:3001/api/chitiethoadonnhaps',
            data : null
          }).then(res =>{
            
            this.setState({
              chitiethoadonnhaps : res.data
            });
          }).catch(err=>{
            console.log(err);
        });
       
      }).catch(err=>{
        console.log(err);
      });
}

  render(){  
      var {hoadonnhaps, chitiethoadonnhaps} = this.state;   
      var {sanphams,nhacungcaps,nhanviens,nbMaPhieuNhap,sltMaNhanVien,sltMaNhaCungCap,dtNgayNhap,sltMaSanPham,nbDonGia,nbSoLuong} = this.state;
      return (   
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Trang Quản lý bán hàng</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
                
                    <div className="row">    
                        <form>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label>Mã phiếu nhập: </label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name= "nbMaPhieuNhap"
                                        value={nbMaPhieuNhap}
                                        onChange={this.onChange}
                                    /> 
                                </div>
                                <div className="form-group">
                                    <label>Nhân viên: </label>
                                    <select 
                                        className="form-control"
                                        name="sltMaNhanVien"
                                        value={sltMaNhanVien}
                                        onChange={this.onChange}
                                    >
                                    {this.showOptionNhanVien(nhanviens)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Nhà cung cấp: </label>
                                    <select 
                                        className="form-control"
                                        name="sltMaNhaCungCap"
                                        value={sltMaNhaCungCap}
                                        onChange={this.onChange}
                                    >
                                    {this.showOptionNhaCungCap(nhacungcaps)}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>ngày nhập: </label>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        name="dtNgayNhap"
                                        value={dtNgayNhap}
                                        onChange={this.onChange}
                                    /> 
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    style={{marginRight:'20px'}} 
                                    onClick={this.onSavePhieuNhap}
                                >
                                    Lưu phiếu nhập
                                </button>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label>san pham: </label>
                                    <select 
                                        className="form-control"
                                        name="sltMaSanPham"
                                        value={sltMaSanPham}
                                        onChange={this.onChange}
                                    >
                                    {this.showOptionSanPham(sanphams)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>đơn giá: </label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name= "nbDonGia"
                                        value={nbDonGia}
                                        onChange={this.onChange}
                                    /> 
                                </div>
                                <div className="form-group">
                                    <label>Số lượng: </label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name= "nbSoLuong"
                                        value={nbSoLuong}
                                        onChange={this.onChange}
                                    /> 
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    style={{marginRight:'20px'}} 
                                    onClick={this.onSaveChiTietPhieuNhap}
                                >
                                    Them chi tiet
                                </button>
                            </div>  
                        </form>         
                </div>
                
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <b>Thông tin hóa đơn</b>
                    <QuanLyPhieuNhap>
                      {this.showMucPhieuNhaps(hoadonnhaps)}
                    </QuanLyPhieuNhap>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <b>Thông tin chi tiết hóa đơn</b>
                    <QuanLyChiTietPhieuNhap>
                      {this.showMucChiTietPhieuNhaps(chitiethoadonnhaps)}
                    </QuanLyChiTietPhieuNhap>
                  </div>
                </div>  
            </div>
        </Content>  
      );
    }

    showMucPhieuNhaps = (hoadonnhaps) => {
      var result = null;
      if (hoadonnhaps.length > 0) {
          result = hoadonnhaps.map((hoadonnhap, index) => {
              return (
                  <MucPhieuNhap
                      key={index}
                      hoadonnhap={hoadonnhap}
                      index={index}
                  />
              );
          });
      }
      return result;
    }
    showMucChiTietPhieuNhaps = (chitiethoadonnhaps) => {
      var result = null;
      if (chitiethoadonnhaps.length > 0) {
          result = chitiethoadonnhaps.map((chitiethoadonnhap, index) => {
              return (
                  <MucChiTietPhieuNhap
                      key={index}
                      chitiethoadonnhap={chitiethoadonnhap}
                      index={index}
                  />
              );
          });
      }
      return result;
    }

    showOptionSanPham = (sanphams)=>{  
        var result = null;
        if (sanphams.length > 0) {
            result = sanphams.map((sanpham, index) => {
                return (
                    <option 
                        value={sanpham.maSanPham}
                        key={index}
                    >
                        {sanpham.tenSanPham}
                    </option>
                );
             });
            }
            return result;
    }
    showOptionNhanVien=(nhanviens)=>{
        var result = null;
        if (nhanviens.length > 0) {
            result = nhanviens.map((nhanvien, index) => {
                return (
                    <option 
                        value={nhanvien.maNhanVien}
                        key={index}
                    >
                        {nhanvien.tenNhanVien}
                    </option>
                );
             });
            }
            return result;
    }

    showOptionNhaCungCap=(nhacungcaps)=>{
        var result = null;
        if (nhacungcaps.length > 0) {
            result = nhacungcaps.map((nhacungcap, index) => {
                return (
                    <option 
                        value={nhacungcap.maNhaCungCap}
                        key={index}
                    >
                        {nhacungcap.tenNhaCungCap}
                    </option>
                );
             });
            }
            return result;
    }
}
export default TrangQuanLyNhapHang;
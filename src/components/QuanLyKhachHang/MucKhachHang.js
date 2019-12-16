import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class MucKhachHang extends Component {

    onDelete=(id) =>{
        this.props.onDelete(id);
    }

    render() {
        var { khachhang, index } = this.props;
        return (
            <tr>
                <td>{index+1}</td>        
                <td>{khachhang.maKhachHang}</td>
                <td>{khachhang.tenKhachHang}</td>
                <td>{khachhang.diaChi}</td>
                <td>{khachhang.soDienThoai}</td>
                <td>
                <span>
                    <Link 
                        to={`/quanlykhachhang/${khachhang.maKhachHang}/sua`} 
                        className ="btn btn-success"
                    >
                        Sửa
                    </Link>
                        
                    <button 
                        type ="button" 
                        className ="btn btn-danger" 
                        style={{marginLeft:'10px'}}
                        onClick={() => this.onDelete(khachhang.maKhachHang)}
                    >
                            Xóa
                    </button>
                </span>   
                </td>
            </tr>
        );
    }
}

export default MucKhachHang;

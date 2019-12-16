import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class MucNhanVien extends Component {

    onDelete=(id) =>{
        this.props.onDelete(id);   
    }

    render() {
        var { nhanvien, index } = this.props;
        return (
            <tr>
                <td>{index+1}</td>        
                <td>{nhanvien.maNhanVien}</td>
                <td>{nhanvien.tenNhanVien}</td>
                <td>{nhanvien.diaChi}</td>
                <td>{nhanvien.soDienThoai}</td>
                <td>{nhanvien.ngaySinh}</td>
                <td>{nhanvien.cmnd}</td>
                <td>{nhanvien.passWork}</td>
                <td>
                <span>
                    <Link 
                        to={`/quanlynhanvien/${nhanvien.maNhanVien}/sua`} 
                        className ="btn btn-success"
                    >
                        Sửa
                    </Link>    
                    <button 
                        type ="button" 
                        className ="btn btn-danger" 
                        style={{marginLeft:'10px'}}
                        onClick={() => this.onDelete(nhanvien.maNhanVien)}>
                            Xóa
                    </button>
                </span>   
                </td>
            </tr>
        );
    }
}

export default MucNhanVien;

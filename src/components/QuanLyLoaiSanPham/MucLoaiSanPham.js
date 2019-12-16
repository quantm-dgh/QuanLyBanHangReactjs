import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class MucLoaiSanPham extends Component {

    onDelete=(id) =>{
        this.props.onDelete(id);   
    }

    render() {
        var { loaisanpham, index } = this.props;
        return (
            <tr>
                <td>{index+1}</td>        
                <td>{loaisanpham.maLoaiSanPham}</td>
                <td>{loaisanpham.tenLoaiSanPham}</td>
                <td>
                <span>
                    <Link 
                        to={`/quanlyloaisanpham/${loaisanpham.maLoaiSanPham}/sua`} 
                        className ="btn btn-success"
                    >
                        Sửa
                    </Link>    
                    <button 
                        type ="button" 
                        className ="btn btn-danger" 
                        style={{marginLeft:'10px'}}
                        onClick={() => this.onDelete(loaisanpham.maLoaiSanPham)}>
                            Xóa
                    </button>
                </span>   
                </td>
            </tr>
        );
    }
}

export default MucLoaiSanPham;

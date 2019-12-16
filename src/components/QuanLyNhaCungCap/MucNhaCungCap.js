import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class MucNhaCungCap extends Component {

    onDelete=(id) =>{
        this.props.onDelete(id);   
    }

    render() {
        var { nhacungcap, index } = this.props;
        return (
            <tr>
                <td>{index+1}</td>        
                <td>{nhacungcap.maNhaCungCap}</td>
                <td>{nhacungcap.tenNhaCungCap}</td>
                <td>{nhacungcap.diaChi}</td>
                <td>{nhacungcap.soDienThoai}</td>
                <td>
                <span>
                    <Link 
                        to={`/quanlynhacungcap/${nhacungcap.maNhaCungCap}/sua`} 
                        className ="btn btn-success"
                    >
                        Sửa
                    </Link>    
                    <button 
                        type ="button" 
                        className ="btn btn-danger" 
                        style={{marginLeft:'10px'}}
                        onClick={() => this.onDelete(nhacungcap.maNhaCungCap)}>
                            Xóa
                    </button>
                </span>   
                </td>
            </tr>
        );
    }
}

export default MucNhaCungCap;

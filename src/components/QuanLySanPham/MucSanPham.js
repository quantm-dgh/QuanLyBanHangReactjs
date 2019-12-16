import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class MucSanPham extends Component {

    onDelete=(id) =>{
        this.props.onDelete(id);   
    }

    render() {
        var { sanpham, index } = this.props;
        return (
            <tr>
                <td>{index+1}</td>        
                <td>{sanpham.maSanPham}</td>
                <td>{sanpham.tenSanPham}</td>
                <td>{sanpham.giaSanPham}</td>
                <td>
                <span>
                    <Link 
                        to={`/quanlysanpham/${sanpham.maSanPham}/sua`} 
                        className ="btn btn-success"
                    >
                        Sửa
                    </Link>    
                    <button 
                        type ="button" 
                        className ="btn btn-danger" 
                        style={{marginLeft:'10px'}}
                        onClick={() => this.onDelete(sanpham.maSanPham)}>
                            Xóa
                    </button>
                </span>   
                </td>
            </tr>
        );
    }
}

export default MucSanPham;

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class MucChucVu extends Component {

    onDelete=(id) =>{
        this.props.onDelete(id);   
    }

    render() {
        var { chucvu, index } = this.props;
        return (
            <tr>
                <td>{index+1}</td>        
                <td>{chucvu.maChucVu}</td>
                <td>{chucvu.tenChucVu}</td>
                <td>
                <span>
                    <Link 
                        to={`/quanlychucvu/${chucvu.maChucVu}/sua`} 
                        className ="btn btn-success"
                    >
                        Sửa
                    </Link>    
                    <button 
                        type ="button" 
                        className ="btn btn-danger" 
                        style={{marginLeft:'10px'}}
                        onClick={() => this.onDelete(chucvu.maChucVu)}>
                            Xóa
                    </button>
                </span>   
                </td>
            </tr>
        );
    }
}

export default MucChucVu;

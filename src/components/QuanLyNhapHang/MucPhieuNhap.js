import React, { Component } from 'react';

class MucPhieuNhap extends Component {

    render() {
        var { hoadonnhap } = this.props;
        return (
            <tr>
                <td>{hoadonnhap.maPhieuNhap}</td>
                <td>{hoadonnhap.ngayNhap}</td>        
                <td>{hoadonnhap.maNhaCungCap}</td>
                <td>{hoadonnhap.maNhanVien}</td>
                <td>
                    <button 
                        type ="button" 
                        className ="btn btn-Waring"     
                    >
                            In
                    </button>
                </td>
            </tr>
        );
    }
}

export default MucPhieuNhap;

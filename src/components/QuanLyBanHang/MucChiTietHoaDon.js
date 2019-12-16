import React, { Component } from 'react';

class MucChiTietHoaDon extends Component {

    render() {
        var { chitiethoadonxuat } = this.props;
        return (
            <tr>
                <td>{chitiethoadonxuat.maHoaDon}</td>        
                <td>{chitiethoadonxuat.maSanPham}</td>
                <td>{chitiethoadonxuat.soLuong}</td>
                <td>{chitiethoadonxuat.donGia}</td>
                <td>{chitiethoadonxuat.soLuong*chitiethoadonxuat.donGia}</td>
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

export default MucChiTietHoaDon;

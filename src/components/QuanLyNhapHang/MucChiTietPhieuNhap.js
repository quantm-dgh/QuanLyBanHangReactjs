import React, { Component } from 'react';

class MucChiTietPhieuNhap extends Component {

    render() {
        var { chitiethoadonnhap } = this.props;
        return (
            <tr>
                <td>{chitiethoadonnhap.maPhieuNhap}</td>        
                <td>{chitiethoadonnhap.maSanPham}</td>
                <td>{chitiethoadonnhap.soLuong}</td>
                <td>{chitiethoadonnhap.donGia}</td>
                <td>{chitiethoadonnhap.soLuong*chitiethoadonnhap.donGia}</td>
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

export default MucChiTietPhieuNhap;

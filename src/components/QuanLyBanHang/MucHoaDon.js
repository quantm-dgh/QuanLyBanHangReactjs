import React, { Component } from 'react';

class MucHoaDon extends Component {

    render() {
        var { hoadonxuat } = this.props;
        return (
            <tr>
                <td>{hoadonxuat.maHoaDon}</td>
                <td>{hoadonxuat.ngayLap}</td>        
                <td>{hoadonxuat.maKhachHang}</td>
                <td>{hoadonxuat.maNhanVien}</td>
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

export default MucHoaDon;

import React, {Component} from 'react';
class QuanLyKhachHang extends Component{
  render(){ 
    
    return (   
      <table className="table table-bordered table-hover ">
          <thead className="al-c">
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên khách hàng</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>chức năng</th>
              </tr>
          </thead>
          <tbody className="al-c">
              {this.props.children}
          </tbody>
      </table>
    );
  }
}
export default QuanLyKhachHang;

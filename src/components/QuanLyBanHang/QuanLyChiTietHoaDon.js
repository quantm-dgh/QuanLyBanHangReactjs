import React, {Component} from 'react';
class QuanLyChiTietHoaDon extends Component{
  render(){ 
    return (   
      <table className="table table-bordered table-hover ">
          <thead className="al-c">
              <tr>
                <th>Mã hóa đơn</th>
                <th>Mã sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
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
export default QuanLyChiTietHoaDon;

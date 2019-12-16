import React, {Component} from 'react';
class QuanLyPhieuNhap extends Component{
  render(){ 
    return (   
      <table className="table table-bordered table-hover ">
          <thead className="al-c">
              <tr>
                <th>Mã hóa đơn</th>
                <th>Mã nhà cung cấp</th>
                <th>Mã nhân viên</th>
                <th>Ngày nhập</th>
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
export default QuanLyPhieuNhap;

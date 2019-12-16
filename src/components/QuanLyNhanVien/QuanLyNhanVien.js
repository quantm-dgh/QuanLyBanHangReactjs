import React, {Component} from 'react';
class QuanLyNhanVien extends Component{
  render(){ 
    return (   
      <table className="table table-bordered table-hover ">
          <thead className="al-c">
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên nhân viên</th>
                <th>Địa chỉ</th>
                <th>số điện thoại</th>
                <th>Ngày sinh</th>
                <th>CMND</th>
                <th>Mật khẩu</th>
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
export default QuanLyNhanVien;

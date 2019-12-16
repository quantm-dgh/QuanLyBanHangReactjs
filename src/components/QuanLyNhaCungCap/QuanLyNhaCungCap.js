import React, {Component} from 'react';
class QuanLyNhaCungCap extends Component{
  render(){ 
    
    return (   
      <table className="table table-bordered table-hover ">
          <thead className="al-c">
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên nhà cung cấp</th>
                <th>địa chỉ</th>
                <th>số điện thoại</th>
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
export default QuanLyNhaCungCap;

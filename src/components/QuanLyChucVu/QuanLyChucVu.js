import React, {Component} from 'react';
class QuanLyChucVu extends Component{
  render(){ 
    return (   
      <table className="table table-bordered table-hover ">
          <thead className="al-c">
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên chức vụ</th>
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
export default QuanLyChucVu;

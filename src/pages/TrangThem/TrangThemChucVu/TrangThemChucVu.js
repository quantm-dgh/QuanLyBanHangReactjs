import React, {Component} from 'react';
import { Breadcrumb, Layout } from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';
const { Content } = Layout;

class TrangThemChucVu extends Component{
    constructor(props){
        super(props);
        this.state={    
            id: '',
            txtTenChucVu:''
        }   
        this.onChange=this.onChange.bind(this);
        this.onSave=this.onSave.bind(this);
    }

    componentDidMount(){
        var {match} = this.props; 
        var id;
        if(match){
            id = match.params.id;
            axios({
                method : "GET",
                url: 'https://localhost:3001/api/chucvus/'+id ,
                data : null
              }).then(res =>{
                var data = res.data;
                this.setState({
                  id:data.maChucVu,
                  txtTenChucVu:data.tenChucVu,   
                }); 
              }).catch(err=>{
                console.log(err);
            });
        }  
    }

    onChange = (e) =>{
        var target = e.target; 
        var name = target.name; 
        var value = target.value;
        this.setState({
            [name] : value
        });
    }
    onSave = (e) =>{
        e.preventDefault();
        
        var {id, txtTenChucVu} = this.state;  
        
        var {history} = this.props;
        if(id){//update
            axios({
                method : "PUT",
                url: 'https://localhost:3001/api/chucvus/'+id,
                data : {
                    maChucVu:Number(id),
                    tenChucVu:txtTenChucVu,      
                }
              }).then(res =>{
                  history.goBack();
              }).catch(err=>{
                console.log(err);
              });
        }else{//thêm mới
            axios({
                method : "POST",
                url: 'https://localhost:3001/api/chucvus',
                data : {
                    tenChucVu:txtTenChucVu,
                }
              }).then(res =>{
                  history.goBack();
                
              }).catch(err=>{
                console.log(err);
              });
        }
        
    }

    render(){  
      var {id, txtTenChucVu} = this.state;  
        var tieude;
      if(id){tieude='Trang sửa chức vụ'}else{tieude='Trang thêm chức vụ'}
      return (   
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{tieude}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>    
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        
                      <form onSubmit= {this.onSave}>
                        <div className="form-group">
                            <label>Tên Chức vụ: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name= "txtTenChucVu"
                                value={txtTenChucVu}
                                onChange={this.onChange}
                            /> 
                        </div>
                        <button type="submit" className="btn btn-primary" style={{marginRight:'20px'}} >
                            Lưu lại
                        </button>
                        <Link to="/quanlyloaisanpham-ds" className="btn btn-danger"> 
                            Trở lại
                        </Link>
                    </form>  
                    </div> 
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>
            </div>
        </Content>  
      );
    }
}
export default TrangThemChucVu;
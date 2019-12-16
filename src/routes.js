import React from 'react';
import TrangQuanLySanPham from './pages/TrangQuanLySanPham/TrangQuanLySanPham';
import KhongTimThayTrang from './pages/KhongTimThayTrang/KhongTimThayTrang';
import TrangQuanLyBanHang from './pages/TrangQuanLyBanHang/TrangQuanLyBanHang';
import TrangQuanLyKhachHang from './pages/TrangQuanLyKhachHang/TrangQuanLyKhachHang';
import TrangQuanLyThongKe from './pages/TrangQuanLyThongKe/TrangQuanLyThongKe';
import TrangQuanLyNhanVien from './pages/TrangQuanLyNhanVien/TrangQuanLyNhanVien';
import TrangThemSanPham from './pages/TrangThem/TrangThemSanPham/TrangThemSanPham';
import TrangThemKhachHang from './pages/TrangThem/TrangThemKhachHang/TrangThemKhachHang';
import TrangQuanLyLoaiSanPham from './pages/TrangQuanLyLoaiSanPham/TrangQuanLyLoaiSanPham';
import TrangThemLoaiSanPham from './pages/TrangThem/TrangThemLoaiSanPham/TrangThemLoaiSanPham';
import TrangThemNhanVien from './pages/TrangThem/TrangThemNhanVien/TrangThemNhanVien';
import TrangThemChucVu from './pages/TrangThem/TrangThemChucVu/TrangThemChucVu';
import TrangQuanLyChucVu from './pages/TrangQuanLyChucVu/TrangQuanLyChucVu';
import TrangQuanLyNhaCungCap from './pages/TrangQuanLyNhaCungCap/TrangQuanLyNhaCungCap';
import TrangThemNhaCungCap from './pages/TrangThem/TrangThemNhaCungCap/TrangThemNhaCungCap';
import TrangQuanLyNhapHang from './pages/TrangQuanLyNhapHang/TrangQuanLyNhapHang';

const routes = [
    {
        path : '/',
        exact : true,
        main : ()=><TrangQuanLyBanHang/>
    },
    {
        path : '/quanlysanpham-ds',
        exact : false,
        main : ()=><TrangQuanLySanPham/>
    },
    {
        path : '/quanlynhaphang',
        exact : false,
        main : ()=><TrangQuanLyNhapHang/>
    },
    {
        path : '/quanlyloaisanpham-ds',
        exact : false,
        main : ()=><TrangQuanLyLoaiSanPham/>
    },
    {
        path : '/quanlyloaisanpham/them',
        exact : false,
        main : ({history})=><TrangThemLoaiSanPham history={history} />
    },
    {
        path : '/quanlyloaisanpham/:id/sua',
        exact : false,
        main : ({match,history})=><TrangThemLoaiSanPham match={match} history={history} />
    },
    {
        path : '/quanlybanhang',
        exact : false,
        main : ()=><TrangQuanLyBanHang/>
    },
    {
        path : '/quanlynhanvien-ds',
        exact : false,
        main : ()=><TrangQuanLyNhanVien/>
    },
    {
        path : '/quanlynhanvien/them',
        exact : false,
        main : ({history})=><TrangThemNhanVien history={history}/>
    },
    {
        path : '/quanlynhanvien/:id/sua',
        exact : false,
        main : ({match,history})=><TrangThemNhanVien match={match} history={history}/>
    },
    {
        path : '/quanlykhachhang-ds',
        exact : false,
        main : ()=><TrangQuanLyKhachHang/>
    },
    {
        path : '/quanlykhachhang/them',
        exact : false,
        main : ({history})=><TrangThemKhachHang history={history} />
    },
    {
        path : '/quanlykhachhang/:id/sua',
        exact : false,
        main : ({match,history})=><TrangThemKhachHang match={match} history={history}/>
    },
    {
        path : '/quanlythongke',
        exact : false,
        main : ()=><TrangQuanLyThongKe/>
    },
    {
        path : '/quanlysanpham/them',
        exact : false,
        main : ({history})=><TrangThemSanPham  history={history}/>
    },
    {
        path : '/quanlysanpham/:id/sua',
        exact : false,
        main : ({match,history})=><TrangThemSanPham  match={match} history={history}/>
    },
    {
        path : '/quanlychucvu-ds',
        exact : false,
        main : ()=><TrangQuanLyChucVu/>
    },
    {
        path : '/quanlychucvu/them',
        exact : false,
        main : ({history})=><TrangThemChucVu history={history}/>
    },
    {
        path : '/quanlychucvu/:id/sua',
        exact : false,
        main : ({match,history})=><TrangThemChucVu match={match} history={history}/>
    },
    {
        path : '/quanlynhacungcap-ds',
        exact : false,
        main : ()=><TrangQuanLyNhaCungCap/>
    },
    {
        path : '/quanlynhacungcap/them',
        exact : false,
        main : ({history})=><TrangThemNhaCungCap history={history} />
    },
    {
        path : '/quanlynhacungcap/:id/sua',
        exact : false,
        main : ({match,history})=><TrangThemNhaCungCap match={match} history={history} />
    },

    {
        path : '',
        exact : false,
        main : ()=><KhongTimThayTrang/>
    }  
];
export default routes; 
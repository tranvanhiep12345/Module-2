export class Menu{
    static login(){
        console.log('Chọn tác vụ muốn thực hiện: ' +
                    '\n 1. Đăng nhập' +
                    '\n 2. Đăng ký' +
                    '\n 3. Đăng xuất')
    }
    static menu(){
        console.log('Hãy chọn tác vụ bạn muốn thực hiện: ' +
            '\n 1. Nhập hàng vào Kho.' +
            '\n 2. Xóa bỏ hàng hóa trong Kho.' +
            '\n 3. Tìm kiếm hàng hóa trong Kho.' +
            '\n 4. Hiển thị danh sách hàng hóa trong Kho.' +
            '\n 5. Hiển thị hàng hóa trong Cửa hàng.' +
            '\n 6. Nhập hàng hóa từ Kho vào Cửa hàng.' +
            '\n 7. Tìm kiếm hàng hóa trong Cửa hàng. ' +
            '\n 8. Hiển thị giỏ hàng.' +
            '\n 9. Thêm sản phẩm vào giỏ hàng. ' +
            '\n 10. Tổng giá trị đơn hàng. ' +
            '\n 11. Nạp thêm tiền vào hóa đơn. ' +
            '\n 12. Thanh toán hóa đơn.' +
            '\n 13. Tính doanh thu của Kho.' +
            '\n 14. Tính doanh thu của Cửa hàng.' +
            '\n 15. Tính lợi nhuận của Cửa hàng.' +
            '\n 16. Hiển thị thông tin của tài khoản đang mua sắm.' +
            '\n 17. Hiển thị thông tin của tất cả các khách hàng' +
            '\n 18. Kết thúc.')
    }
    static separates(){
        let sum: string = '='
        for(let i=0; i < 162; i++){
            sum += '='
        }
        console.log(sum)
    }
}
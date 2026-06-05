# Nhật ký học tập

## 2026-06-04

### Kiến thức đã nắm được

- Hiểu cấu trúc cơ bản của một dự án React Vite, component và JSX.
- Biết dùng `useState`, `useEffect`, `map()` và conditional rendering.
- Biết tách logic gọi API ra file service riêng.
- Biết xử lý các trạng thái UI: loading, error, có dữ liệu và rỗng dữ liệu.

### Đã làm được trong project

- Tạo frontend React Vite và kết nối với API products.
- Hiển thị danh sách sản phẩm bằng table.
- Hoàn thiện loading, error, empty state và status badge.
- Thêm giao diện tìm kiếm sản phẩm.

## 2026-06-05

### Kiến thức đã nắm được

- Hiểu controlled input và cách quản lý giá trị input bằng state.
- Hiểu dependency array của `useEffect`.
- Biết truyền tham số tìm kiếm vào service và URL API.
- Hiểu cách truyền dữ liệu từ component cha sang component con bằng props.
- Hiểu debounce giúp hạn chế số lần gọi API khi người dùng nhập liệu.
- Hiểu cách truyền callback qua props để component con thay đổi trạng thái ở component cha.
- Hiểu cách xử lý form submit và gửi dữ liệu JSON đến API.

### Đã làm được trong project

- Hoàn thiện controlled input cho ô tìm kiếm.
- Cập nhật service và `App.jsx` để tìm kiếm sản phẩm theo `keyword`.
- Hoàn thiện trạng thái loading và error khi tìm kiếm lại.
- Tách bảng sản phẩm thành component `ProductTable`.
- Thêm debounce cho chức năng tìm kiếm sản phẩm.
- Tạo `ProductForm` và hoàn thiện chức năng mở, đóng form.
- Hoàn thiện chức năng thêm sản phẩm và cập nhật lại bảng dữ liệu.

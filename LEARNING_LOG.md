# Learning Log

## 2026-06-04

### Kien thuc da nam duoc

- Biet cach tao project React bang Vite.
- Hieu vai tro cua `App.jsx` la component chinh cua ung dung React.
- Hieu JSX la cach viet giao dien ben trong JavaScript.
- Biet dung `className` de gan CSS cho React element.
- Biet tao file service rieng de goi API thay vi viet `fetch` truc tiep trong UI.
- Biet `useState` dung de luu du lieu thay doi tren giao dien.
- Biet `useEffect` dung de chay logic khi component duoc hien thi lan dau.
- Biet xu ly cac trang thai UI co ban: `loading`, `error`, co du lieu, va rong du lieu.
- Biet dung `map()` de render danh sach san pham thanh cac dong trong bang.
- Biet dung conditional rendering de hien thi UI theo tung dieu kien.

### Da lam duoc trong project

- Tao frontend React Vite trong thu muc `frontend`.
- Tao file `frontend/src/services/productApi.js` de goi API products.
- Goi API tu `App.jsx` bang `getProducts()`.
- Luu danh sach san pham vao state `products`.
- Hien thi trang thai dang tai du lieu bang `loading`.
- Hien thi loi khi goi API that bai bang `error`.
- Hien thi danh sach san pham bang bang `product-table`.
- Them empty state khi danh sach san pham rong.
- Them status badge cho trang thai san pham `Active` va `Inactive`.
- Them UI o tim kiem san pham trong khu vuc action cua trang.

## 2026-06-05

### Kien thuc da nam duoc

- Biet controlled input la cach de React quan ly gia tri cua o nhap lieu.
- Biet dung `value` de gan gia tri state vao input.
- Biet dung `onChange` de cap nhat state khi nguoi dung nhap du lieu.
- Hieu `event.target.value` la gia tri hien tai trong input.

### Da lam duoc trong project

- Them state `searchKeyword` de luu tu khoa tim kiem san pham.
- Gan `value={searchKeyword}` cho o search.
- Gan `onChange` cho o search de cap nhat `searchKeyword` khi nguoi dung go phim.

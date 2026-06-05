const API_BASE_URL = "http://localhost:8080/api/products"; // Luu dia chi API products cua backend Spring Boot

export async function getProducts(keyword = "") { // Tao ham getProducts de App.jsx goi khi can lay danh sach san pham
  const query = keyword ? `?keyword=${encodeURIComponent(keyword)}` : ""; // Neu co keyword thi them vao query string
  const response = await fetch(`${API_BASE_URL}${query}`); // Gui request GET den backend Spring Boot 

  if (!response.ok) { // Kiem tra backend co tra ve loi hay khong
    throw new Error("Cannot load products"); // Bao loi cho App.jsx neu request that bai
  }

  return response.json(); // Chuyen du lieu JSON tu backend thanh du lieu JavaScript
}

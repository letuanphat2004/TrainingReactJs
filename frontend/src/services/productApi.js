const API_BASE_URL = "http://localhost:8080/api/products"; // Luu dia chi API products cua backend Spring Boot

export async function getProducts() { // Tao ham getProducts de App.jsx goi khi can lay danh sach san pham
  const response = await fetch(API_BASE_URL); // Gui request GET den backend Spring Boot

  if (!response.ok) { // Kiem tra backend co tra ve loi hay khong
    throw new Error("Cannot load products"); // Bao loi cho App.jsx neu request that bai
  }

  return response.json(); // Chuyen du lieu JSON tu backend thanh du lieu JavaScript
}

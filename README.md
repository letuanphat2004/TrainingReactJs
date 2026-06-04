# TrainFE

Project duoc tach thanh 2 phan rieng:

- `backend`: Spring Boot API, dung MySQL.
- `frontend`: ReactJS Vite app.

## Cau truc thu muc

```text
TrainFE/
+-- backend/
|   +-- pom.xml
|   +-- src/
+-- frontend/
|   +-- package.json
|   +-- src/
+-- README.md
```

## Chay backend

- Java 21
- Maven 3.9+
- MySQL dang chay tren may

Thong tin MySQL da cau hinh trong `backend/src/main/resources/application.properties`:

```properties
spring.datasource.username=root
spring.datasource.password=15032004
spring.datasource.url=jdbc:mysql://localhost:3306/train_fe?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Ho_Chi_Minh
```

```bash
cd backend
mvn spring-boot:run
```

Backend chay tai:

```text
http://localhost:8080
```

## Chay frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend chay tai:

```text
http://localhost:5173
```

## API cho ReactJS

### Lay danh sach san pham

```http
GET http://localhost:8080/api/products
```

Co tim kiem theo ten:

```http
GET http://localhost:8080/api/products?keyword=ban
```

### Lay chi tiet

```http
GET http://localhost:8080/api/products/1
```

### Tao san pham

```http
POST http://localhost:8080/api/products
Content-Type: application/json

{
  "name": "Laptop hoc React",
  "price": 15000000,
  "stock": 5,
  "active": true,
  "description": "May dung de hoc frontend"
}
```

### Sua san pham

```http
PUT http://localhost:8080/api/products/1
Content-Type: application/json

{
  "name": "Laptop hoc ReactJS",
  "price": 14500000,
  "stock": 4,
  "active": true,
  "description": "Da cap nhat"
}
```

### Xoa san pham

```http
DELETE http://localhost:8080/api/products/1
```

## Mau fetch ben React

```js
const API_URL = "http://localhost:8080/api/products";

export async function getProducts(keyword = "") {
  const params = keyword ? `?keyword=${encodeURIComponent(keyword)}` : "";
  const response = await fetch(`${API_URL}${params}`);
  if (!response.ok) throw new Error("Khong tai duoc san pham");
  return response.json();
}

export async function createProduct(product) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("Khong tao duoc san pham");
  return response.json();
}
```

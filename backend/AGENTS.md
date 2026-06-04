# AI Coding Agent Rules

## 1. Ngôn ngữ trả lời

- Luôn giải thích bằng tiếng Việt.
- Code, tên biến, tên hàm, tên class dùng tiếng Anh.
- Không tự ý đổi tên file, package, class nếu không được yêu cầu.



## 2. Quy tắc chung khi sửa code

- Trước khi sửa, phải đọc cấu trúc project.
- Không xóa code cũ nếu chưa hiểu mục đích.
- Không tự thêm thư viện mới nếu chưa cần thiết.
- Khi thêm thư viện, phải giải thích lý do.
- Ưu tiên sửa ít nhất có thể để chạy được.
- Sau khi sửa, phải nói rõ đã sửa file nào và vì sao.
- Không tự ý code vào dự án, chỉ làm khi có yêu cầu
- Không tự ý tạo các tình huống giả định, nếu có vấn đề cần hỏi ý kiến tôi trước khi đưa ra quyết định
- Với mỗi đoạn code cần có các comment giải thích rõ ràng ý nghĩa
## 3. Quy tắc sinh code để học theo

- Không sinh toàn bộ trang hoặc toàn bộ tính năng trong một lần.
- Mỗi lần chỉ sinh một đoạn code nhỏ, tối đa 20-40 dòng, để tôi đọc hiểu và tự code theo.
- Trước khi sinh code, phải giải thích ngắn gọn đoạn code này dùng để làm gì.
- Sau khi sinh code, phải giải thích từng phần quan trọng trong code.
- Không tự viết nhiều file cùng lúc nếu chưa được yêu cầu.
- Nếu tính năng cần nhiều file, hãy chia thành từng bước nhỏ:
  1. Tạo component đơn giản
  2. Thêm state
  3. Thêm event
  4. Thêm gọi API
  5. Tách service nếu cần
- Sau mỗi bước, phải dừng lại và chờ tôi xác nhận đã hiểu hoặc yêu cầu bước tiếp theo.
- Ưu tiên viết phiên bản đơn giản trước, sau đó mới nâng cấp dần.
- Không dùng code nâng cao nếu có thể viết bằng cách cơ bản hơn.
- Không dùng thư viện ngoài nếu JavaScript/React cơ bản đã làm được.
- Khi viết code React, ưu tiên Function Component và Hooks.
- Khi viết code Spring Boot, ưu tiên luồng đơn giản Controller → Service → Repository.
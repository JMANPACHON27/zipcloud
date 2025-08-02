# Zipcode Search (React + TypeScript)

Ứng dụng React giúp tra cứu địa chỉ tại Nhật Bản theo mã zipcode, sử dụng API: [https://zipcloud.ibsnet.co.jp/api/search?zipcode={zipcode}](https://zipcloud.ibsnet.co.jp/api/search?zipcode={zipcode})

## 🚀 Demo

- Nhập các mã zipcode mẫu như: `7830060`, `1500012`, `272-0141`
- Nhấn **Search** để lấy và hiển thị địa chỉ chi tiết.

## 🛠️ Cài đặt

1. **Clone repo hoặc copy mã nguồn**
2. Chạy lệnh cài đặt dependencies:

    ```bash
    npm install
    ```

3. **Khởi động ứng dụng:**

    ```bash
    npm start
    ```

4. Truy cập `http://localhost:3000` trên trình duyệt để sử dụng.

## 📄 Cấu trúc dự án

```
├── package.json
├── README.md
└── src
    ├── App.tsx
    ├── App.css
    ├── index.tsx
    └── index.css
```

## ⚙️ Tính năng

- Nhập zipcode (theo mẫu: `7830060`, `1500012`, `272-0141`)
- Kiểm tra định dạng zipcode hợp lệ
- Gọi API lấy dữ liệu địa chỉ
- Hiển thị: `address1`, `address2`, `address3`
- Xử lý lỗi: zipcode sai định dạng, không tìm thấy kết quả, lỗi khi gọi API

## 📦 Dependencies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 📝 Ghi chú

- Bạn có thể mở rộng validate zipcode hoặc thêm tính năng mới tùy ý.
- Nếu muốn build sản phẩm, dùng lệnh:

    ```bash
    npm run build
    ```

---

**Tác giả:**  
JMANPACHON27

# QA Film MVC

Ứng dụng mẫu Node.js theo kiến trúc MVC dùng Express và EJS, phục vụ giao diện xem phim/TV.

## Mô tả

- **Express** làm web framework.
- **EJS** để render view với template động.
- **express-ejs-layouts** để quản lý layout chung.
- Không có database; dữ liệu tĩnh hoặc mở rộng bởi bạn.

## Cấu trúc dự án

```
/controllers   — logic điều khiển
/models        — mô hình dữ liệu (hiện trống)
/routes        — định nghĩa đường dẫn
/views         — các template EJS, bao gồm `layout/` và `partials/`
/public        — tài nguyên tĩnh (CSS, JS, ảnh... )
app.js         — điểm vào ứng dụng
package.json   — metadata và script
```

## Các tuyến (routes)

- `GET /` → trang chủ (`views/index.ejs`)
- `GET /movie/:i` → chi tiết phim (`views/movieDetail.ejs`)
- `GET /search` → tìm kiếm phim (`views/searchMovie.ejs`)
- `GET /movie-list` → danh sách phim (`views/movieList.ejs`)
- `GET /tv-series` → trang TV series (`views/TvSeries.ejs`)

Logic xử lý nằm trong `controllers/homeController.js`.

## Cài đặt và chạy

1. Cài đặt Node.js (phiên bản 16+).
2. Từ thư mục gốc chạy:
   ```bash
   npm install
   ```
3. Chạy ở chế độ phát triển:
   ```bash
   npm run dev   # dùng nodemon tự restart
   ```
   hoặc chạy bình thường:
   ```bash
   npm start
   ```
4. Mở trình duyệt tới `http://localhost:3000`.

## Phát triển thêm

- Thêm model, controller, route theo cấu trúc MVC.
- Dữ liệu có thể lấy từ API hoặc cơ sở dữ liệu.
- Sửa đổi layout tại `views/layout/main.ejs` và phần partial trong `views/layout/partials/`.

## Ghi chú

- File `app.js` đã xử lý lỗi 404 và lỗi nội bộ.
- Thư viện phục vụ tĩnh nằm trong `public/`.
- Người dùng có thể mở rộng với chức năng đăng nhập, quản lý phim,...

## License

MIT

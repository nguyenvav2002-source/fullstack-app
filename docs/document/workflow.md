# 📋 Workflow — Đồng Tâm Frontend Development Log

> Tài liệu ghi lại toàn bộ các thay đổi đã thực hiện trên dự án **Đồng Tâm House Fashions** (Angular + Spring Boot + MySQL).

---

## 🗓️ Ngày 14/05/2026 — Khởi chạy dự án

### 1. Chạy dự án lần đầu
- **Docker Desktop** được khởi động thủ công.
- Chạy `docker-compose up -d --build` để khởi động:
  - **MySQL 8.4** container (`fullstack-mysql`) — port 3306
  - **Spring Boot** backend (`fullstack-backend`) — port 8080
- Chạy Angular frontend bằng `cmd /c "npm run start"` — port 4200.
- **Kết quả:** Toàn bộ stack hoạt động tại `http://localhost:4200`.

---

## 🗓️ Ngày 15/05/2026 — Cải tiến UI/UX Trang Chủ

### 2. Xóa badge "Angular · Spring Boot · MySQL"
- **File:** `home.component.html`
- **Lý do:** Badge kỹ thuật không phù hợp với giao diện sản phẩm thực tế.
- **Thay đổi:** Xóa `<span class="hero-label">Angular · Spring Boot · MySQL</span>`.

### 3. Phối bảng màu xanh lá
- **File:** `home.component.css`
- **Bảng màu mới:**

| Token | Mã màu | Dùng cho |
|---|---|---|
| Light green | `#6FCF97` | Hover, accent nhẹ |
| Primary green | `#2FA084` | CTA, border, icon |
| Dark green | `#1F6F5F` | Hover dark, heading |
| Neutral light | `#EEEEEE` | Text sáng, nền nhạt |
| Light bg | `#F5FAF7` | Nền section sáng |
| Dark bg | `#0d0d0d` | Nền section tối |

- **Thay thế:** Toàn bộ màu vàng gold `#c5a059` → `#2FA084`.

### 4. Sửa hero banner bị đè
- **File:** `home.component.css`
- **Vấn đề:** Class `.hero-image-wrap`, `.hero-img`, `.hero-overlay` có trong HTML nhưng **không có CSS** → ảnh bị hiển thị inline, đè lên content.
- **Giải pháp:**
  ```css
  .hero-image-wrap { position: absolute; inset: 0; z-index: 0; }
  .hero-img { width: 100%; height: 100%; object-fit: cover; }
  .hero-overlay { position: absolute; inset: 0; background: gradient; z-index: 1; }
  ```

### 5. Xóa text trùng lặp trên project cards
- **File:** `home.component.html`
- **Vấn đề:** Mỗi card có 2 lớp text đè nhau:
  - `.project-label` — luôn hiển thị (always visible)
  - `.project-info` — hiển thị khi hover
- **Giải pháp:** Xóa tất cả `.project-label` div, giữ lại `.project-info` chỉ hiện khi hover.

### 6. Bố cục sáng/tối xen kẽ (Light/Dark Layout)
- **File:** `home.component.css`
- **Mục tiêu:** Tạo nhịp thị giác, tránh toàn trang tối.
- **Cấu trúc:**

| Section | Chế độ | Nền |
|---|---|---|
| Topbar + Navbar | 🌑 Tối | `#0d0d0d` |
| Hero | 🌑 Tối | Ảnh nền + overlay |
| Services | ☀️ **Sáng** | `#F5FAF7` |
| Projects | 🌑 Tối | `#0d0d0d` |
| About (trái) | 🌑 Tối | Ảnh |
| About (phải) | ☀️ **Sáng** | `#F5FAF7` |
| Contact | ☀️ **Sáng** | `#EEEEEE` |
| Footer | 🌑 Tối | `#060d09` |

---

## 🗓️ Ngày 15/05/2026 — Trang Dịch Vụ Chi Tiết

### 7. Tạo component ServicesDetail
- **Files tạo mới:**
  - `frontend/src/app/services-detail/services-detail.component.ts`
  - `frontend/src/app/services-detail/services-detail.component.html`
  - `frontend/src/app/services-detail/services-detail.component.css`
- **Route mới:** `/services/:id` — map theo `id` dịch vụ.
- **File cập nhật:** `app.routes.ts` — thêm route `{ path: 'services/:id', component: ServicesDetailComponent }`.

### 8. Layout trang dịch vụ (theo mẫu conndesign.vn)

| Section | Mô tả |
|---|---|
| **Hero Banner** | Nền tối với tên dịch vụ + breadcrumb |
| **Sticky Tabs** | Thanh tab dính dưới navbar, chuyển giữa 6 dịch vụ |
| **Giới thiệu** | Mô tả + danh sách "dịch vụ bao gồm" (icon grid) |
| **Quy trình 5 bước** | Tab số bấm để xem nội dung từng bước |
| **Bảng giá 3 gói** | Cơ bản / Trung cấp (nổi bật) / Cao cấp |
| **FAQ Accordion** | Click để mở/đóng từng câu hỏi |
| **CTA Banner** | Dark gradient, nút liên hệ |
| **Footer** | Đồng nhất với trang chủ |

### 9. Service cards trang chủ → điều hướng
- **File:** `home.component.html`, `home.component.ts`
- Mỗi service card thêm `(click)="goService(index)"`.
- Thêm link "Xem chi tiết →" màu xanh.
- Nav link "Dịch vụ" → chuyển sang `/services/thiet-ke-noi-that` thay vì scroll `#services`.

### 10. Nâng cấp Heading Hierarchy (H1-H4 + Uppercase)
- **File:** `home.component.html`, `home.component.css`
- **H1:** `hero-title` (tiêu đề chính hero)
- **H2:** Tất cả `section-title` (tiêu đề mỗi section) → **UPPERCASE**
- **H4:** `service-title` (tên từng dịch vụ), `astat-label` (nhãn thống kê)
- **CSS:** Thêm `letter-spacing: 2px` cho `.section-title`.

---

## 📁 Cấu Trúc File Sau Thay Đổi

```
frontend/src/app/
├── home/
│   ├── home.component.html     ← UI trang chủ (navbar, hero, services, projects, about, contact, footer)
│   ├── home.component.css      ← Light/dark layout, green palette
│   └── home.component.ts       ← Logic: goService(), scrollTo(), logout()
├── services-detail/            ← MỚI
│   ├── services-detail.component.html
│   ├── services-detail.component.css
│   └── services-detail.component.ts
├── auth/                       ← Đăng nhập/xác thực
└── app.routes.ts               ← Thêm route /services/:id
```

---

## 🎨 Design System

```css
/* Bảng màu thống nhất cả 2 trang */
--green-light:   #6FCF97;   /* hover, accent */
--green-primary: #2FA084;   /* CTA, border, icon chính */
--green-dark:    #1F6F5F;   /* hover dark */
--neutral-light: #EEEEEE;   /* text sáng, nền nhạt */
--bg-light:      #F5FAF7;   /* nền section sáng */
--bg-dark:       #0d0d0d;   /* nền section tối */
--bg-card-light: #ffffff;   /* card trắng */
--border-light:  #d4e4da;   /* viền section sáng */
--border-dark:   #1a2a22;   /* viền section tối */
```

---

*Cập nhật lần cuối: 15/05/2026 — by Antigravity AI Assistant*

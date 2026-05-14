# Changelog

## 2026-05-12

- Them spec cho chuc nang dang ky va dang nhap trong `docs/document/spet.md`.
- Them backend auth module:
  - `AuthUser`
  - `AuthUserRepository`
  - `AuthRequest`
  - `AuthResponse`
  - `AuthController`
- Them API:
  - `POST /api/auth/register`
  - `POST /api/auth/login`
- Cap nhat frontend thanh form dang ky/dang nhap dung Tailwind theme.
- Refactor backend auth theo bo cuc `controller/dto/entity/repository/service`.
- Refactor frontend auth theo bo cuc `auth.component/auth.service/auth.models`.
- Dang ky thanh cong hien: `đã tạo tk đăng nhập thành công`.
- Dang nhap dung hien: `chào mừng đến với chúng tôi`.
- Dang nhap sai hien: `tài khoản hoặc mật khẩu đã bị login sai xin vui lòng thử lại`.

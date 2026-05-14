# Spec - Login va Dang Ky

## Muc tieu

Xay dung chuc nang dang ky tai khoan va dang nhap cho ung dung Angular + Spring Boot + MySQL.

## Pham vi

- Frontend co man hinh dang ky va dang nhap.
- Backend co API tao tai khoan va kiem tra dang nhap.
- Du lieu tai khoan duoc luu trong MySQL.
- Sau khi dang ky thanh cong, nguoi dung thay thong bao thanh cong.
- Sau khi dang nhap dung, nguoi dung thay thong bao dang nhap thanh cong tai form.
- Sau khi dang nhap sai, nguoi dung thay thong bao loi.

## Rule nghiep vu

### Dang ky

- Nguoi dung nhap `username` va `password`.
- Neu `username` hoac `password` rong, API tra loi validate.
- Neu `username` da ton tai, API tra loi tai khoan da ton tai.
- Neu dang ky thanh cong:
  - Tao record trong bang `auth_users`.
  - Tra thong bao: `đã tạo tk đăng nhập thành công`.
  - Frontend chuyen ve tab dang nhap.

### Dang nhap

- Nguoi dung nhap `username` va `password`.
- Neu dung username va password:
  - API tra success.
  - Frontend van giu tai form login.
  - Noi dung thong bao: `Đã đăng nhập thành công`.
- Neu sai username hoac password:
  - API tra loi unauthorized.
  - Frontend hien thong bao: `tài khoản hoặc mật khẩu đã bị login sai xin vui lòng thử lại`.

## API

### POST `/api/auth/register`

Request:

```json
{
  "username": "demo",
  "password": "123456"
}
```

Response thanh cong:

```json
{
  "success": true,
  "message": "đã tạo tk đăng nhập thành công",
  "username": "demo"
}
```

### POST `/api/auth/login`

Request:

```json
{
  "username": "demo",
  "password": "123456"
}
```

Response thanh cong:

```json
{
  "success": true,
  "message": "Đã đăng nhập thành công",
  "username": "demo"
}
```

Response that bai:

```json
{
  "success": false,
  "message": "tài khoản hoặc mật khẩu đã bị login sai xin vui lòng thử lại",
  "username": null
}
```

## Database

Bang `auth_users`:

| Cot | Kieu | Mo ta |
| --- | --- | --- |
| `id` | Long | Khoa chinh tu tang |
| `username` | String | Ten dang nhap, unique |
| `passwordHash` | String | Mat khau da hash |
| `createdAt` | Instant | Thoi diem tao tai khoan |

## Bo cuc file

### Backend

```text
backend/src/main/java/com/example/fullstack/auth/
  controller/
    AuthController.java
  dto/
    AuthRequest.java
    AuthResponse.java
  entity/
    AuthUser.java
  repository/
    AuthUserRepository.java
  service/
    AuthService.java
```

- `controller`: nhan request tu frontend va tra response.
- `dto`: dinh nghia request/response cho API.
- `entity`: mapping bang database.
- `repository`: truy van MySQL bang Spring Data JPA.
- `service`: xu ly rule dang ky, dang nhap va hash password.

### Frontend

```text
frontend/src/app/
  app.component.ts
  app.component.html
  auth/
    auth.component.ts
    auth.component.html
    auth.models.ts
    auth.service.ts
```

- `app.component`: shell chinh, render module auth.
- `auth.component`: quan ly UI dang ky, dang nhap va thong bao thanh cong/that bai.
- `auth.models`: type cho request, response va mode.
- `auth.service`: goi API backend `/api/auth/register` va `/api/auth/login`.

## Checklist validate

- [ ] Dang ky voi username/password moi thanh cong.
- [ ] Sau khi dang ky, frontend hien thong bao `đã tạo tk đăng nhập thành công`.
- [ ] Dang nhap dung tai khoan vua tao thanh cong.
- [ ] Dang nhap dung hien `Đã đăng nhập thành công` tai form.
- [ ] Dang nhap sai password hien thong bao loi dung yeu cau.
- [ ] Dang ky trung username hien thong bao tai khoan da ton tai.

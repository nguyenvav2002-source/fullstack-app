# Check Validate

## Muc tieu

Kiem tra nhanh ung dung fullstack Angular + Spring Boot + MySQL sau khi cai dat, sua code, hoac truoc khi ban giao.

## Dieu kien truoc khi test

- Docker dang chay.
- Node.js va npm da cai dat.
- Java 17 da cai dat neu chay backend truc tiep.
- Port `8080` va `4200` dang trong.

## Validate backend va database

| Buoc | Lenh / thao tac | Ket qua mong doi | Trang thai |
| --- | --- | --- | --- |
| 1 | `docker compose up --build` | MySQL va backend khoi dong thanh cong | [ ] |
| 2 | Mo `http://localhost:8080/api/hello` | API tra ve JSON hop le | [ ] |
| 3 | Kiem tra `databaseStatus` | Gia tri la `connected` | [ ] |
| 4 | Goi API nhieu lan | `requestCount` tang sau moi request | [ ] |

Ket qua API mau:

```json
{
  "message": "Hello World from Angular + Spring Boot + MySQL!",
  "databaseStatus": "connected",
  "requestCount": 1
}
```

## Validate frontend

| Buoc | Lenh / thao tac | Ket qua mong doi | Trang thai |
| --- | --- | --- | --- |
| 1 | `cd frontend` | Di chuyen vao thu muc frontend | [ ] |
| 2 | `npm install` | Cai dependency thanh cong | [ ] |
| 3 | `npm start` | Angular chay tai `http://localhost:4200` | [ ] |
| 4 | Mo frontend tren browser | Man hinh hien thi message tu backend | [ ] |
| 5 | Refresh trang | Khong co loi console nghiem trong | [ ] |

## Validate tich hop

| Buoc | Thao tac | Ket qua mong doi | Trang thai |
| --- | --- | --- | --- |
| 1 | Chay backend va frontend cung luc | Hai service hoat dong on dinh | [ ] |
| 2 | Mo `http://localhost:4200` | Frontend goi duoc API backend | [ ] |
| 3 | Tat backend, refresh frontend | Frontend hien thi trang thai loi hop ly | [ ] |
| 4 | Bat lai backend, refresh frontend | Du lieu hien thi lai binh thuong | [ ] |

## Validate dang ky va dang nhap

| Buoc | Thao tac | Ket qua mong doi | Trang thai |
| --- | --- | --- | --- |
| 1 | Mo `http://localhost:4200` | Hien form dang nhap/dang ky | [ ] |
| 2 | Chon tab `Dang ky` | Form dang ky duoc hien thi | [ ] |
| 3 | Nhap username/password moi va submit | Hien `đã tạo tk đăng nhập thành công` | [ ] |
| 4 | Dang nhap dung username/password vua tao | Hien `Đã đăng nhập thành công` tai form | [ ] |
| 5 | Dang nhap sai password | Hien `tài khoản hoặc mật khẩu đã bị login sai xin vui lòng thử lại` | [ ] |
| 6 | Dang ky trung username | Hien thong bao tai khoan da ton tai | [ ] |

## Validate build

| Thanh phan | Lenh | Ket qua mong doi | Trang thai |
| --- | --- | --- | --- |
| Backend | `cd backend` sau do `mvn test` | Test backend pass | [ ] |
| Frontend | `cd frontend` sau do `npm run build` | Build frontend thanh cong | [ ] |

## Ghi chu loi

| Ngay | Loi gap phai | Nguyen nhan | Cach xu ly | Trang thai |
| --- | --- | --- | --- | --- |
| | | | | |

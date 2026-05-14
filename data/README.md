# Local Database

MySQL data duoc luu local trong:

```text
data/mysql/
```

Thu muc nay duoc ignore khoi Git vi chua file database runtime.

## Tai khoan duoc cap

| Muc | Gia tri |
| --- | --- |
| Database | `fullstack_db` |
| Username | `app_user` |
| Password | `app_password` |
| Root password | `root_password` |
| Host local | `localhost` |
| Port | `3306` |

## Tai khoan login mau

| Muc | Gia tri |
| --- | --- |
| Username | `demo` |
| Password | `123456` |

## Ket noi tu backend

Backend dang dung cau hinh:

```properties
DB_NAME=fullstack_db
DB_USERNAME=app_user
DB_PASSWORD=app_password
```

## Luu y

File `data/mysql-init/01-create-database-and-user.sql` chi tu dong chay khi MySQL khoi tao data folder moi.

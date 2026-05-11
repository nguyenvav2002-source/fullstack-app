# Angular + Spring Boot + MySQL Hello World

Project nay gom:

- `frontend`: Angular app goi API backend.
- `backend`: Spring Boot REST API ket noi MySQL.
- `docker-compose.yml`: chay MySQL va backend bang Docker.

## Chay nhanh

1. Chay database va backend:

```powershell
docker compose up --build
```

Backend se chay tai `http://localhost:8080`.

2. Chay frontend:

```powershell
cd frontend
npm install
npm start
```

Frontend se chay tai `http://localhost:4200` va hien thi message lay tu backend.

## Kiem tra API

```powershell
curl http://localhost:8080/api/hello
```

Ket qua mong doi:

```json
{
  "message": "Hello World from Angular + Spring Boot + MySQL!",
  "databaseStatus": "connected",
  "requestCount": 1
}
```

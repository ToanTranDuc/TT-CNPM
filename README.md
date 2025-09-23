# TT-CNPM
Đồ án FoodFast Delivery về chủ đề CI/CD và giám sát trên hệ thống 3 lớp
## Cấu trúc thư mục

- `backend/`: Source code backend (Node.js/Express, REST API, Prometheus metrics)
- `frontend/`: Source code frontend web (React.js)
- `infra/`: Docker Compose, Prometheus, Grafana
- `.github/workflows/`: CI/CD pipelines (GitHub Actions)

## Nhánh Git
- `main`: nhánh chính để release/demo
- `develop`: nhánh phát triển, merge code trước khi đưa lên main
- `feature/*`: nhánh cho từng chức năng nhỏ
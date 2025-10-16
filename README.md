# Monorepo Demo (Spring Boot + React)

This is a **minimal monorepo** with:
- `backend/`: Spring Boot (Java 21, Gradle)
- `frontend/`: React + Vite (TypeScript)
- GitHub Actions workflow that **only builds what changed** (backend and/or frontend).

## Quick start

### Backend
1) Install Java 21.
2) In `backend/`, generate wrapper once (locally): `gradle wrapper`
3) Then run: `./gradlew bootRun` (Windows: `gradlew.bat bootRun`)
4) Open http://localhost:8080/api/hello

### Frontend
1) Install Node 20+.
2) In `frontend/`: `npm i` then `npm run dev`
3) Open the URL Vite prints (usually http://localhost:5173)

> Tip: In production you can serve the built frontend from the backend or a static host.

## CI (GitHub Actions)
The workflow at `.github/workflows/monorepo.yml`:
- Detects changed paths using `dorny/paths-filter`
- Runs **backend** build only if `backend/**` changed
- Runs **frontend** build only if `frontend/**` changed
- If both changed, both jobs run
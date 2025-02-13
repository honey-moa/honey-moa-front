# node 버전 20.9를 베이스 이미지로 사용 (빌드 스테이지)
FROM node:20.9.0 as builder

ARG VITE_BASE_URL
ARG VITE_CHANGE_PW_URL
ARG VITE_API_KEY

ENV VITE_BASE_URL=${VITE_BASE_URL}
ENV VITE_CHANGE_PW_URL=${VITE_CHANGE_PW_URL}
ENV VITE_API_KEY=${VITE_API_KEY}

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 실제 배포용: Nginx 기반의 정적 파일 서버 (3000번 포트에서 동작)
FROM nginx:1.25.1-alpine3.17-slim

# 빌드 결과물을 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# 프론트 컨테이너용 Nginx 설정 파일 복사 (3000번 포트에서 서빙)
COPY ./nginx/client-default.conf /etc/nginx/conf.d/default.conf

# 3000번 포트를 노출
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
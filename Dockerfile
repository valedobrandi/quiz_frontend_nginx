FROM node:18-slim AS build

WORKDIR /app-frontend

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

FROM nginx:1.25.0-alpine AS production

COPY --from=build /app-frontend/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 5173

CMD [ "nginx", "-g", "daemon off;" ]

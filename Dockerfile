#STEP 1 BUILD PROJECT
FROM node:12.18.1-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

#STEP 2 
FROM nginx:1.19.0-alpine as production-stage
#RUN mkdir /app
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
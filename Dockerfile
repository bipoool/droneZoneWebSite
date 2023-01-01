FROM node:alpine as build

# Work Directory
WORKDIR '/app'

# Setup React App on the container
COPY . /app/
RUN npm install --silent

# Build the React App
RUN npm run build

# Setup Nginx on the container
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Fire Nginx
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]
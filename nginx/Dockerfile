FROM nginx:1.25-alpine

RUN rm /etc/nginx/conf.d/*

COPY ./nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80
EXPOSE 443

CMD [ "nginx", "-g", "daemon off;" ]

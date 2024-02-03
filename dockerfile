FROM nginx:latest

LABEL maintainer="1695415918@qq.com"

USER root

RUN apt-get -yq update
RUN apt-get install -y curl
RUN apt-get install -y git
RUN apt-get install -y vim

WORKDIR  /usr/share/nginx

EXPOSE 89

ADD /apps/monitoring-platform/dist/ /usr/share/nginx/monitoring

ADD ./default.conf /etc/nginx/conf.d/default.conf


RUN echo 'start nginx!'

CMD ["nginx", "-g", "daemon off;"]

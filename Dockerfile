FROM ubuntu
RUN apt update
RUN apt install apache2 -y
COPY * /var/www/html/
CMD ["/usr/sbin/apachectl","-D","FOREGROUND"]

private project, opened due GH politic reasons

Example of Docker batch for 2 php-based sites (yohoho.mvn & hohoho.mvn) with Nginx, MySQL and phpMyAdmin.

To start (Docker installed) in Terminal run in project root directory:
docker-compose up -d

phpMyAdmin available at localhost:8080
mysql users: root (password '123'), db_user ('456')

! important: add in hosts file:
127.0.0.1 yohoho.mvn
127.0.0.1 hohoho.mvn

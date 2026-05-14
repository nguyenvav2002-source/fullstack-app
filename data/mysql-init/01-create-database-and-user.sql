CREATE DATABASE IF NOT EXISTS fullstack_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'app_user'@'%' IDENTIFIED BY 'app_password';

GRANT ALL PRIVILEGES ON fullstack_db.* TO 'app_user'@'%';

FLUSH PRIVILEGES;

USE fullstack_db;

CREATE TABLE IF NOT EXISTS auth_users (
  id BIGINT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  UNIQUE KEY uk_auth_users_username (username)
);

INSERT INTO auth_users (username, password_hash, created_at)
VALUES (
  'demo',
  '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
  CURRENT_TIMESTAMP(6)
)
ON DUPLICATE KEY UPDATE username = username;

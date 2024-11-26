-- Si existe una base de datos con el nombre 'test', la elimina
DROP SCHEMA IF EXISTS `test`;

-- Crea la base de datos 'test'
CREATE SCHEMA IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `test`;

-- Crea la tabla 'users'
CREATE TABLE `users` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inserta algunos registros de ejemplo en la tabla 'users'
INSERT INTO `users` (`name`, `email`)
VALUES
    ('Juan Pérez', 'juan.perez@example.com'),
    ('María López', 'maria.lopez@example.com'),
    ('Carlos Sánchez', 'carlos.sanchez@example.com');

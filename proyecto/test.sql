-- Si existe una base de datos con el nombre 'test', la elimina
DROP SCHEMA IF EXISTS `test`;

-- Crea la base de datos 'test'
CREATE SCHEMA IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `test`;

-- Crea la tabla 'users'
CREATE TABLE `users` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `apellidos` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(15),
    `direccion` TEXT,
    `nacimiento` DATE,
    `genero` VARCHAR(10),
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inserción de registros
INSERT INTO `users` (`nombre`, `apellidos`, `email`, `telefono`, `direccion`, `nacimiento`, `genero`)
VALUES
    ('Juan', 'Pérez Diaz', 'juan@gmail.com', '5551234567', 'Calle Real 123', '1999-10-5', 'Masculino'),
    ('María', 'López Raz', 'maria@gmail.com', '5557654321', 'Avenida Siempre Viva ', '1985-11-11', 'Femenino'),
    ('Carlos', 'Sánchez Garcia', 'carlos@gmail.com', '5559876543', 'Boulevard Principal 53', '1992-05-22', 'Masculino');

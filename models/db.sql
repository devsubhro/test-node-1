CREATE TABLE `Books` (
    `id` INT NOT NULL AUTO_INCREMENT ,
    `title` VARCHAR(255) NOT NULL ,
    `author` VARCHAR(255) NOT NULL ,
    `year` INT NOT NULL ,
    `pages` INT NOT NULL ,
    `createdAt` DATE NOT NULL ,
    `updatedAt` DATE NOT NULL ,
PRIMARY KEY (`id`)) ENGINE = InnoDB;
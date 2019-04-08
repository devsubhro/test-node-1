CREATE TABLE `Books` (
    `id` INT NOT NULL AUTO_INCREMENT ,
    `title` VARCHAR(255) NOT NULL ,
    `author` VARCHAR(255) NOT NULL ,
    `year` INT NOT NULL ,
    `pages` INT NOT NULL ,
    `createdAt` DATE NOT NULL ,
    `updatedAt` DATE NOT NULL ,
PRIMARY KEY (`id`)) ENGINE = InnoDB;

ALTER TABLE `Books` 
CHANGE `title` `title` VARCHAR(255) CHARACTER SET utf16 COLLATE utf16_unicode_ci NOT NULL DEFAULT 'unknown title', 
CHANGE `author` `author` VARCHAR(255) CHARACTER SET utf16 COLLATE utf16_unicode_ci NOT NULL DEFAULT 'unknown auther', 
CHANGE `year` `year` INT(11) NOT NULL DEFAULT '0', 
CHANGE `pages` `pages` INT(11) NOT NULL DEFAULT '0';
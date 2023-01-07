DROP TABLE IF EXISTS `myTable`;

CREATE TABLE `myTable` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `isim` varchar(100) default NULL,
  `soyisim` varchar(100) default NULL,
  `tc` mediumint(11) default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `isimtotctable` (`isim`,`soyisim`,`tc`)
VALUES
  ("AHMET","KAYA","31313131313");

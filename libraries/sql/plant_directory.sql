-- backup of the entire plant_directory database

-- Dumping structure for table plant_directory.plantlist
CREATE TABLE IF NOT EXISTS `plantlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plantName` varchar(150) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `image_url` varchar(250) DEFAULT NULL,
  `imageLicence_url` varchar(250) DEFAULT NULL,
  `imageAuthor` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- Dumping data for table plant_directory.plantlist: ~500 rows (approximately)
/*!40000 ALTER TABLE `plantlist` DISABLE KEYS */;
INSERT INTO `plantlist` (`id`, `plantName`, `description`, `image_url`, `imageLicence_url`, `imageAuthor`) VALUES
	(1, 'Abelia Edward Goucher', 'Small late summer/autumn flowering shrub', '../images/1.jpg', 'https://creativecommons.org/licenses/by-sa/2.0/legalcode', 'Leanora (Ellie) Enking'),
	(2, 'Abelia grandiflora', 'Late summer flowering shrub with tubular white/pink flowers', '../images/2.jpg', 'https://creativecommons.org/licenses/by-sa/2.0/legalcode', 'Leanora (Ellie) Enking'),
	(3, 'Abelia grand. Francis Mason', 'Late summer flowering shrub, semi evergreen, pale pink flowers', '../images/3.jpg', 'https://creativecommons.org/licenses/by-sa/2.0/legalcode', 'cultivar413'),
	(4, 'Acanthus ', 'Spiky leaves and flower heads tinged mauve', '../images/4.jpg', 'https://creativecommons.org/licenses/by-sa/2.0/legalcode', 'Leanora (Ellie) Enking'),
	(5, 'Achillea Cloth of Gold', 'Tall perennial with flat heads of yellow flowers, loved by insects', '../images/5.jpg', 'https://creativecommons.org/licenses/by-sa/2.0/legalcode', 'Leanora (Ellie) Enking');
	
/*!40000 ALTER TABLE `plantlist` ENABLE KEYS */;


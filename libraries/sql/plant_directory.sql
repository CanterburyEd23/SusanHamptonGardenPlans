-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.6-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6333
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table plant_directory.plantlist
CREATE TABLE IF NOT EXISTS `plantlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plantName` varchar(150) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `careNotes` varchar(250) DEFAULT NULL,
  `image_url` varchar(250) DEFAULT NULL,
  `imageLicense_url` varchar(250) DEFAULT NULL,
  `imageAuthor` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- Dumping data for table plant_directory.plantlist: ~500 rows (approximately)
/*!40000 ALTER TABLE `plantlist` DISABLE KEYS */;
INSERT INTO `plantlist` (`id`, `plantName`, `description`, `careNotes`, `image_url`, `imageLicense_url`, `imageAuthor`) VALUES
	(1, 'Abelia Edward Goucher', 'Small late summer/autumn flowering shrub', 'Trim back any long rangy growth that flowered last year and shorten any longer stems', '../images/1.jpg', 'https://creativecommons.org/licenses/by-sa/2.0/legalcode', 'Leanora (Ellie) Enking'),
	(2, 'Abelia grandiflora', 'Late summer flowering shrub with tubular white/pink flowers', '../images/2.jpg', 'https://creativecommons.org/licenses/by-sa/2.0/legalcode', 'Leanora (Ellie) Enking'),
	(3, 'Abelia grand. Francis Mason', 'Late summer flowering shrub, semi evergreen, pale pink flowers', '../images/3.jpg', 'https://creativecommons.org/licenses/by-sa/2.0/legalcode', 'cultivar413'),
	(4, 'Acanthus ', 'Spiky leaves and flower heads tinged mauve', '../images/4.jpg', 'https://creativecommons.org/licenses/by-sa/2.0/legalcode', 'Leanora (Ellie) Enking'),
	(5, 'Achillea Cloth of Gold', 'Tall perennial with flat heads of yellow flowers, loved by insects', '../images/5.jpg', 'https://creativecommons.org/licenses/by-sa/2.0/legalcode', 'Leanora (Ellie) Enking');
	
/*!40000 ALTER TABLE `plantlist` ENABLE KEYS */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

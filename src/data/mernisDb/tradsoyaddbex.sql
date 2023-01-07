SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `adsoyadtrsorgu`;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `sh4re TR`
-- sh4re Bot Sorgu & sh4re

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `adsyadsorg`
--

CREATE TABLE `adsoyadtrsorgu` (
  `id` int(11) NOT NULL,
  `tc` bigint(11) NOT NULL,
  `ad` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `soyad` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `dogum_tarihi` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `cinsiyet` varchar(6) COLLATE utf8_turkish_ci NOT NULL,
  `owner` varchar(50) COLLATE utf8_turkish_ci NOT NULL
) AUTO_INCREMENT=1;

--
-- Tablo döküm verisi `adsoyadtrsorgu`
--
INSERT INTO `adsoyadtrsorgu` (`id`, `tc`, `ad`, `soyad`, `dogum_tarihi`, `cinsiyet`, `owner`) VALUES
(1, '11111111356', 'MUSTAFA', 'KOYUN', '23.6.2003', 'Erkek', '1  '),
(2, '11111111424', 'BERRİN', 'KURT', '21.8.2000', 'Kadın', '2  '),
(3, '11111111592', 'MUHAMMED ENES', 'ESEN', '3.2.2005', 'Erkek', '3  '),
(4, '11111111660', 'EYÜP DİYAR', 'SUNA', '23.2.2005', 'Erkek', '4  '),
(5, '11111111738', 'MUHAMMED BAHATTİN', 'AKIN', '24.3.2002', 'Erkek', '5  '),
(6, '11111111806', 'NESİM', 'LAÇİN', '16.1.2005', 'Erkek', '6  '),
(7, '11111111974', 'ASİL NİSA', 'SARUHANOĞLU', '22.3.2005', 'Kadın', '7  '),
(8, '11111112032', 'DİCLE', 'SEVEN', '24.7.2004', 'Kadın', '8  '),
(9, '11111112100', 'VEYSEL', 'SONGUR', '27.7.2003', 'Erkek', '9  '),
(10, '11111112278', 'MUHAMMED', 'İNALCAN', '21.6.2003', 'Erkek', '10  '),
(11, '11111112346', 'BERFİN', 'AĞAÇDELEN', '13.2.2005', 'Kadın', '11  '),
(12, '11111112414', 'ENES', 'KARACA', '1.3.2005', 'Erkek', '12  '),
(13, '11111112582', 'NAZLICAN', 'YETİŞ', '7.2.2005', 'Kadın', '13  '),
(14, '11111112650', 'MUHAMMED ALİ', 'BAŞKAN', '23.3.2005', 'Erkek', '14  '),
(15, '11111112728', 'KEMAL', 'YAZICIOĞLU', '4.3.2005', 'Erkek', '15  '),
(16, '11111112896', 'ONUR', 'ORAK', '4.3.2005', 'Erkek', '16  '),
(17, '11111112964', 'YUSUF İSLAM', 'YETİŞSİN', '16.2.2005', 'Erkek', '17  '),
(18, '11111113022', 'BARAN', 'TUNÇ', '12.3.2005', 'Erkek', '18  '),
(19, '11111113190', 'ÖMER FARUK', 'ALVER', '8.8.2000', 'Erkek', '19  '),
(20, '11111113268', 'ÖZLEM', 'NEHİR', '9.11.2000', 'Kadın', '20  '),
(21, '11111113336', 'RECEP', 'NEHİR', '28.8.2003', 'Erkek', '21  '),
(22, '11111113404', 'ÖMER', 'BAYKARA', '13.1.2003', 'Erkek', '22  '),
(23, '11111113572', 'MERYEM', 'KAYA', '6.1.2005', 'Kadın', '23  '),
(24, '11111113640', 'CEYLAN', 'KARAPINAR', '21.3.2005', 'Kadın', '24  '),
(25, '11111113718', 'MERVE', 'YILDIZ', '23.3.2005', 'Kadın', '25  '),
(26, '11111113886', 'EDANUR', 'URAKÇI', '13.8.2002', 'Kadın', '26  '),
(27, '11111113954', 'HİDAYET', 'GÜNDÜZ', '23.5.2003', 'Erkek', '27  '),
(28, '11111114180', 'AHMET', 'MUKAN', '24.3.2005', 'Erkek', '28  '),
(29, '11111114258', 'ŞÜKRAN', 'SİYAHLI', '25.2.2005', 'Kadın', '29  '),
(30, '11111114326', 'SÜLEYMAN', 'ALPHAN', '13.3.2005', 'Erkek', '30  ');
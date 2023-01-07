SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `yabanci`;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `sh4re`
-- sh4re Panel Sorgu & sh4re

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `yabanci`
--

CREATE TABLE `yabanci` (
  `id` int(11) NOT NULL,
  `TC` bigint(12) NOT NULL,
  `ADI` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `SOYADI` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `ANNE` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `ANNETC` bigint(12) NOT NULL,
  `BABA` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `CINSIYET` varchar(6) COLLATE utf8_turkish_ci NOT NULL,
  `MEDENI` varchar(15) COLLATE utf8_turkish_ci NOT NULL,
  `DOGUM` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `DOGUMYER` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `OLUM` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `ADRES` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `IL` varchar(100) COLLATE utf8_turkish_ci NOT NULL,
  `ILCE` varchar(100) COLLATE utf8_turkish_ci NOT NULL,
  `DISKAPI` varchar(100) COLLATE utf8_turkish_ci NOT NULL,
  `ICKAPI` varchar(100) COLLATE utf8_turkish_ci NOT NULL,
  `CADDE` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `MAHALLE` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `bucak` varchar(100) COLLATE utf8_turkish_ci NOT NULL,
  `koy` varchar(100) COLLATE utf8_turkish_ci NOT NULL,
  `author` varchar(100) COLLATE utf8_turkish_ci NOT NULL
) AUTO_INCREMENT=1;

--
-- Tablo döküm verisi `yabanci`
--

INSERT INTO `yabanci` (`id`, `TC`, `ADI`, `SOYADI`, `ANNE`, `ANNETC`, `BABA`, `CINSIYET`, `MEDENI`, `DOGUM`, `DOGUMYER`, `OLUM`, `ADRES`, `IL`, `ILCE`, `DISKAPI`, `ICKAPI`, `CADDE`, `MAHALLE`, `bucak`, `koy`, `sh4re`) VALUES
(1, 99000100346, 'ZINEB', 'HORRE', 'FOZIA', 0, 'HASSAN', '2', 'None', '1997-07-02T00:00:00', 'FAS', 'None', 'SÜMER MAH. ŞEHİT ER DAVUT BAŞ SK.  NO: 1S  İÇ KAPI NO: 72 ZEYTİNBURNU / İSTANBUL', 'İSTANBUL', 'ZEYTİNBURNU', '1S', '72', 'ŞEHİT ER DAVUT BAŞ SK.', 'SÜMER MAH.', 'MERKEZ', 'MERKEZ', 'sh4re_panel'),
(2, 99000100650, 'MENNATALLAH MOHAMED MAHMOUD YOUNES', 'MENNATALLAH MOHAMED MAHMOUD YOUNES', 'HEBA', 0, 'MOHAMED', '2', 'None', '2000-11-28T00:00:00', 'MISIR', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'sh4re_panel'),
(3, 99000100582, 'THOMAS', 'SCHOINAS', 'CHRISOULA', 0, 'CHRISTOS', '1', 'None', '1976-06-30T00:00:00', 'SERRES', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'sh4re_panel'),
(4, 99000100278, 'NINA', 'BUĞUR', 'NINA', 0, 'DMİTRİYEVNA', '2', 'None', '1978-08-17T00:00:00', 'RUSYA FEDERASYONU', 'None', 'ZEYTİNLİK MAH. UZUN SK.  NO: 13  İÇ KAPI NO: 2 NİZİP / GAZİANTEP', 'GAZİANTEP', 'NİZİP', '13', '2', 'UZUN SK.', 'ZEYTİNLİK MAH.', 'MERKEZ', 'MERKEZ', 'sh4re_panel'),
(5, 99000100414, 'MUSHTARIY', 'NURMANOVA', 'TAMARA', 0, 'BAHODIR', '2', 'None', '2010-02-28T00:00:00', 'ÖZBEKİSTAN', 'None', 'YAHYA KAHYA  MAH. ZEYTİN DALI SK.  NO: 33  İÇ KAPI NO: 4 BEYOĞLU / İSTANBUL', 'İSTANBUL', 'BEYOĞLU', '33', '4', 'ZEYTİN DALI SK.', 'YAHYA KAHYA  MAH.', 'MERKEZ', 'MERKEZ', 'sh4re_panel'),
(6, 99000100728, 'NASIBAKHON', 'KAMALOVA', 'KAROMAT', 0, 'SALAHIDIN', '2', 'None', '1972-06-07T00:00:00', 'KIRGIZİSTAN', 'None', 'YENİGÜN MAH. 1071/1 SK. MİRAY APT. SİTESİ MIRAY BLOK  NO: 3  İÇ KAPI NO: 5 MURATPAŞA / ANTALYA', 'ANTALYA', 'MURATPAŞA', '3', '5', '1071/1 SK.', 'YENİGÜN MAH.', 'MERKEZ', 'MERKEZ', 'sh4re_panel'),
(7, 99000100896, 'VİSAL', 'ABDURRAHMAN', 'TÜRKİYE', 0, 'İBRAHİM', '2', 'None', '1972-01-01T00:00:00', 'HAMA', '2020-03-03T00:00:00', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'sh4re_panel'),
(8, 99000101022, 'RİTAJ', 'AHMAD ALJASEM', 'BÜŞRA', 0, 'ABDULLAH', '2', 'None', '2018-09-29T00:00:00', 'ADAPAZARI', 'None', 'ARABACIALANI MAH. ASKILI SK.  NO: 12  İÇ KAPI NO: 1 SERDİVAN / SAKARYA', 'SAKARYA', 'SERDİVAN', '12', '1', 'ASKILI SK.', 'ARABACIALANI MAH.', 'MERKEZ', 'MERKEZ', 'sh4re_panel');
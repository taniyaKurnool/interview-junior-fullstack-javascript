-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 08. Jan 2024 um 23:02
-- Server-Version: 10.1.38-MariaDB
-- PHP-Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `citysearch`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `cityName` varchar(128) CHARACTER SET utf8 NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `cities`
--

INSERT INTO `cities` (`id`, `cityName`, `count`) VALUES
(1, 'Berlin', 523),
(2, 'Hamburg', 267),
(3, 'München', 899),
(4, 'Köln', 471),
(5, 'Frankfurt', 110),
(6, 'Stuttgart', 782),
(7, 'Düsseldorf', 315),
(8, 'Dortmund', 607),
(9, 'Essen', 990),
(10, 'Leipzig', 48),
(11, 'Bremen', 656),
(12, 'Dresden', 198),
(13, 'Hannover', 842),
(14, 'Nürnberg', 72),
(15, 'Duisburg', 999),
(16, 'Bochum', 366),
(17, 'Wuppertal', 625),
(18, 'Bielefeld', 888),
(19, 'Bonn', 753),
(20, 'Mannheim', 438),
(21, 'Karlsruhe', 3),
(22, 'Wiesbaden', 884),
(23, 'Münster', 500),
(24, 'Gelsenkirchen', 31),
(25, 'Augsburg', 208),
(26, 'Mönchengladbach', 716),
(27, 'Aachen', 60),
(28, 'Chemnitz', 927),
(29, 'Braunschweig', 54),
(30, 'Krefeld', 674),
(31, 'Halle', 183),
(32, 'Kiel', 281),
(33, 'Magdeburg', 800),
(34, 'Oberhausen', 916),
(35, 'Lübeck', 45),
(36, 'Erfurt', 139),
(37, 'Rostock', 867),
(38, 'Mainz', 477),
(39, 'Kassel', 663),
(40, 'Hagen', 36),
(41, 'Hamm', 965),
(42, 'Saarbrücken', 109),
(43, 'Moers', 977),
(44, 'Mülheim an der Ruhr', 422),
(45, 'Potsdam', 752),
(46, 'Ludwigshafen', 791),
(47, 'Oldenburg', 250),
(48, 'Leverkusen', 20),
(49, 'Osnabrück', 495),
(50, 'Solingen', 852),
(51, 'Heidelberg', 297),
(52, 'Herne', 63),
(53, 'Neuss', 947),
(54, 'Darmstadt', 904),
(55, 'Paderborn', 778),
(56, 'Regensburg', 532),
(57, 'Ingolstadt', 251),
(58, 'Würzburg', 822),
(59, 'Wolfsburg', 743),
(60, 'Ulm', 815),
(61, 'Göttingen', 909),
(62, 'Offenbach', 69),
(63, 'Bottrop', 877),
(64, 'Trier', 342),
(65, 'Recklinghausen', 629),
(66, 'Reutlingen', 991),
(67, 'Bremerhaven', 289),
(68, 'Koblenz', 524),
(69, 'Bergisch Gladbach', 685),
(70, 'Jena', 418),
(71, 'Remscheid', 571),
(72, 'Erlangen', 334),
(73, 'Siegen', 185),
(74, 'Hildesheim', 617),
(75, 'Salzgitter', 80),
(76, 'Cottbus', 693),
(77, 'Gera', 95),
(78, 'Kaiserslautern', 424),
(79, 'Witten', 847),
(80, 'Gütersloh', 318),
(81, 'Iserlohn', 152),
(82, 'Schwerin', 859),
(83, 'Hanau', 432),
(84, 'Düren', 567),
(85, 'Esslingen am Neckar', 14),
(86, 'Ludwigsburg', 283),
(87, 'Marl', 929),
(88, 'Lünen', 740),
(89, 'Velbert', 128),
(90, 'Minden', 373),
(91, 'Worms', 967),
(92, 'Konstanz', 684),
(93, 'Neumünster', 16),
(94, 'Norderstedt', 503),
(95, 'Delmenhorst', 743),
(96, 'Villingen-Schwenningen', 65),
(97, 'Bamberg', 248),
(98, 'Celle', 855),
(99, 'Rosenheim', 704),
(100, 'Wilhelmshavenig', 461);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

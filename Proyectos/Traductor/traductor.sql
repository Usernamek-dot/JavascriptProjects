-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2021 at 02:27 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `traductor`
--

-- --------------------------------------------------------

--
-- Table structure for table `inglesfrances`
--

CREATE TABLE `inglesfrances` (
  `Codigo` int(2) NOT NULL,
  `Ingles` varchar(255) NOT NULL,
  `Frances` varchar(255) NOT NULL,
  `Tipo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inglesfrances`
--

INSERT INTO `inglesfrances` (`Codigo`, `Ingles`, `Frances`, `Tipo`) VALUES
(1, 'Monday', 'Lundi ', 'Substantive'),
(2, 'Tuesday', 'Mardi', 'Substantive'),
(3, 'Wednesday', 'Mercredi', 'Substantive'),
(4, 'Thursday', 'Jeudi', 'Substantive'),
(5, 'Miss', 'Mademoiselle', 'Substantive'),
(6, 'Boy', 'Garçon', 'Substantive'),
(7, 'Man', 'Homme', 'Substantive'),
(8, 'Knife', 'Couteau', 'Substantive'),
(9, 'Table', 'Table', 'Substantive'),
(10, 'Chair', 'Chaise', 'Substantive');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inglesfrances`
--
ALTER TABLE `inglesfrances`
  ADD PRIMARY KEY (`Codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

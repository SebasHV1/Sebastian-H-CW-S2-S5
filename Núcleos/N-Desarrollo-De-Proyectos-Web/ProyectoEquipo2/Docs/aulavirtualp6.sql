-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: aulavirtualp6
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `ID_ADMIN` int(11) NOT NULL AUTO_INCREMENT,
  `UserAdmin` varchar(40) NOT NULL,
  `Contraseña` varchar(64) NOT NULL,
  `Sal` varchar(13) NOT NULL,
  `Pim` varchar(2) NOT NULL,
  PRIMARY KEY (`ID_ADMIN`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'SebasADMIN','67b313f30c81eed7e1b393db9821d678bdcce8a2ae2185a1d91c633f4e70e16b','62a0b23f6df66','Fh');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumno`
--

DROP TABLE IF EXISTS `alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumno` (
  `ID_Alumno` int(11) NOT NULL AUTO_INCREMENT,
  `NombreCompleto` varchar(40) NOT NULL,
  `ID_NumeroDeCuenta` int(9) NOT NULL,
  `Contrasena` varchar(64) NOT NULL,
  `Correo` varchar(40) NOT NULL,
  `Contacto` int(11) NOT NULL,
  `ID_Group` int(3) DEFAULT NULL,
  `Sal` varchar(13) NOT NULL,
  `Pim` varchar(2) NOT NULL,
  PRIMARY KEY (`ID_Alumno`),
  UNIQUE KEY `ID_NumeroDeCuenta` (`ID_NumeroDeCuenta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno`
--

LOCK TABLES `alumno` WRITE;
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnohasclases`
--

DROP TABLE IF EXISTS `alumnohasclases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumnohasclases` (
  `AHC` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Alumno` int(11) DEFAULT NULL,
  `ID_Clase` int(11) DEFAULT NULL,
  PRIMARY KEY (`AHC`),
  KEY `ID_Alumno` (`ID_Alumno`),
  KEY `ID_Clase` (`ID_Clase`),
  CONSTRAINT `alumnohasclases_ibfk_1` FOREIGN KEY (`ID_Alumno`) REFERENCES `alumno` (`ID_Alumno`),
  CONSTRAINT `alumnohasclases_ibfk_2` FOREIGN KEY (`ID_Clase`) REFERENCES `clases` (`ID_Clase`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnohasclases`
--

LOCK TABLES `alumnohasclases` WRITE;
/*!40000 ALTER TABLE `alumnohasclases` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumnohasclases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnohasrecordatorio`
--

DROP TABLE IF EXISTS `alumnohasrecordatorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumnohasrecordatorio` (
  `AHR` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Alumno` int(11) DEFAULT NULL,
  `Recordatorio` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`AHR`),
  KEY `ID_Alumno` (`ID_Alumno`),
  CONSTRAINT `alumnohasrecordatorio_ibfk_1` FOREIGN KEY (`ID_Alumno`) REFERENCES `alumno` (`ID_Alumno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnohasrecordatorio`
--

LOCK TABLES `alumnohasrecordatorio` WRITE;
/*!40000 ALTER TABLE `alumnohasrecordatorio` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumnohasrecordatorio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnohastareas`
--

DROP TABLE IF EXISTS `alumnohastareas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumnohastareas` (
  `AHT` int(11) NOT NULL AUTO_INCREMENT,
  `ID_ALUMNO` int(11) DEFAULT NULL,
  `ID_CLASE` int(11) DEFAULT NULL,
  `CHT` int(11) DEFAULT NULL,
  `Ruta_Entrega` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`AHT`),
  KEY `ID_ALUMNO` (`ID_ALUMNO`),
  KEY `ID_CLASE` (`ID_CLASE`),
  KEY `CHT` (`CHT`),
  CONSTRAINT `alumnohastareas_ibfk_1` FOREIGN KEY (`ID_ALUMNO`) REFERENCES `alumno` (`ID_Alumno`),
  CONSTRAINT `alumnohastareas_ibfk_2` FOREIGN KEY (`ID_CLASE`) REFERENCES `clases` (`ID_Clase`),
  CONSTRAINT `alumnohastareas_ibfk_3` FOREIGN KEY (`CHT`) REFERENCES `claseshastareas` (`CHT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnohastareas`
--

LOCK TABLES `alumnohastareas` WRITE;
/*!40000 ALTER TABLE `alumnohastareas` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumnohastareas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clases`
--

DROP TABLE IF EXISTS `clases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clases` (
  `ID_Clase` int(11) NOT NULL AUTO_INCREMENT,
  `NombreDClase` varchar(50) NOT NULL,
  `CODIGO` varchar(7) NOT NULL,
  `DESCRIPCION` varchar(240) NOT NULL,
  PRIMARY KEY (`ID_Clase`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clases`
--

LOCK TABLES `clases` WRITE;
/*!40000 ALTER TABLE `clases` DISABLE KEYS */;
/*!40000 ALTER TABLE `clases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `claseshastareas`
--

DROP TABLE IF EXISTS `claseshastareas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `claseshastareas` (
  `CHT` int(11) NOT NULL AUTO_INCREMENT,
  `ID_clase` int(11) DEFAULT NULL,
  `NombreTarea` varchar(50) NOT NULL,
  `Indicaciones_De_La_Tarea` varchar(240) NOT NULL,
  `Ruta_Archivo` varchar(200) DEFAULT NULL,
  `Fecha_De_Entrega` datetime NOT NULL,
  PRIMARY KEY (`CHT`),
  KEY `ID_clase` (`ID_clase`),
  CONSTRAINT `claseshastareas_ibfk_1` FOREIGN KEY (`ID_clase`) REFERENCES `clases` (`ID_Clase`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `claseshastareas`
--

LOCK TABLES `claseshastareas` WRITE;
/*!40000 ALTER TABLE `claseshastareas` DISABLE KEYS */;
/*!40000 ALTER TABLE `claseshastareas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moderador`
--

DROP TABLE IF EXISTS `moderador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `moderador` (
  `ID_Mod` int(11) NOT NULL AUTO_INCREMENT,
  `NombreCompleto` varchar(40) NOT NULL,
  `Contraseña` varchar(64) NOT NULL,
  `Sal` varchar(13) NOT NULL,
  `Pim` varchar(2) NOT NULL,
  PRIMARY KEY (`ID_Mod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moderador`
--

LOCK TABLES `moderador` WRITE;
/*!40000 ALTER TABLE `moderador` DISABLE KEYS */;
/*!40000 ALTER TABLE `moderador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntahasrespuesta`
--

DROP TABLE IF EXISTS `preguntahasrespuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preguntahasrespuesta` (
  `PHR` int(11) NOT NULL AUTO_INCREMENT,
  `ID_PREGUNTA` int(11) DEFAULT NULL,
  `ID_ALUMNO` int(11) DEFAULT NULL,
  `Respuesta` varchar(240) DEFAULT NULL,
  `ID_Profesor` int(11) DEFAULT NULL,
  PRIMARY KEY (`PHR`),
  KEY `ID_ALUMNO` (`ID_ALUMNO`),
  KEY `ID_Profesor` (`ID_Profesor`),
  KEY `ID_PREGUNTA` (`ID_PREGUNTA`),
  CONSTRAINT `preguntahasrespuesta_ibfk_1` FOREIGN KEY (`ID_ALUMNO`) REFERENCES `alumno` (`ID_Alumno`),
  CONSTRAINT `preguntahasrespuesta_ibfk_2` FOREIGN KEY (`ID_Profesor`) REFERENCES `profesor` (`ID_Profesor`),
  CONSTRAINT `preguntahasrespuesta_ibfk_3` FOREIGN KEY (`ID_PREGUNTA`) REFERENCES `preguntas` (`ID_PREGUNTA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntahasrespuesta`
--

LOCK TABLES `preguntahasrespuesta` WRITE;
/*!40000 ALTER TABLE `preguntahasrespuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `preguntahasrespuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preguntas` (
  `ID_PREGUNTA` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Alumno` int(11) DEFAULT NULL,
  `Pregunta` varchar(240) DEFAULT NULL,
  `ID_Profesor` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_PREGUNTA`),
  KEY `ID_Profesor` (`ID_Profesor`),
  KEY `ID_Alumno` (`ID_Alumno`),
  CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`ID_Profesor`) REFERENCES `profesor` (`ID_Profesor`),
  CONSTRAINT `preguntas_ibfk_2` FOREIGN KEY (`ID_Alumno`) REFERENCES `alumno` (`ID_Alumno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntas`
--

LOCK TABLES `preguntas` WRITE;
/*!40000 ALTER TABLE `preguntas` DISABLE KEYS */;
/*!40000 ALTER TABLE `preguntas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor`
--

DROP TABLE IF EXISTS `profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profesor` (
  `ID_Profesor` int(11) NOT NULL AUTO_INCREMENT,
  `NombreCompleto` varchar(40) NOT NULL,
  `ID_NumRFC` varchar(13) NOT NULL,
  `Contrasena` varchar(64) NOT NULL,
  `Contacto` int(11) NOT NULL,
  `Correo` varchar(40) NOT NULL,
  `ID_Asignatura` int(2) NOT NULL,
  `Sal` varchar(13) DEFAULT NULL,
  `Pim` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`ID_Profesor`),
  UNIQUE KEY `ID_NumeroDeRFC` (`ID_NumRFC`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor`
--

LOCK TABLES `profesor` WRITE;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesorhasclases`
--

DROP TABLE IF EXISTS `profesorhasclases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profesorhasclases` (
  `PHC` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Profesor` int(11) DEFAULT NULL,
  `ID_Clase` int(11) DEFAULT NULL,
  PRIMARY KEY (`PHC`),
  KEY `ID_Clase` (`ID_Clase`),
  KEY `ID_Profesor` (`ID_Profesor`),
  CONSTRAINT `profesorhasclases_ibfk_1` FOREIGN KEY (`ID_Clase`) REFERENCES `clases` (`ID_Clase`),
  CONSTRAINT `profesorhasclases_ibfk_2` FOREIGN KEY (`ID_Profesor`) REFERENCES `profesor` (`ID_Profesor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesorhasclases`
--

LOCK TABLES `profesorhasclases` WRITE;
/*!40000 ALTER TABLE `profesorhasclases` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesorhasclases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesorhasrecordatorios`
--

DROP TABLE IF EXISTS `profesorhasrecordatorios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profesorhasrecordatorios` (
  `PHR` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Profesor` int(11) DEFAULT NULL,
  `Recordatorio` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`PHR`),
  KEY `ID_Profesor` (`ID_Profesor`),
  CONSTRAINT `profesorhasrecordatorios_ibfk_1` FOREIGN KEY (`ID_Profesor`) REFERENCES `profesor` (`ID_Profesor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesorhasrecordatorios`
--

LOCK TABLES `profesorhasrecordatorios` WRITE;
/*!40000 ALTER TABLE `profesorhasrecordatorios` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesorhasrecordatorios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tablon`
--

DROP TABLE IF EXISTS `tablon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tablon` (
  `ID_TABLON` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Alumno` int(11) DEFAULT NULL,
  `Materia` varchar(40) DEFAULT NULL,
  `Descripcion` varchar(240) NOT NULL,
  `Material` varchar(200) DEFAULT NULL,
  `ID_Profesor` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_TABLON`),
  KEY `ID_Profesor` (`ID_Profesor`),
  KEY `ID_Alumno` (`ID_Alumno`),
  CONSTRAINT `tablon_ibfk_1` FOREIGN KEY (`ID_Profesor`) REFERENCES `profesor` (`ID_Profesor`),
  CONSTRAINT `tablon_ibfk_2` FOREIGN KEY (`ID_Alumno`) REFERENCES `alumno` (`ID_Alumno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tablon`
--

LOCK TABLES `tablon` WRITE;
/*!40000 ALTER TABLE `tablon` DISABLE KEYS */;
/*!40000 ALTER TABLE `tablon` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-09 14:00:56

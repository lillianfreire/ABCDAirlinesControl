CREATE DATABASE AircraftControl

USE AircraftControl

CREATE TABLE ModeloAeronave(
    CODE VARCHAR(4) NOT NULL PRIMARY KEY,
    ALTERNATIVE_CODE VARCHAR(4),
    MAX_DEPARTURE_WEIGHT DECIMAL(6,3) NOT NULL,
    MAX_LANDING_WEIGHT DECIMAL(6,3) NOT NULL
)

CREATE TABLE Aeronaves(
    PREFIX VARCHAR(6) NOT NULL PRIMARY KEY,
    MAX_DEPARTURE_WEIGHT DECIMAL(6,3) NOT NULL,
    MAX_LANDING_WEIGHT DECIMAL(6,3) NOT NULL,
    ACTIVE BOOLEAN NOT NULL,
    AIRCRAFT_MODEL VARCHAR(4) FOREIGN KEY REFERENCES ModeloAeronave(CODE) 
)
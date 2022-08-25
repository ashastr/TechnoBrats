DROP TABLE IF EXISTS Credential;
CREATE TABLE Credential (
id INT  PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
relationship_did VARCHAR(50) NOT NULL
);
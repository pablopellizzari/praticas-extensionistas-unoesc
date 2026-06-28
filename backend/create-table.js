// create-tables.js
import sql from "./db.js";
import '@neondatabase/serverless'


async function createTables() {
  try {
    console.log("⏳ Iniciando a criação das tabelas do Adota+...");

    await sql`
      CREATE TABLE IF NOT EXISTS ONG (
          ONG_CODIGO SERIAL PRIMARY KEY,
          ONG_NOME VARCHAR(255) NOT NULL,
          ONG_CNPJ VARCHAR(18) UNIQUE NOT NULL,
          ONG_APROVADA BOOLEAN NOT NULL,
          ONG_EMAIL VARCHAR(255) UNIQUE NOT NULL,
          ONG_CELULAR VARCHAR(20) NOT NULL,
          ONG_TELEFONE VARCHAR(20),
          ONG_ENDERECO VARCHAR(255) NOT NULL,
          ONG_SENHA VARCHAR(255) NOT NULL
      )`;

    await sql`
      CREATE TABLE IF NOT EXISTS USUARIO (
          USUARIO_CODIGO SERIAL PRIMARY KEY,
          USUARIO_TIPO VARCHAR(255) NOT NULL,
          USUARIO_NOME VARCHAR(255) NOT NULL,
          USUARIO_CPF VARCHAR(14) UNIQUE NOT NULL,
          USUARIO_DESC VARCHAR(255),
          USUARIO_DATANASC DATE NOT NULL,
          USUARIO_SEXO VARCHAR(255) NOT NULL,
          USUARIO_SENHA VARCHAR(255) NOT NULL,
          USUARIO_EMAIL VARCHAR(255) UNIQUE NOT NULL,
          USUARIO_CELULAR VARCHAR(20) NOT NULL,
          USUARIO_TELEFONE VARCHAR(20),
          USUARIO_ENDERECO VARCHAR(255) NOT NULL
      )`;

    await sql`
      CREATE TABLE IF NOT EXISTS PET (
          PET_CODIGO SERIAL PRIMARY KEY,
          PET_NOME VARCHAR(255) NOT NULL,
          PET_RACA VARCHAR(255),
          PET_DATANASC DATE NOT NULL,
          PET_COR VARCHAR(255),
          PET_VACINADO BOOLEAN,
          ONG_CODIGO INT NOT NULL,
          PET_SEXO VARCHAR(255) NOT NULL,
          PET_PORTE VARCHAR(255),
          PET_STATUS VARCHAR(50) NOT NULL,
          CONSTRAINT fk_pet_ong FOREIGN KEY (ONG_CODIGO) REFERENCES ONG (ONG_CODIGO) ON DELETE RESTRICT ON UPDATE CASCADE
      )`;

    await sql`
      CREATE TABLE IF NOT EXISTS ADOCAO (
          ADOCAO_CODIGO SERIAL PRIMARY KEY,
          ADOCAO_STATUS VARCHAR(40) NOT NULL,
          USUARIO_CODIGO INT NOT NULL,
          PET_CODIGO INT NOT NULL,
          ADOCAO_DATAC TIMESTAMP NOT NULL,
          ADOCAO_DATAF TIMESTAMP,
          CONSTRAINT fk_adocao_usuario FOREIGN KEY (USUARIO_CODIGO) REFERENCES USUARIO (USUARIO_CODIGO) ON DELETE RESTRICT ON UPDATE CASCADE,
          CONSTRAINT fk_adocao_pet FOREIGN KEY (PET_CODIGO) REFERENCES PET (PET_CODIGO) ON DELETE RESTRICT ON UPDATE CASCADE
      )`;

    console.log("Todas as tabelas foram criadas com sucesso!");
    
    // Encerra a conexão para o terminal não ficar travado
    process.exit(0); 

  } catch (err) {
    console.error("Erro ao criar as tabelas:", err);
    process.exit(1);
  }
}

createTables();
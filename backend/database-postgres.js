import { randomUUID } from "node:crypto";
import sql from "./db.js";

export class databasePostgres {
    async list() {
        let pets = await sql`select * from pet`

        return pets;
    }

    async create(petData) {
        const { petNome, petRaca, petDataNascimento, petCor, petVacinado, petSexo, petPorte, ongCodigo } = petData;

        await sql`insert into pet ( pet_nome, pet_raca, pet_datanasc, pet_cor, pet_vacinado, pet_sexo, pet_porte, ongCodigo ) 
          VALUES (${petNome}, ${petRaca}, ${petDataNascimento}, ${petCor}, ${petVacinado}, ${petSexo}, ${petPorte}, ${ongCodigo} )`;
    }

    async update(id, florData) {
        const { flor, imagem, cor, valor } = florData


        await sql`update flores set flor = ${flor}, imagem = ${imagem}, cor = ${cor}, valor = ${valor} WHERE id = ${id}`

    }

    async delete(id) {

        await sql`delete from flores where id = ${id}`
    }
}

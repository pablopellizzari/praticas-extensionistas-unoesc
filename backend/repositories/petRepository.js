import sql from "../db.js";

export class PetRepository {
  async list() {
    return await sql`select * from pet`;
  }

  async findById(id) {
    const [pet] = await sql`select * from pet where pet_codigo = ${id}`;
    return pet;
  }

  async create(petData) {
    const { petNome, petRaca, petDataNascimento, petCor, petVacinado, petSexo, petPorte, petStatus, ongCodigo } = petData;

    await sql`
      insert into pet (
        pet_nome,
        pet_raca,
        pet_datanasc,
        pet_cor,
        pet_vacinado,
        pet_sexo,
        pet_porte,
        pet_status,
        ong_codigo
      ) values (
        ${petNome},
        ${petRaca},
        ${petDataNascimento},
        ${petCor},
        ${petVacinado},
        ${petSexo},
        ${petPorte},
        ${petStatus},
        ${ongCodigo}
      )`;
  }

  async update(id, petData) {
    const { petNome, petRaca, petDataNascimento, petCor, petVacinado, petSexo, petPorte, petStatus, ongCodigo } = petData;

    await sql`
      update pet set
        pet_nome = ${petNome},
        pet_raca = ${petRaca},
        pet_datanasc = ${petDataNascimento},
        pet_cor = ${petCor},
        pet_vacinado = ${petVacinado},
        pet_sexo = ${petSexo},
        pet_porte = ${petPorte},
        pet_status = ${petStatus},
        ong_codigo = ${ongCodigo}
      where pet_codigo = ${id}`;
  }

  async delete(id) {
    await sql`delete from pet where pet_codigo = ${id}`;
  }
}

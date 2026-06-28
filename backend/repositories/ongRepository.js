import sql from "../db.js";

export class OngRepository {
  async list() {
    return await sql`select * from ong`;
  }

  async findById(id) {
    const [ong] = await sql`select * from ong where ong_codigo = ${id}`;
    return ong;
  }

  async create(ongData) {
    const { ongNome, ongCnpj, ongAprovada, ongEmail, ongCelular, ongTelefone, ongEndereco, ongSenha } = ongData;

    await sql`
      insert into ong (
        ong_nome,
        ong_cnpj,
        ong_aprovada,
        ong_email,
        ong_celular,
        ong_telefone,
        ong_endereco,
        ong_senha
      ) values (
        ${ongNome},
        ${ongCnpj},
        ${ongAprovada},
        ${ongEmail},
        ${ongCelular},
        ${ongTelefone},
        ${ongEndereco},
        ${ongSenha}
      )`;
  }

  async update(id, ongData) {
    const { ongNome, ongCnpj, ongAprovada, ongEmail, ongCelular, ongTelefone, ongEndereco, ongSenha } = ongData;

    await sql`
      update ong set
        ong_nome = ${ongNome},
        ong_cnpj = ${ongCnpj},
        ong_aprovada = ${ongAprovada},
        ong_email = ${ongEmail},
        ong_celular = ${ongCelular},
        ong_telefone = ${ongTelefone},
        ong_endereco = ${ongEndereco},
        ong_senha = ${ongSenha}
      where ong_codigo = ${id}`;
  }

  async delete(id) {
    await sql`delete from ong where ong_codigo = ${id}`;
  }
}

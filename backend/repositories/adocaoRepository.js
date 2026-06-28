import sql from "../db.js";

export class AdocaoRepository {
  async list() {
    return await sql`select * from adocao`;
  }

  async findById(id) {
    const [adocao] = await sql`select * from adocao where adocao_codigo = ${id}`;
    return adocao;
  }

  async create(adocaoData) {
    const { adocaoStatus, usuarioCodigo, petCodigo, adocaoDatac, adocaoDataf } = adocaoData;

    await sql`
      insert into adocao (
        adocao_status,
        usuario_codigo,
        pet_codigo,
        adocao_datac,
        adocao_dataf
      ) values (
        ${adocaoStatus},
        ${usuarioCodigo},
        ${petCodigo},
        ${adocaoDatac},
        ${adocaoDataf}
      )`;
  }

  async update(id, adocaoData) {
    const { adocaoStatus, usuarioCodigo, petCodigo, adocaoDatac, adocaoDataf } = adocaoData;

    await sql`
      update adocao set
        adocao_status = ${adocaoStatus},
        usuario_codigo = ${usuarioCodigo},
        pet_codigo = ${petCodigo},
        adocao_datac = ${adocaoDatac},
        adocao_dataf = ${adocaoDataf}
      where adocao_codigo = ${id}`;
  }

  async delete(id) {
    await sql`delete from adocao where adocao_codigo = ${id}`;
  }
}

import sql from "../db.js";

export class UsuarioRepository {
  async list() {
    return await sql`select * from usuario`;
  }

  async findById(id) {
    const [usuario] = await sql`select * from usuario where usuario_codigo = ${id}`;
    return usuario;
  }

  async create(usuarioData) {
    const { usuarioTipo, usuarioNome, usuarioCpf, usuarioDesc, usuarioDatanasc, usuarioSexo, usuarioSenha, usuarioEmail, usuarioCelular, usuarioTelefone, usuarioEndereco } = usuarioData;

    await sql`
      insert into usuario (
        usuario_tipo,
        usuario_nome,
        usuario_cpf,
        usuario_desc,
        usuario_datanasc,
        usuario_sexo,
        usuario_senha,
        usuario_email,
        usuario_celular,
        usuario_telefone,
        usuario_endereco
      ) values (
        ${usuarioTipo},
        ${usuarioNome},
        ${usuarioCpf},
        ${usuarioDesc},
        ${usuarioDatanasc},
        ${usuarioSexo},
        ${usuarioSenha},
        ${usuarioEmail},
        ${usuarioCelular},
        ${usuarioTelefone},
        ${usuarioEndereco}
      )`;
  }

  async update(id, usuarioData) {
    const { usuarioTipo, usuarioNome, usuarioCpf, usuarioDesc, usuarioDatanasc, usuarioSexo, usuarioSenha, usuarioEmail, usuarioCelular, usuarioTelefone, usuarioEndereco } = usuarioData;

    await sql`
      update usuario set
        usuario_tipo = ${usuarioTipo},
        usuario_nome = ${usuarioNome},
        usuario_cpf = ${usuarioCpf},
        usuario_desc = ${usuarioDesc},
        usuario_datanasc = ${usuarioDatanasc},
        usuario_sexo = ${usuarioSexo},
        usuario_senha = ${usuarioSenha},
        usuario_email = ${usuarioEmail},
        usuario_celular = ${usuarioCelular},
        usuario_telefone = ${usuarioTelefone},
        usuario_endereco = ${usuarioEndereco}
      where usuario_codigo = ${id}`;
  }

  async delete(id) {
    await sql`delete from usuario where usuario_codigo = ${id}`;
  }
}

import { UsuarioRepository } from "../repositories/usuarioRepository.js";

const usuarioRepository = new UsuarioRepository();

export async function usuarioRoutes(fastify) {
  fastify.post("/", async (request, reply) => {
    const usuarioData = request.body;

    await usuarioRepository.create(usuarioData);
    return reply.status(201).send();
  });

  fastify.get("/", async () => {
    return await usuarioRepository.list();
  });

  fastify.get("/:id", async (request, reply) => {
    const usuario = await usuarioRepository.findById(request.params.id);

    if (!usuario) {
      return reply.status(404).send({ error: "Usuário não encontrado" });
    }

    return usuario;
  });

  fastify.put("/:id", async (request, reply) => {
    const usuarioId = request.params.id;
    const usuarioData = request.body;

    await usuarioRepository.update(usuarioId, usuarioData);
    return reply.status(204).send();
  });

  fastify.delete("/:id", async (request, reply) => {
    await usuarioRepository.delete(request.params.id);
    return reply.status(204).send();
  });
}

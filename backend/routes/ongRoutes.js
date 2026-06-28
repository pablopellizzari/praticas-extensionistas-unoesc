import { OngRepository } from "../repositories/ongRepository.js";

const ongRepository = new OngRepository();

export async function ongRoutes(fastify) {
  fastify.post("/", async (request, reply) => {
    const ongData = request.body;

    await ongRepository.create(ongData);
    return reply.status(201).send();
  });

  fastify.get("/", async () => {
    return await ongRepository.list();
  });

  fastify.get("/:id", async (request, reply) => {
    const ong = await ongRepository.findById(request.params.id);

    if (!ong) {
      return reply.status(404).send({ error: "ONG não encontrada" });
    }

    return ong;
  });

  fastify.put("/:id", async (request, reply) => {
    const ongId = request.params.id;
    const ongData = request.body;

    await ongRepository.update(ongId, ongData);
    return reply.status(204).send();
  });

  fastify.delete("/:id", async (request, reply) => {
    await ongRepository.delete(request.params.id);
    return reply.status(204).send();
  });
}

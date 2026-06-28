import { AdocaoRepository } from "../repositories/adocaoRepository.js";

const adocaoRepository = new AdocaoRepository();

export async function adocaoRoutes(fastify) {
  fastify.post("/", async (request, reply) => {
    const adocaoData = request.body;

    await adocaoRepository.create(adocaoData);
    return reply.status(201).send();
  });

  fastify.get("/", async () => {
    return await adocaoRepository.list();
  });

  fastify.get("/:id", async (request, reply) => {
    const adocao = await adocaoRepository.findById(request.params.id);

    if (!adocao) {
      return reply.status(404).send({ error: "Adoção não encontrada" });
    }

    return adocao;
  });

  fastify.put("/:id", async (request, reply) => {
    const adocaoId = request.params.id;
    const adocaoData = request.body;

    await adocaoRepository.update(adocaoId, adocaoData);
    return reply.status(204).send();
  });

  fastify.delete("/:id", async (request, reply) => {
    await adocaoRepository.delete(request.params.id);
    return reply.status(204).send();
  });
}

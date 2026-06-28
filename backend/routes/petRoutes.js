import { PetRepository } from "../repositories/petRepository.js";

const petRepository = new PetRepository();

export async function petRoutes(fastify) {
  fastify.post("/", async (request, reply) => {
    const petData = request.body;

    await petRepository.create(petData);
    return reply.status(201).send();
  });

  fastify.get("/", async () => {
    return await petRepository.list();
  });

  fastify.get("/:id", async (request, reply) => {
    const pet = await petRepository.findById(request.params.id);

    if (!pet) {
      return reply.status(404).send({ error: "Pet não encontrado" });
    }

    return pet;
  });

  fastify.put("/:id", async (request, reply) => {
    const petId = request.params.id;
    const petData = request.body;

    await petRepository.update(petId, petData);
    return reply.status(204).send();
  });

  fastify.delete("/:id", async (request, reply) => {
    await petRepository.delete(request.params.id);
    return reply.status(204).send();
  });
}

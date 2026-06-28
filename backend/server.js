import { fastify } from "fastify";
import cors from "@fastify/cors";
import { ongRoutes } from "./routes/ongRoutes.js";
import { petRoutes } from "./routes/petRoutes.js";
import { usuarioRoutes } from "./routes/usuarioRoutes.js";
import { adocaoRoutes } from "./routes/adocaoRoutes.js";

const server = fastify();

await server.register(cors, { origin: true });
await server.register(ongRoutes, { prefix: "/ongs" });
await server.register(petRoutes, { prefix: "/pets" });
await server.register(usuarioRoutes, { prefix: "/usuarios" });
await server.register(adocaoRoutes, { prefix: "/adocoes" });

await server.listen({
    port: 3333
});
import fastifyCors from "@fastify/cors";
import { FastifyInstance } from "fastify";

export default (fastify: FastifyInstance) => {
	fastify.register(fastifyCors, {
		origin: "*",
		methods: ["GET", "POST", "PUT", "PATCH","DELETE"]
	});
};

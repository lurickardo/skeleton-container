import { FastifyReply, FastifyRequest } from "fastify";
import userService from "../service/user.service";

export default {
	findUser: async ({ params: { id } }, reply: FastifyReply) => {
		return reply.code(200).send(await userService.findUser(id));
	},
};

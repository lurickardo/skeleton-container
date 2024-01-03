import fastify from "fastify";
import routes from "./app.module";
import clusterize from "./clusterize";
import config from "./config";
import { registerPlugins } from "./plugins";

const server = fastify({
	logger: true,
});

async function bootstrap() {
	try {
		registerPlugins(server, config);
		server.register(routes, { prefix: config.stripPrefix.path });
		server.listen({ port: config.app.port || 3000 });
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
}

clusterize(bootstrap);
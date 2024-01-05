export const userSchema = {
	findById: {
		params: {
			type: "object",
			properties: {
				id: {
					type: "string",
				},
			},
			required: ["id"],
		},
		headers: {
			type: "object",
			properties: {
				Authorization: { type: "string" },
			},
			additionalProperties: true,
		},
	},
	create: {
		body: {
			type: "object",
			properties: {
				name: {
					type: "string",
				},
				email: {
					type: "string",
				},
			},
			required: ["name", "email"],
		},
	},
};

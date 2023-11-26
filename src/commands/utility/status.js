const { SlashCommandBuilder } = require("discord.js");
const { commands: { status } } = require("../../config.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("status")
		.setDescription("Checks the status of all systems."),
	async execute(interaction) {
		const response = "";

		for (const service in status.services) {
			const timeBeginning = Date.now();

			const isOnline = await fetch(service.url).then(r => r.ok ? true : false);

			const duration = (Date.now() - timeBeginning) / 1000;

			response.push(`${service.name} - ${isOnline} - ${duration}ms`);
		}

		await interaction.reply(response);
	},
};

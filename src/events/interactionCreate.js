const conf = require("../data/conf");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Formatters,
} = require("discord.js");
const { client } = require("../../app");

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  if (!interaction.inGuild()) return;

  const command = await client.commands.get(interaction.commandName);
  let permissions = command.options.perms;
  let cooldownconf = command.options.cooldown;
               if (
                client.cooldowns.has(
                  `${interaction.commandName}_${interaction.user.id}`
                )
              ) {
                const finish = client.cooldowns.get(
                  `${interaction.commandName}_${interaction.user.id}`
                );
                const date = new Date();
                const kalan = (
                  new Date(finish - date).getTime() / 1000
                ).toFixed(2);
                return interaction.reply({
                  content: `${interaction.user} hala bekleme süresindesin. Kalan: ${kalan} saniye.`,
                  ephemeral: true,
                });
              }
              const finish = new Date();
              finish.setSeconds(finish.getSeconds() + cooldownconf);
              try {
                await command
                  .execute(interaction)
                  .then(
                    console.info(
                      "📌[INTERACTION HANDLER] Command Used: " +
                        interaction.commandName +
                        " by " +
                        interaction.user.id
                    )
                  );
              } catch (error) {
                console.error(error);
                await interaction.reply({
                  content: `${interaction.user}, Err: ${error.message}`,
                  ephemeral: true,
                });
              }
              if (command.options.cooldown > 0) {
                client.cooldowns.set(
                  `${interaction.commandName}_${interaction.user.id}`,
                  finish
                );
                setTimeout(() => {
                  client.cooldowns.delete(
                    `${interaction.commandName}_${interaction.user.id}`
                  );
                }, command.options.cooldown * 1000);
              }
            });

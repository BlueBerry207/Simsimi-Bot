import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";
import { SlashCommand } from "../structure/SlashCommand";
import level from "../models/level";

export default new SlashCommand({
  name: "레벨",
  description: "심심이 나쁜말 레벨을 조정합니다.",
  args: [
    {
      name: "레벨",
      description: "조정을 레벨을 선택해주세요.",
      type: ApplicationCommandOptionType.String,
      choices: [
        {
          name: "순한맛",
          value: "1",
        },
        {
          name: "중간맛",
          value: "20",
        },
        {
          name: "매운맛",
          value: "100",
        },
        {
          name: "핵매운맛",
          value: "1000",
        },
      ],
    },
  ],

  async execute(interaction) {
    const rank = interaction.options.getString("레벨");
    const guild = await level.findOne({
      guildId: interaction.guild?.id,
    });
    const taste = new level({ guildId: interaction.guild?.id, level: rank });

    if (guild) {
      await level.findOneAndUpdate(
        { guildId: interaction.guild?.id },
        { level: rank }
      );
    } else {
      await taste.save();
    }
    if (rank == "1") {
      const low = new EmbedBuilder()
        .setColor("#f5e131")
        .setTitle("심심이")
        .setDescription("현재 심심이 말투 레벨: `순한맛`")
        .setThumbnail(
          "https://clova-phinf.pstatic.net/MjAxOTEyMTNfMjEx/MDAxNTc2MjIyMTAwNjAx.R0R93DP7d753hLA9Jic7GnF-s2eWxSkE_Sy9ZkJoZ3Ug.kt-pXBeobzjhkOIpLjd-0gkEtctw2pqPOkFOF9Uixrkg.PNG/image.png"
        )
        .setFooter({
          text: "Simsimi",
          iconURL:
            "https://upload.wikimedia.org/wikipedia/commons/c/c1/Simsimi_logo.png",
        });
      await interaction.reply({ embeds: [low] });
    }
    if (rank == "20") {
      const middle = new EmbedBuilder()
        .setColor("#f5e131")
        .setTitle("심심이")
        .setDescription("현재 심심이 말투 레벨: `중간맛`")
        .setThumbnail(
          "https://clova-phinf.pstatic.net/MjAxOTEyMTNfMjEx/MDAxNTc2MjIyMTAwNjAx.R0R93DP7d753hLA9Jic7GnF-s2eWxSkE_Sy9ZkJoZ3Ug.kt-pXBeobzjhkOIpLjd-0gkEtctw2pqPOkFOF9Uixrkg.PNG/image.png"
        )
        .setFooter({
          text: "Simsimi",
          iconURL:
            "https://upload.wikimedia.org/wikipedia/commons/c/c1/Simsimi_logo.png",
        });
      await interaction.reply({ embeds: [middle] });
    }
    if (rank == "100") {
      const spicy = new EmbedBuilder()
        .setColor("#f5e131")
        .setTitle("심심이")
        .setDescription("현재 심심이 말투 레벨: `매운맛`")
        .setThumbnail(
          "https://clova-phinf.pstatic.net/MjAxOTEyMTNfMjEx/MDAxNTc2MjIyMTAwNjAx.R0R93DP7d753hLA9Jic7GnF-s2eWxSkE_Sy9ZkJoZ3Ug.kt-pXBeobzjhkOIpLjd-0gkEtctw2pqPOkFOF9Uixrkg.PNG/image.png"
        )
        .setFooter({
          text: "Simsimi",
          iconURL:
            "https://upload.wikimedia.org/wikipedia/commons/c/c1/Simsimi_logo.png",
        });
      await interaction.reply({ embeds: [spicy] });
    }
    if (rank == "1000") {
      const hack = new EmbedBuilder()
        .setColor("#f5e131")
        .setTitle("심심이")
        .setDescription("현재 심심이 말투 레벨: `핵매운맛`")
        .setThumbnail(
          "https://clova-phinf.pstatic.net/MjAxOTEyMTNfMjEx/MDAxNTc2MjIyMTAwNjAx.R0R93DP7d753hLA9Jic7GnF-s2eWxSkE_Sy9ZkJoZ3Ug.kt-pXBeobzjhkOIpLjd-0gkEtctw2pqPOkFOF9Uixrkg.PNG/image.png"
        )
        .setFooter({
          text: "Simsimi",
          iconURL:
            "https://upload.wikimedia.org/wikipedia/commons/c/c1/Simsimi_logo.png",
        });
      await interaction.reply({ embeds: [hack] });
    }
  },
});

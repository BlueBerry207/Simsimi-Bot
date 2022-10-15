import { SlashCommand } from "../structure/SlashCommand";
import { EmbedBuilder, Guild } from "discord.js";
import rank from "../models/level";

export default new SlashCommand({
  name: "정보",
  description: "심심이가 접속된 서버의 심심이 정보를 확인합니다.",
  async execute(interaction) {
    const taste = await rank.findOne({ guildId: interaction.guild?.id });
    const level = taste?.level;

    if (level == "1") {
      const info = new EmbedBuilder()
        .setColor("#f5e131")
        .setTitle("심심이")
        .addFields(
          {
            name: "심심이가 접속한 서버",
            value: `${interaction.guild?.name}`,
            inline: true,
          },
          {
            name: "해당 서버 심심이 레벨",
            value: "`순한맛`",
            inline: true,
          }
        )
        .setThumbnail(
          "https://clova-phinf.pstatic.net/MjAxOTEyMTNfMjEx/MDAxNTc2MjIyMTAwNjAx.R0R93DP7d753hLA9Jic7GnF-s2eWxSkE_Sy9ZkJoZ3Ug.kt-pXBeobzjhkOIpLjd-0gkEtctw2pqPOkFOF9Uixrkg.PNG/image.png"
        )
        .setFooter({
          text: "Simsimi",
          iconURL:
            "https://upload.wikimedia.org/wikipedia/commons/c/c1/Simsimi_logo.png",
        });

      await interaction.reply({ embeds: [info] });
    }
    if (level == "20") {
      const info = new EmbedBuilder()
        .setColor("#f5e131")
        .setTitle("심심이")
        .addFields(
          {
            name: "심심이가 접속한 서버",
            value: `${interaction.guild?.name}`,
            inline: true,
          },
          {
            name: "해당 서버 심심이 레벨",
            value: "`중간맛`",
            inline: true,
          }
        )
        .setThumbnail(
          "https://clova-phinf.pstatic.net/MjAxOTEyMTNfMjEx/MDAxNTc2MjIyMTAwNjAx.R0R93DP7d753hLA9Jic7GnF-s2eWxSkE_Sy9ZkJoZ3Ug.kt-pXBeobzjhkOIpLjd-0gkEtctw2pqPOkFOF9Uixrkg.PNG/image.png"
        )
        .setFooter({
          text: "Simsimi",
          iconURL:
            "https://upload.wikimedia.org/wikipedia/commons/c/c1/Simsimi_logo.png",
        });

      await interaction.reply({ embeds: [info] });
    }
    if (level == "100") {
      const info = new EmbedBuilder()
        .setColor("#f5e131")
        .setTitle("심심이")
        .addFields(
          {
            name: "심심이가 접속한 서버",
            value: `${interaction.guild?.name}`,
            inline: true,
          },
          {
            name: "해당 서버 심심이 레벨",
            value: "`매운맛`",
            inline: true,
          }
        )
        .setThumbnail(
          "https://clova-phinf.pstatic.net/MjAxOTEyMTNfMjEx/MDAxNTc2MjIyMTAwNjAx.R0R93DP7d753hLA9Jic7GnF-s2eWxSkE_Sy9ZkJoZ3Ug.kt-pXBeobzjhkOIpLjd-0gkEtctw2pqPOkFOF9Uixrkg.PNG/image.png"
        )
        .setFooter({
          text: "Simsimi",
          iconURL:
            "https://upload.wikimedia.org/wikipedia/commons/c/c1/Simsimi_logo.png",
        });

      await interaction.reply({ embeds: [info] });
    }
    if (level == "1000") {
      const info = new EmbedBuilder()
        .setColor("#f5e131")
        .setTitle("심심이")
        .addFields(
          {
            name: "심심이가 접속한 서버",
            value: `${interaction.guild?.name}`,
            inline: true,
          },
          {
            name: "해당 서버 심심이 레벨",
            value: "`핵매운맛`",
            inline: true,
          }
        )
        .setThumbnail(
          "https://clova-phinf.pstatic.net/MjAxOTEyMTNfMjEx/MDAxNTc2MjIyMTAwNjAx.R0R93DP7d753hLA9Jic7GnF-s2eWxSkE_Sy9ZkJoZ3Ug.kt-pXBeobzjhkOIpLjd-0gkEtctw2pqPOkFOF9Uixrkg.PNG/image.png"
        )
        .setFooter({
          text: "Simsimi",
          iconURL:
            "https://upload.wikimedia.org/wikipedia/commons/c/c1/Simsimi_logo.png",
        });

      await interaction.reply({ embeds: [info] });
    }
  },
});

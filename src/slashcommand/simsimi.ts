import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";
import { SlashCommand } from "../structure/SlashCommand";
import axios from "axios";
import rank from "../models/level";

export default new SlashCommand({
  name: "심심아",
  description: "심심이랑 대화를 합니다.",
  args: [
    {
      name: "내용",
      description: "심심이 한테 질문할 내용을 입력해주세요.",
      type: ApplicationCommandOptionType.String,
    },
  ],
  async execute(interaction) {
    const text = interaction.options.getString("내용");
    const taste = await rank.findOne({ guildId: interaction.guild?.id });
    const level = taste?.level;
    await interaction.deferReply();

    async function simsim(text, level) {
      try {
        let res = await axios({
          url: "https://beta-bumcoming.simsimi.com/simtalk/get_talk_set",
          method: "POST",
          data: {
            av: "8.2.5",
            os: "a",
            lc: "ko",
            cc: "KR",
            tz: "Asia/Seoul",
            message: text,
            free_level: level,
          },
          headers: {
            Accept: "application/json, text/plain, */*",
            Authkey:
              "NTQwNzQwMTc2YzM5OTlhNmZkYThkNTAxNGUxMmM5NzlmOGY2MWU0ZTU1ODYxOTIxMThhY2QwYjM4ZTE2M2I5Ng",
            Os: "a",
            Av: "8.2.5",
            "Content-Type": "application/json",
            Host: "beta-bumcoming.simsimi.com",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/4.9.1",
          },
        });
        return { result: res.data.origin_sentence };
      } catch (e: any) {
        return { result: "error" };
      }
    }
    const result = await simsim(text, level);

    if (result.result === "error") {
      const conversation = new EmbedBuilder()
        .setColor("#f5e131")
        .setTitle("심심이")
        .addFields(
          {
            name: "질문",
            value: `${text}`,
            inline: true,
          },
          {
            name: "답변",
            value: `답변할 수 없는 질문이에요.`,
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

      await interaction.editReply({ embeds: [conversation] });
    } else {
      const conversation = new EmbedBuilder()
        .setColor("#f5e131")
        .setTitle("심심이")
        .addFields(
          {
            name: "질문",
            value: `${text}`,
            inline: true,
          },
          {
            name: "답변",
            value: `${result.result}`,
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

      await interaction.editReply({ embeds: [conversation] });
    }
  },
});

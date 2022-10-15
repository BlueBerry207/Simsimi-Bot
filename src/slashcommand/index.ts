import type { SlashCommand } from "../structure/SlashCommand";

import simsimi from "./simsimi";
import level from "./level";
import info from "./info";

const commands: Array<SlashCommand> = [simsimi, level, info];

export default commands;

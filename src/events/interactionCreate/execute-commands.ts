import { createInteractionCreateEventListener } from './index'
import commands from '../../slashcommand'


export default createInteractionCreateEventListener(interaction => {
	if (interaction.isChatInputCommand()) {
		for (const command of commands) {
			if (!command.isMine(interaction)) continue
			
			command.execute(interaction)
		}
	}
})

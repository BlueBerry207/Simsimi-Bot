import { AllEventListener } from '../structure/EventListener'

import interactionCreate from './interactionCreate'
import ready from './ready'

const events: Array<Array<AllEventListener>> = [
	interactionCreate,
	ready,
]

export default events

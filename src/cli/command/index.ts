import type { Command } from 'commander'

import { setupHelloCommand } from './hello'

export function setupCommand(program: Command) {
  setupHelloCommand(program)
}

import process from 'node:process'
import { program } from 'commander'
import { setupCommand } from './command'

export function main(): void {
  program
    .version('1.0.0')
    .description('A CLI tool to generate a report')

  setupCommand(program)

  program.parse(process.argv)
}

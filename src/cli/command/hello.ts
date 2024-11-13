import type { Command } from 'commander'
import chalk from 'chalk'
import ora from 'ora'

export function setupHelloCommand(program: Command) {
  program
    .command('hello')
    .option('-n, --name <name>', 'your name', 'bill')
    .description('Say hello.')
    .action((params) => {
      const reportSpinner = ora('await...').start()
      setTimeout(() => {
        console.log(chalk.bgBlue(`Hello, ${params}!`))
        reportSpinner.succeed(chalk.green(`Succeed.`))
      }, 3000)
    })
}

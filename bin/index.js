#!/usr/bin/env node

const program = require('commander');
const packgeJson = require('../package.json');
const figlet = require('figlet');
const chalk = require('chalk');
// 配置 config 命令
program
    .command('config [value]')
    .description('inspect and modify the config')
    .option('-g, --get <path>', 'get value from option')
    .option('-s, --set <path>')
    .option('-d, --delete <path>', 'delete option from config')
    .action((value,options) => {
        console.log(value,options)
    })
// 自定义help命令
program
    .on('--help',()=>{
        // 使用 figlet 绘制 Logo
        console.log('\r\n' + figlet.textSync('LAP',{
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }));
        //新增说明信息
        console.log(`\r\nRun ${chalk.cyan(`lap <command> --help`)} show details\r\n`)
    })

// 配置 ui 命令
program
    .command('ui')
    .description('start add open lap-cli ui')
    .option('-p, --port <port>', 'Port used for the UI Server')
    .action((options) => {
        console.log(options)
    })

program
    //设置版本号和版本描述
    .version(packgeJson.version,'-V --version')
    .description('output ther version number')
    .usage('<command> [option]')

program
    //定义命令和参数
    .command('create <app-name>')
    .description('create a new project')
    //-f or --force 为强制创建,如果创建的目录存在则直接覆盖
    .option('-f, --force','overwrite tartget if it exist')
    .action((name,options)=>{
        require('../lib/create')(name,options)
    })
    

program.parse(process.argv);
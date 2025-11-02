const fs=require("fs")
const path=require("path")
const {Command}=require("commander");
const { error } = require("console");

const program=new Command();

program
  .name('counter')
  .description('CLI to count words in file')
  .version('0.8.0');

program.command('count')
  .argument('<file>', 'file to count')
  .action((file)=>{
    const filePath=path.resolve(file);
    fs.readFile(filePath,'utf-8',(err,data)=>{
      if(err){
        console.log(err);
      }else{
        const lines=data.split('\n').length;
        console.log(`there are ${lines} lines in ${file}`);
      }
    })
  });
  program.parse()
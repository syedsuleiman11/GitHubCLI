import readline from "readline-sync"
import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";

console.log(chalk.green(boxen(chalk.blueBright(
  figlet.textSync("GitHub CLI", {
    
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
),{borderStyle:'double'})));


function UserDetails(){
    
    var github=readline.question(chalk.blueBright("👤 Enter Github Username: "));
    var email=readline.questionEMail(chalk.magentaBright("📧 Enter Email:"));
    var password=readline.question(chalk.red("🔒 Enter your password: "),{
            hideEchoBack: true
        });
    var fullname=readline.question(chalk.yellowBright("👦 Full Name:"));
     var bio=readline.question(chalk.green("📝 Short Bio:"));
    // console.log(github);
    // console.log(email);
    // console.log(password);
    // console.log(fullname);
    // console.log(bio);
    var person=(`${github}\n${email}\n${password}\n${fullname}\n${bio}`);
    
console.log(chalk.greenBright(boxen(chalk.cyanBright(person),{ borderStyle: 'double', title: 'User Details',titleAlignment:"center",textAlignment:"center",padding:2 })));
// console.log(boxen(email));
// console.log(boxen(password));
// console.log(boxen(fullname));
// console.log(boxen(bio));

}
UserDetails();
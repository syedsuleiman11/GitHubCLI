import readline from "readline-sync";
import chalk from "chalk";
import figlet from "figlet"
// function main(){
    // console.clear();
    // console.log("Hello")
    // let fname= readline.question("Enter your first name ?");
    // let lname= readline.question("Enter your last name");
    // let age= readline.questionInt("Enter your age");
    // let city=readline.question("Enter your city");
    // console.log("==============Instagram Login==============");
    // console.log(chalk.black ("Hello"))
    // let email=readline.questionEMail(chalk.bgYellowBright("Enter your email"));
    // let password=readline.question(chalk.bgGreenBright("Enter your password"),{
        // hideEchoBack: true
    // });
    // console.log(chalk.bgYellowBright("Email:",email,chalk.bgGreen"Password:",password)\\

    // console.log(chalk.bgYellowBright(email))


    // console.log("Name:",fname,lname,"Age:",age,"City:",city,"Email:",email);

// }

// main()

function cli(){
    console.log(
  figlet.textSync("Instagram Login!", {

    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);
    let username = readline.question(chalk.greenBright("Enter username"));
    let password = readline.question(chalk.bgRedBright("Enter your password"),{
        hideEchoback: true});
    
    let fullname=readline.question(chalk.bgGreenBright("🤪Full name"))
    let bio=readline.question(chalk.bgGreenBright("🤣Enter your bio"))
    console.log("your username");
    console.log("your password");
    console.log("your fullname");
    console.log("your bio");
}
cli();
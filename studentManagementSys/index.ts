import inquirer from "inquirer";
import chalk from "chalk";

let stInfo= await inquirer.prompt([{
    name:"studentName",
    message:chalk.blueBright("Enter your name your please"),
    type:"input",
    validate:function(input) {
        if(input.trim() !==""){
            return true
        }
        return chalk.greenBright("Please fill a valid name")
    },
},
{
   name:"course",
   message:chalk.blueBright("Select your respective course"),
   type:"list",
   choices:["Cloud computing","Generative AI","Metaverse","Blockchain"]
},
{
name:"payment",
message:chalk.blueBright("select the payment method"),
type:"list",
choices:["Bank Account","EasyPaisa","Jazzcash","cash"]
}])
if(stInfo.payment==="Bank Account"){
    let bankAcc=await inquirer.prompt({
        name:"password",
        message:chalk.greenBright("Enter your bank accoung Password here"),
        type:"input",
        validate:function(input) {
            if(input.trim() !==""){
                return true
            }
            return chalk.redBright( "Please enter the valid password")
        },
    })
    if(bankAcc.password == 4321 ){
        console.log(chalk.green(`your course is ${stInfo.course} and the fee of this course Rs:1000 has been detucted from your account `));
    }
    else {
        console.log(chalk.redBright("wrong password"));
    }
}
else if(stInfo.payment==="EasyPaisa"){
    let easyPaisa=await inquirer.prompt({
        name:"password",
        message:chalk.greenBright("Enter your easypaisa Password here"),
        type:"input",
        validate:function(input) {
            if(input.trim() !==""){
                return true
            }
            return chalk.redBright("Please enter the valid password")
        },
    })
    if(easyPaisa.password == 4321 ){
        console.log(chalk.greenBright(`your course is ${stInfo.course} and the fee of this course Rs:1000 has been detucted from your easypaisa account `));
    }
    else {
        console.log(chalk.redBright("wrong password"));
    }
}
else if(stInfo.payment=="Jazzcash"){
    let jazzCash=await inquirer.prompt({
        name:"password",
        message:chalk.greenBright("Enter your easypaisa Password here"),
        type:"input",
        validate:function(input) {
            if(input.trim() !==""){
                return true
            }
            return chalk.redBright("Please enter the valid password")
        },
    })
    if(jazzCash.password == 4321 ){
        console.log(chalk.greenBright(`your course is ${stInfo.course} and the fee of this course Rs:1000 has been detucted from your easypaisa account `));
    }
    else {
        console.log(chalk.redBright("wrong password"));
    }

}
else if(stInfo.payment=="cash"){
    console.log(chalk.greenBright(`Please visit the center and submit your course ${stInfo.course} fee Rs:1000 before closing date`));
    
}




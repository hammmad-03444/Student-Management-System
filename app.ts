import inquirer from 'inquirer'
class studnetInfo {
    name:string
    id:string
    course:string
    feeStatus:string
    feeAmount:number
    constructor(name:string,id:string,course:string,feeStatus:string,feeAmount:number) {
        this.name=name
        this.id=id
        this.course=course
        this.feeStatus=feeStatus
        this.feeAmount=feeAmount
    }
}
let baseId=10000
let studentsID=''
let continueEnrolment=true
let students:studnetInfo[]=[]
do {
    let enrollStatus=await inquirer.prompt({
        name:"ask1",
        message:"Please select a option",
        type:"list",
        choices:["create a account","show status"]
    })
    if (enrollStatus.ask1==="create a account") {
        let studentName=await inquirer.prompt({
            name:'askStuName',
            message:"Enter your name please",
            type:"input",
            validate: function (input) {
                if(input.trim()!==""){
                 return true}
                else{
                    return "\nPlease enter a valid name "
                }
            }

        })
        let studentToLower=studentName.askStuName.toLowerCase().toLowerCase()
        let studentNameCheck=students.map(obj=>obj.name)
        if(studentNameCheck.includes(studentToLower)===false){
            baseId++
            studentsID="STID"+baseId
            console.log(`\n Your account has been created`);
            
            console.log(`\n Welcome ${studentToLower}!!`);
            
            let course=await inquirer.prompt({
                name:"Course",
                message:"select your course",
                type:"list",
                choices:["Blockchain","GenAI","Metaverse"]
            })
            let fee=0
            let balance=10000
            switch (course.Course) {
                case "Blockchain":
                    fee= 5000
                    break;
                case "GenAI" :
                    fee=4500
                    break;
                    case "Metaverse":
                        fee=4800
                        break;
                default:
                    break;
            }
            let confirmCourse=await inquirer.prompt({
                name:"confirmCourse",
                message:`if you are sure to take ${course.Course}, so press y`,
                type:"confirm"
            })
            let feePaid=await inquirer.prompt({
                name:"isfeePaid",
                message:`press y to pay the fee of ${course.Course}` ,
                type:"confirm"
            })
            switch (feePaid.isfeePaid) {
                case true:
                  balance=balance-fee
                    break;
            
                default:
                    break;
            }
            if(confirmCourse.confirmCourse==true && feePaid.isfeePaid==true){
                let student=new studnetInfo(studentToLower,studentsID,course.Course,feePaid.isfeePaid,fee)
                students.push(student)
                console.log(`Congralutions ${studentToLower},You have enrolled in ${course.Course},Your ID number is ${studentsID}`);
                console.log(`\nYour fee status is ${feePaid.isfeePaid},your course fee ${fee} has been detucted from your account now your remaining balance is ${balance}`);
                console.log(`Please attest your id card from the center as soon as possible`);
                
                
        }}
        else{
            console.log(`This name is already taken`);
            
        }

    }
    else if(enrollStatus.ask1==="show status"){
        if (students.length!==0) {
            let studentidCheck=students.map(e =>e.name)

            let selectStudent=await inquirer.prompt({
                name:"ans",
                message:"Please enter your name",
                type:"input"
            })
            let foundStudent=students.find(student=>student.name===selectStudent.ans )
            console.log(foundStudent);
            
        }
        else{
            console.log("Record is empty");
            
        }
    }
    let userConfirm=await inquirer.prompt({
        name:"ans",
        message:"Do you want to continue",
        type:"confirm"
    })
    if(userConfirm.ans==false){
        continueEnrolment=false
    }
    
} while (continueEnrolment);
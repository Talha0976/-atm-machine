import inquirer from "inquirer"
let myBalance = 5000;
let pin = 7090;

async function promptPin() {
  let pinAnswer = await inquirer.prompt([
    {
      name: "Pin",
      message: "Enter your Pin",
      type: "number",
    }
  ]);

  console.log(pinAnswer);
  
  if (pinAnswer.Pin === pin) {
    console.log("Your Pin is Correct");
    let operationAns =await inquirer.prompt([
       { 
        name:'operation',
        message:'Please select option',
        type:'list',
        choices:["withdraw","Fast Cash","chech balance"],
     } ]);
    //if user select withdraw
    if(operationAns.operation==="withdraw") {
        let amountAns=await inquirer.prompt([
            {
            name:"amount",
            message:"Enter your amount",
            type:"number",

  }])
  if (amountAns.amount<=myBalance){
    let balance=myBalance-amountAns.amount;
    console.log('The remaining balance is $(balance)');
  }
  else {
    console.log('You have insufficient Balance.');
  }
    }   
    // if user select fast cash
    else if(operationAns.operation==="Fast Cash"){
        let FastcashAns= await inquirer.prompt(
            [
                {
                    name:"amount",
                    type:"list",
                    choices:['1000','3000','5000','2000'],

        }]);
        if (FastcashAns.amount<=myBalance){
            let balance2=myBalance- FastcashAns.amount;
            console.log('The remaining balance is ${balance2}');

        }else{
            console.log('You have insufficient Balance');
        }

    }
    else if(operationAns.operation==="check balance"){
        console.log(myBalance);
    }

    
  } else {
    console.log("Your Pin is Wrong. Please! Enter correct Pin");
  }
}

promptPin();

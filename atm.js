let userAccountBalance = 20000
const readline=require("readline-sync") 
console.log("Insert your card : ")
console.log("your card insert successfully")
let language=readline.question("Enter your language :")
if (language == "english"){
    let pin = readline.questionInt("Enter your  pin number: ")
    if (pin === 123){
        console.log("Your pin is correct")
        let account=readline.question("enter the account type:   ")
        if (account=="saving account"){
            let purpuse = readline.question("what you wants to do   1.debit, 2.credit,3.send money to auther account,4.check:   ")
            if (purpuse == "debit"){
                let amount = readline.questionInt("Enter the amount:  ")
                if (amount<=10000){
                    console.log("transaction is complited")
                    let userCheakAccountBalance = readline.question("Do you want to cheak you current account balance:  ")
                    if (userCheakAccountBalance == "y"){
                        console.log("Your privious account balance: ",userAccountBalance)
                        console.log("Your currant balance: ",userAccountBalance - amount)
                    }
                    else{
                        console.log("thank you for visiting")
                    }
                }
                else{
                    console.log("You can do debit money above of 10000 at one time")
                }
                
            }
            else if (purpuse == "credit"){
                let useCredit = readline.questionInt("Enter the amount you wants to credit in your account:  ")
                if (useCredit<=10000){
                    console.log("Your amount credit successfully in your account")
                    let userCheakAccountBalance = readline.question("Do you want to cheak you current account balance:  ")
                    if (userCheakAccountBalance == "y"){
                        console.log("Your privious account balance: ",userAccountBalance)
                        console.log("Your currant balance: ",userAccountBalance + useCredit)
                    }
                    else{
                        console.log("thank you for visiting")
                    }    
                }else{
                    console.log("you can't credit more than 10000")
                }
            }
            else if (purpuse == "send money to auther account")
                let sendMoneyAutherAccount = readline.questionInt("Enter the amount you wants to send in auther account")
                if (sendMoneyAutherAccount<=10000){
                    console.log("Your money sended successfully")
                    let userCheakAccountBalance = readline.question("Do you want to cheak you current account balance:  ")
                    if (userCheakAccountBalance == "y"){
                        console.log("Your privious account balance: ",userAccountBalance)
                        console.log("Your currant balance: ",userAccountBalance - sendMoneyAutherAccount)}
                    else{
                        console.log("thank you for visiting")
                    }
                }else{
                    console.log("you can't  send more than 10000",userAccountBalance)
                }
            }
        
            else{
                console.log("your account balance is",userAccountBalance) 
            }
         
        }
        else{
            console.log("That ATM woring only for saving account")
        }
    
    }    
    else{
        console.log("Your pin is incorrent")
    }
}
else{
    console.log("auther language is not allowed")
}



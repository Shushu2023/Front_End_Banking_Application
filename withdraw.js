function Withdraw(){
 
 //============================for use without styles
    // const ctx=React.useContext(UserContext);//access UserContext createdf in context.js
    // return(
    //     <h1>Withdraw<br/>
    //         {JSON.stringify(ctx)}
    //     </h1>
    // );
    //===========================================================
    //===========using bootstrap styles=====================
    //=======================================================
     //create states 
     const [show, setShow] = React.useState(true);
     const [status, setStatus] = React.useState('');
     const [withdraw, setWithdraw] = React.useState('');
     const [balance, setBalance]=React.useState('100');
     const [newBalance, setNewBalance]=React.useState(100);
     const [successMessage, setSuccessMessage] = React.useState('');


     // accsess user context
     const ctx = React.useContext(UserContext);
    
     const isFormComplete = () => {
        return  withdraw !== '';
      };

     
 
     //the validation function used to validate the form fields
     //depending on whether the field was validated or not return true or false
     function validate(field,label){
         //if the field is empty
         if(!field){
             setStatus('Error: must enter amount to '+label);
             setTimeout(()=>setStatus(''),3000);
             return false;
         }
         //if amount entered is negative
         if(field <0){
            setStatus('Error: '+ label + ' amount cannot be negative');
            setTimeout(()=>setStatus(''),3000);
            return false;
        }


        //if the amount withdrawn is greater than the available balance
        if(field> newBalance){
            setStatus('Error: transaction failed');
            setTimeout(()=>setStatus(''),3000);
           // alert('transaction failed')
          // setSuccessMessage(`transaction failed`);
            return false;

        }
        //if amount entered is not a number
  
         if (isNaN(+field)) {
                 alert("enter numberical values only");
                 setSuccessMessage(`enter numberical values only`);
                 return false;
        } 
        setStatus(`Withdrawal of $${withdraw} successful!`);
         return true;
         
     }
 
     // the function that gets called when the Withdraw button is clicked
     function handleWithdraw(){
         console.log(withdraw);
         
         if(!validate(withdraw,    'withdraw'))      return;// if not validated return 
         
         //if the validations pass
         console.log(ctx.users);
         //calculate the new balance after withdrowal
         let theNewBalance =parseFloat(balance) - parseFloat(withdraw);
          setNewBalance(theNewBalance);
          console.log(newBalance);
          setBalance(theNewBalance);
          console.log('the updated old balance is '+balance);
          setWithdraw('');
          //alert("Success"); //desplay alert box when account is created
         // setSuccessMessage(`Withdrawal of $${withdraw} successful!`);
          // push a new user to our userContext
       ctx.users.push({withdraw,balance: newBalance});
         setShow(false); // set show to false to hide the initial form and give the option to add another user
     }
     //the functions that get called when the add another account button is clicked
     // to reset the values of the name, email and password and show the the initail form
     function clearForm(){
        if(!validate(withdraw,    'withdraw'))      return;
        handleWithdraw();
        //alert("Success"); //desplay alert box when when withrawal is successful
        setSuccessMessage(`Withdrawal of $${withdraw} successful!`);
         setWithdraw('');//clears the withdraw field of the form
         setShow(true);//reset the show state variable
         setSuccessMessage('');
     }
     //return the bootstrap card with forms based on the show state
     return(
         <Card
             bgcolor="primary" // set the  background color of the form
             header = "Withdraw" // set the header of the card
             status={status}//pass the status based on the actions that are taken
             body={show ? (
                 //begining of first form
                    <>  
                         Balance       {balance} $<br/><br/><br/>
                             
                            
                         WITHDRAW AMOUNT <br/>
                             <input
                                  className="form-control" //from bootstrap
                                  id="withdraw"
                                  placeholder="Withdraw Amount"
                                  value={withdraw} // gets evaluated from the state variable
                                  onChange={e => setWithdraw(e.currentTarget.value)}
                             />
                             <br/>
                             <br/>
                             <br/>
                             <br/>
                        
                         <button type="submit"
                                 className="btn btn-light"
                                 onClick= {handleWithdraw}
                                 disabled={!isFormComplete()}
                         >Withdraw</button><br/>
                         {/* {successMessage && <div>{successMessage}</div>} */}  
                    </> //end of first form
                    
             ):(
                 //beginning of second form which will show when the first form is submitted successfully 
                 <>
                  {/*<h5>Success</h5> */}
                 Balance       {balance} $<br/><br/><br/>
                             
                            
                             WITHDRAW AMOUNT<br/>
                                 <input
                                      className="form-control" //from bootstrap
                                      id="withdraw"
                                      placeholder="Withdraw Amount"
                                      value={withdraw} // gets evaluated from the state variable
                                      onChange={e => setWithdraw(e.currentTarget.value)}
                                 />
                                 <br/>
                                 <br/>
                                 <br/>
                                 <br/>
                 <button type="submit"
                         className="btn btn-light"
                         disabled={!isFormComplete()}
                         onClick={clearForm}>Withdraw  another amount</button><br/>
                        {/*{successMessage && <div>{successMessage}</div>}*/}

                 </> //end of second form
                
 
             )} //depending on what the value of show is show one form or the other
 
         />
 
 
     )
 
}
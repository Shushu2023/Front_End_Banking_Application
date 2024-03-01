function Deposit(){

    //===================for use without styling================
    // const ctx=React.useContext(UserContext);//access UserContext createdf in context.js
    // return(
    //     <h1>Deposit<br/>
    //         {JSON.stringify(ctx)}
    //     </h1>
    // );

    //===========================================================
      // accsess user context
      const ctx = React.useContext(UserContext);
    //=========a bootstrap styled  card //create states 
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [deposit,setDeposit] = React.useState('');
    const [balance, setBalance]=React.useState(100);
    const[newBalance, setNewBalance]=React.useState();
  
    const isFormComplete = () => {
        return deposit !== '' ;
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
        //if deposit is negative
        if(field<0){
            setStatus('Error: '+label +' must be positive numbers only');
            alert('enter positive numbers only');
            setTimeout(()=>setStatus(''),3000);
            return false;
        }

         //if amount entered is not a number
  
         if (isNaN(+field)) {
            alert("enter numberical values only");
            setStatus('Error: '+label +' must be numberical values only');
            return false;
   } 
        setStatus(`Deposit of $${deposit} successful!`);
        return true;
        
    }

    // the function that gets called when the Deposit button is clicked
    //let newBalance;
    function handleDeposit(){
        console.log(deposit);
        if(!validate(deposit,    'deposit'))      return;

        let theNewBalance =parseFloat(balance+0) + parseFloat(deposit);
        setNewBalance(theNewBalance);
         console.log(newBalance);
         setBalance(theNewBalance);
         console.log('the updated old balance is '+balance);
         setDeposit('');

        // if all validation pass push a new user to our userContext
       // ctx.users.push({deposit,balance:100});
       ctx.users.push({deposit,balance: newBalance});
        setShow(false); // set show to false to hide the initial form and give the option to add another user
    }
    //the functions that get called when the add another account button is clicked
    // to reset the values of the name, email and password and show the the initail form
    function clearForm(){
       setDeposit('');//clears the password field of the form
       //setShow(true);//reset the show state variable
       handleDeposit();
    }
    //return the bootstrap card with forms based on the show state
    return(
        <Card
            bgcolor="success" // set the  background color of the form
            txtcolor="black"
            header = "DEPOSIT " // set the header of the card
            status={status}//pass the status based on the actions that are taken
            body={show ? (
                //begining of first form
                   <>  
                       BALANCE      {balance}          $<div id="updatedBalance"></div><br/><br/><br/>
                         
                        
                        DEPOSIT AMOUNT<br/><br/><br/>
                            <input
                                 className="form-control" //from bootstrap
                                 id="deposit"
                                 placeholder="Deposit Amount"
                                 value={deposit} // gets evaluated from the state variable
                                 onChange={e => setDeposit(e.currentTarget.value)}
                            />
                            <br/>
                        <button type="submit"
                                className="btn btn-light"
                                disabled={!isFormComplete()}
                                onClick= {handleDeposit}
                        >DEPOSIT</button>   
                   </> //end of first form
            ):(
                //beginning of second form which will show when the first form is submitted successfully 
                <>
                {/*<h5>Success</h5>*/}
                BALANCE      {newBalance}         $<div id="updatedBalance"></div><br/><br/><br/>
                 
                DEPOSIT AMOUNT<br/><br/><br/>
                            <input
                                 className="form-control" //from bootstrap
                                 id="deposit"
                                 placeholder="Deposit Amount"
                                 value={deposit} // gets evaluated from the state variable
                                 onChange={e => setDeposit(e.currentTarget.value)}
                            />
                            <br/>
                         
                <button type="submit"
                        className="btn btn-light"
                        disabled={!isFormComplete()}
                        onClick={clearForm}>DEPOSIT</button>
                </> //end of second form

            )} //depending on what the value of show is show one form or the other

        />


    )

    
}
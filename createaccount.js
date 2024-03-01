
function CreateAccount(){
    //===========code to test if the context is working===========
    // const ctx=React.useContext(UserContext);//access UserContext createdf in context.js
    // return(
    //     <h1>CreateAccount<br/>
    //         {JSON.stringify(ctx)}
    //     </h1>
    // );
    //=========================================================
    //==========code to display a form using bootstrap  styles
    //==========================================================
    //create states 
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password, setPassword]=React.useState('');
    const[isButtonEnabled,setIsButtonEnabled]=React.useState('');
    // accsess user context
    const ctx = React.useContext(UserContext);

        const isFormComplete = () => {
            // Check if all required form fields are filled
            return name !== '' && email !== '' && password !== '';
          };
    

    //the validation function used to validate the form fields
    //depending on whether the field was validated or not return true or false
    function validate(field,label){
        //if the field is empty
        if(!field){
            setStatus('Error: '+label);
            setTimeout(()=>setStatus(''),3000);
            return false;
        }
        setStatus(`${name}  account successfully created`);
        return true;    
    }
   
    // the function that gets called when the create account button is clicked
    function handleCreate(){
       // e.preventDefault();
        console.log("button clicked");
        console.log(name,email,password);
        if(!validate(name,    'name'))    return;
        if(!validate(email,    'email'))      return;
        if(!validate(password,    'password'))      return;
        // if all validation pass push a new user to our userContext
        ctx.users.push({name,email,password,balance:100});
        alert("success"); //desplay alert box when account is created
        setShow(false); // set show to false to hide the initial form and give the option to add another user
        setName('');//clears the name field in the form
        setEmail('');//clears the email field of the form
        setPassword('');//clears the password field of the form
        
    
    
    }
    //the functions that get called when the add another account button is clicked
    // to reset the values of the name, email and password and show the the initail form
    function clearForm(){
        console.log(name,email,password);
        if(!validate(name,    'name'))      return;
        if(!validate(email,    'email'))      return;
        if(!validate(password,    'password'))      return;
        handleCreate();
        alert("Success"); //desplay alert box when account is created
        setName('');//clears the name field in the form
        setEmail('');//clears the email field of the form
        setPassword('');//clears the password field of the form
        setShow(true);//reset the show state variable
    }


    //return the bootstrap card with forms based on the show state
    return(
        
        <Card
            bgcolor="primary" // set the  background color of the form
            header = "CREATE ACCOUNT" // set the header of the card
            status={status}//pass the status based on the actions that are taken
            body={show ? (
                //begining of first form
                   <>  
                        Name<br/>
                             <input  type="input" 
                                className="form-control" //from bootstrap
                                id="name"
                                placeholder="Enter name"
                                value={name} // gets evaluated from the state variable
                                onChange={e => setName(e.currentTarget.value)}
                            />
                            <br/>
                        Email address<br/>
                            <input
                                 className="form-control" //from bootstrap
                                 id="email"
                                 placeholder="Enter email"
                                 value={email} // gets evaluated from the state variable
                                 onChange={e => setEmail(e.currentTarget.value)} 
                            />
                            <br/>
                        Password<br/>
                            <input
                                 className="form-control" //from bootstrap
                                 id="password"
                                 placeholder="Enter password"
                                 value={password} // gets evaluated from the state variable
                                 onChange={e => setPassword(e.currentTarget.value)}
                               //  onChange={handleOnChange(e.currentTarget.value)}
                            />
                            <br/>
                        <button type="submit"
                                id="createAccountButton"
                                className="btn btn-light"
                                disabled={!isFormComplete()}
                                onClick= {handleCreate}
                        >CREATE ACCOUNT</button>   
                   </> //end of first form
            ):(
                //beginning of second form which will show when the first form is submitted successfully 
                <>
                {/*<h5>Success</h5>*/}
               <br/>
                            
                             <input  type="input" 
                                className="form-control" //from bootstrap
                                id="name2"
                                placeholder="NAME"
                                value={name} // gets evaluated from the state variable
                                onChange={e => setName(e.currentTarget.value)}
                            />
                            <br/>
                            <br/>
                            <input
                                 className="form-control" //from bootstrap
                                 id="email2"
                                 placeholder="EMAIL"
                                 value={email} // gets evaluated from the state variable
                                 onChange={e => setEmail(e.currentTarget.value)}
                            />
                            <br/>
                            <br/>
                            <input
                                 className="form-control" //from bootstrap
                                 id="password2"
                                 placeholder="PASSWORD"
                                 value={password} // gets evaluated from the state variable
                                 onChange={e => setPassword(e.currentTarget.value)}
                            />
                            <br/>
               
               <button type="submit"
                        className="btn btn-light"
                        disabled={!isFormComplete()}
                        onClick={clearForm}>Add another Account</button>
                </> //end of second form

            )} //depending on what the value of show is show one form or the other

        />


    )
}
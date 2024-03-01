function Login(){
    //==============for use without styles
    // const ctx=React.useContext(UserContext);//access UserContext createdf in context.js
    // return(
    //     <h1>Login<br/>
    //         {JSON.stringify(ctx)}
    //     </h1>
    // );
    //==========================================================================
    //create states 
    
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password, setPassword]=React.useState('');
    // accsess user context
    const ctx = React.useContext(UserContext);
    

    //the validation function used to validate the form fields
    //depending on whether the field was validated or not return true or false
    //Log into the application (checking if a user exists and if their password matches their username)
    function validate(field,label){
        
        
        const usercheck = ctx.users.find(user=>(user.email === document.getElementById('email').value && user.password === document.getElementById('password').value));
        if(usercheck){
            return true;
        }
        //if the field is empty
       else if(!usercheck){
            setStatus('Error: '+label);
            setTimeout(()=>setStatus(''),3000);
            return false;
        } 
        
        // if(!usercheck){
        //    setStatus('Error: '+label);
        //     setTimeout(()=>setStatus(''),3000);
        //     return false;
          
        // }
       
       
       
        console.log(ctx.users);

       //return false;
        
    }

    // the function that gets called when the create account button is clicked
    function handleLogin(){
        console.log(email,password);
        if(!validate(email,    'email'))      return;
        if(!validate(password,    'password'))      return;
        // if all validation pass push a new user to our userContext
        console.log("login successful");
        setShow(false); // set show to false to hide the initial form and give the option to add another user
    }
    //the functions that get called when the add another account button is clicked
    // to reset the values of the name, email and password and show the the initail form
    function clearForm(){
        setEmail('');//clears the email field of the form
        setPassword('');//clears the password field of the form
        setShow(true);//reset the show state variable
    }
    //return the bootstrap card with forms based on the show state
    return(
        <Card
            bgcolor="warning" // set the  background color of the form
            txtcolor = "black" //set the text color
            header = "Login" // set the header of the card
            status={status}//pass the status based on the actions that are taken
            body={show ? (
                //begining of first form
                   <>  
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
                            />
                            <br/>
                        <button type="submit"
                                className="btn btn-light"
                                onClick= {handleLogin}
                        >Login</button>   
                   </> //end of first form
            ):(
                //beginning of second form which will show when the first form is submitted successfully 
                <>
                <h5>Success</h5> 
                <button type="submit"
                        className="btn btn-light"
                        onClick={clearForm}>Deposit</button><br/>
                         <button type="submit"
                        className="btn btn-light"
                        onClick={clearForm}>Withdraw</button><br/>
                         <button type="submit"
                        className="btn btn-light"
                        onClick={clearForm}>Access All data</button>
                </> //end of second form

            )} //depending on what the value of show is show one form or the other

        />


    )
}
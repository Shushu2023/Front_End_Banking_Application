function Home(){
    //==============without  card bootstrap  styles========================================
    // const ctx=React.useContext(UserContext);//access UserContext createdf in context.js
    // return(
    //     <h1>Home<br/>
    //         {JSON.stringify(ctx)}
    //     </h1>
    // );
    //========================================================================================
    //=================with bootstrap card style====================================================
    //===========================================================================================
    return(
        <Card
        //add the attributes which will be passed as props
        bgcolor = "primary"//set the background color
        txtcolor = "white" //set the text color
        //header="My BadBank "//set the header
        title="WELCOME TO THE BANK"//set the titlle
        text= "For all your banking needs"//set the text
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}//set the body of the card
        />
    );

}
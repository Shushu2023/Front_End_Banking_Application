function AllData(){
    // const ctx=React.useContext(UserContext);//access UserContext createdf in context.js
    // return(
    //     <h1>AllData<br/>
    //         {JSON.stringify(ctx)}
    //     </h1>
    // );
    //===============================================================================
    // accsess user context
    const ctx = React.useContext(UserContext);

    return(
        <Card style={{maxWidth: "50rem"}}
            bgcolor="success" // set the  background color of the form
            txtcolor="black"
            header = "ALL DATA" // set the header of the card
            body={
                //table from bootstap
                   <>  
                        <table className="table table-sm ">
                            <thead>
                                <tr>
                                <th scope="col" colSpan="2" >Email</th>
                                <th scope="col" colSpan="1">Name</th>
                                <th scope="col" colSpan="2">Password</th>
                                </tr>
                            </thead>
                            <tbody>
                            {ctx.users.map((user, index) => (
                                <tr key={index}>
                                    <td colSpan="2">{user.email}</td>
                                    <td colpan="2">{user.name}</td>
                                    <td colpan="2">{user.password}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                                                
                   </>    

            } 
        />


    )

}
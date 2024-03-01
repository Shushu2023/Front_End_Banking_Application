function Balance(){
    const ctx=React.useContext(UserContext);//access UserContext createdf in context.js
    return(
        <h1>Balance<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}
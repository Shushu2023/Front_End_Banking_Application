//add the routing components from the React Router library

const Route = ReactRouterDOM.Route;
const Link =ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);//Create a context to be shared by your components

//create a card  component
function Card(props){
    function classes(){
        // const bg = props.bgcolor ? ' bg-' + props.bgcolor : ` `;         
        // const txt =  props.txtcolor?'text-'+props.txtcolor : ' text-white';             
         const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';//check if a background color was set if set used else use default
         const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';  //if text color was set use it else use default
        return'card mb-3'+ bg + txt;    
    }
     {/**code for bootsrap card */}
    return(
        <div className ={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
            {props.title && (<h5 className="card-title">{props.title}</h5>)}
            {props.text && (<p className="card-text">{props.text}</p>)}
            {props.body}
            {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
        </div>
        
    );
}
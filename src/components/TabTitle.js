const TabTitle = (props) => {
    return (  
        <div>
            <h1 className="text-center text-light rounded-top bg-dark bg-gradient py-2 mb-0">{props.children}</h1> 
        </div>
    );
}
 
export default TabTitle;
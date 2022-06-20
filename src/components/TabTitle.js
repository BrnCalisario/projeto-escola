const TabTitle = (props) => {
    return (  
        <div>
            <h1 className="text-center text-light rounded-top py-2 mb-0 title">{props.children}</h1> 
        </div>
    );
}
 
export default TabTitle;
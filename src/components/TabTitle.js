const TabTitle = (props) => {
    return (  
        <div>
            <h2 className="text-center text-light rounded-top py-2 mb-0 title">{props.children}</h2> 
        </div>
    );
}
 
export default TabTitle;
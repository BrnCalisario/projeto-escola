const Content = ({ title, body }) => {
    return (
        <div className="text-center border border-top-0">
            <h3 className="mt-2 mb-0 pb-0">{title}</h3>
            <p className="mt-0 pt">{body}</p>
        </div>
    );
};

export default Content;

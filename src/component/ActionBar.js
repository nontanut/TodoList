const ActionBar = () => {
    return (
        <div>
            <button className="btn btn-secondary">
                <i className="fas fa-tasks" />
            </button>
            <button className="btn btn-secondary">
                <i className="fa-solid fa-clipboard-check" />
            </button>
            <button className="btn btn-secondary">
                <i className="fa-solid fa-clipboard" />
            </button>
        </div>
    );
};

export default ActionBar;
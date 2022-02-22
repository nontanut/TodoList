const Edit = () => {
    return (
        <form className="flex-grow-1">
            <div className="input-group">
                <input type="text" className="form-control rounded-0" />
                <button className="btn btn-info">
                    <i className="fas fa-edit" />
                </button>
                <button className="btn btn-dander rounded-0">
                    <i className="fas fa-times" />
                </button>
            </div>
        </form>
    )
};

export default Edit;
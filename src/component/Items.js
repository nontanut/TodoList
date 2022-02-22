const Item = (props) => {
    // const {title} = props;

    // ลบจาก key
    const handleClickDelete = () => {
        props.deleteTodo(props.todoItem.id);
    };

    const handleClickUpdate = () => {
        props.updateTodo(props.todoItem.id, {completed: !props.todoItem.completed});
    };

    return (
        <li className={`list-group-item d-flex justify-content-between align-item-center py-3 bd-callout bd-callout-${props.todoItem.completed ? "success" : "warning"}`}>
            <span>{props.todoItem.title}</span>
            <div className="btn-group">
                <button className="btn btn-info rounded-0" onClick={handleClickUpdate}>
                    <i className={`fa-solid fa-toggle-${props.todoItem.completed ? "on" : "off"}`} />
                </button>
                <button className="btn btn-danger rounded-0" onClick={handleClickDelete}>
                    <i className="fa-solid fa-trash-can" />
                </button>
            </div>
        </li>
    );
}
export default Item;    
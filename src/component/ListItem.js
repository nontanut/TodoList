import Item from "./Items"
import "./ListItem.css";

const ListItem = (props) => {
    // const {todoList} = props;
    return (
        <div className="shadow">
            <ul className="list-group rounded-0">
                {props.todoList.map((item) => {
                    return <Item todoItem={item} key={item.id} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo} />
                })}
            </ul>
        </div>
    )
}

export default ListItem;
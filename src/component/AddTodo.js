import { useState } from "react";

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    const onChange = event => {setTitle(event.target.value);};

    const saveItem = event => {
        event.preventDefault();
        if (title.trim() === "") {
            return setError("กรุณากรอกข้อมูล");
        }
        props.createTodo(title);
        console.log(props.createTodo(title));
        setError("");
        setTitle("");
    };

        return (
            <div className="text-box">
                <form onSubmit={saveItem}>
                    <div className="input-group">
                        <input type="text" 
                        className={`form-control rounded-0 ${error && 'is-invalid'}`} //เช็ค error
                        onChange={onChange}
                        value={title}
                        />
                        <button className="btn btn-success rounded-0">
                            <i className="fa-solid fa-plus" />
                        </button>
                        {/* กรณีไม่กรอกข้อมูล #1 */}
                        {error && <div className="invalid-feedback">{error}</div>}
                        {/* #2 */}
                        {/* <div className="invalid-tooltip">
                        test
                        </div> */}
                    </div>
                </form>
            </div>
        )
};

export default AddTodo;
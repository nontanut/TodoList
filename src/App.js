import './App.css';
import AddTodo from './component/AddTodo';
import ListItem from './component/ListItem';
import SearchBar from './component/SearchBar';
import RemainingMessage from './component/RemainingMessage';
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const initData = [
    {id: uuidv4(), title: "Hello World!", completed: false},
    {id: uuidv4(), title: "Hello React", completed: false}
  ];

  const [todoList, setTodoList] = useState(initData);
  const [searchText, setSearchText] = useState("abc");
  const [searchStatus, setSearchStatus] = useState("");

    const createTodo = title => {
        const addItem = [
            {id: uuidv4(), title: title, completed: false}, ...todoList
        ];
        setTodoList(addItem);
    }
  
  const deleteTodo = id => {
    const idx = todoList.findIndex(item => item.id === id);
    const newTodoList = [...todoList];
    if (idx !== -1) {
      newTodoList.splice(idx, 1);
    }
    setTodoList(newTodoList);
  };

  const updateTodo = (id, value) => {
    const idx = todoList.findIndex(item => item.id === id);
    const newTodoList = [...todoList];
    if (idx !== -1) {
      newTodoList[idx] = {...newTodoList[idx], ...value};
    }
    setTodoList(newTodoList);
  };

  const pendingTodoList = todoList.filter(item => item.completed);

  const filteredTodoList = todoList.filter(item => 
    item.title.toLowerCase().includes(searchText.toLowerCase()) && (searchStatus === "" || item.completed === searchStatus));

  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs">
        <AddTodo createTodo = {createTodo}/>
        <SearchBar 
          searchText={searchText}
          setSearchText={setSearchText}
          searchStatus={searchStatus}
          setSearchStatus={setSearchStatus}
        />
        <RemainingMessage 
          remaining={pendingTodoList.length}
          total={todoList.length}
        />
        <ListItem 
          todoList={filteredTodoList}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;

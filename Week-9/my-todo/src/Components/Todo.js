import { useState } from "react";
import { EmptyScreen } from "./EmptyScreen";
const deafultTodo = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];
export const Todo = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState(deafultTodo);
  const addTodo = () => {
    if(value === '') {
      return window.alert(`Todo title can't be empty!`);
    }
    const newItem = {
      id: todoList?.length + 1,
      title: value,
      completed: false,
    };
    setTodoList([newItem, ...todoList]);
  };
  const toggleTodo = (id) => {
    const newTodos = todoList?.map((item) =>
      item?.id === id ? { ...item, completed: !item?.completed } : item
    );
    setTodoList(newTodos);
  };
  const deleteTodo = (id) => {
    if (window.confirm(`Are you sure want to delete this todo ?`)) {
      const newTodos = todoList?.filter((item) => item?.id !== id);
      setTodoList(newTodos);
    }
    return;
  };
  return (
    <>
      <nav className="add-todo-container">
        <div className="add-todo-sub-container">
          <input
            className="input-todo"
            placeholder="Enter title here..."
            onChange={(e) => setValue(e?.target?.value)}
          />
          <button className="btn-todo" onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </nav>
      <div className="main-container">
        {todoList?.length > 0 ? (
          todoList?.map((item) => {
            return (
              <div key={item?.id} className="sub-container">
                <h4>{item?.title}</h4>
                <span className="title-status">Status : </span>{" "}
                <span style={{ color: `${item?.completed ? "green" : "red"}` }}>
                  {item?.completed ? "Done" : "Not done"}
                </span>
                <br />
                <button
                  className="btn-action"
                  onClick={() => toggleTodo(item?.id)}
                >
                  Mark as {!item?.completed ? 'done' : 'not done'}
                </button>
                <button
                  className="btn-action delete"
                  onClick={() => deleteTodo(item?.id)}
                >
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <EmptyScreen />
        )}
      </div>
    </>
  );
};

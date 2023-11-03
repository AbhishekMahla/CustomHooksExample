import { useEffect, useRef, useState } from "react";

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});
  const isMount = useRef(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMount.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });

    return () => {
      isMount.current = false;
    };
  }, []);
  return <>{loading ? <h3>Loading</h3> : <h1>{todo.title}</h1>}</>;
}

export default Todo;

import useLocalStorage from "../hooks/useLocalStorage";

function CustomHookLocalStorage() {
  const [task, setTask] = useLocalStorage("tesk", "");
  const [tasks, setTasks] = useLocalStorage("tesks", []);
  const onSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      task: task,
      completed: false,
      data: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, taskObj]);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-lable">Tasks</label>
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </div>
  );
}

export default CustomHookLocalStorage;

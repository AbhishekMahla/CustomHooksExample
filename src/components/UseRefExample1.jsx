import { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "ThankYou";
    inputRef.current.style.backgroundColor = "skyblue";
    inputRef.current.disabled = true;
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          name="name"
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UseRefExample1;

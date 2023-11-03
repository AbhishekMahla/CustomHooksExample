import { useEffect, useMemo, useRef, useState } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(4);
  const [inc, setInc] = useState(0);
  const sqrt = useMemo(() => getSqrt(number), [number]);
  //   const sqrt = getSqrt(number);
  const renders = useRef(1);
  useEffect(() => {
    renders.current = renders.current + 1;
  });
  const onClick = () => {
    setInc((prestate) => {
      return prestate + 1;
    });
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        className="form-control w-25"
      />
      <h2 className="my-2">
        {" "}
        the squareroot of {number} = {sqrt}
      </h2>
      <button onClick={onClick} className="btn btn-primary">
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
      <h4>{inc}</h4>
    </div>
  );
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  console.log("expensive");
  return Math.sqrt(n);
}

export default UseMemoExample;

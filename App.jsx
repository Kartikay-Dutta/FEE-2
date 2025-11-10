import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function update() {
    setCount(count + 1);
  }

  return (
    <div>
      {count}
      <button onClick={update}>Update</button>
    </div>
  );
};

export default App;

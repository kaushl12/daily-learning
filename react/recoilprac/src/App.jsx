  import { createContext, useContext, useState } from "react";
  import "./App.css";
import  Pracrecoil  from "./components/Pracrecoil"
import MemoCount from "./components/MemoCount";

  const CounterContext = createContext();
  function App() {
    return (
      <>
        {/* <Counter /> */}
        <hr />
          <Pracrecoil/>
        <hr />
        <hr />
        {/* <MemoCount/> */}
      </>
    );
  }

  function CounterContextProvider({ children }) {
    const [count, setCount] = useState(1);
    return (
      <CounterContext.Provider value={{ count, setCount }}>
        {children}
      </CounterContext.Provider>
    );
  }
  function Counter() {
    return (
      <>
      <h1>Counter</h1>
      <CounterContextProvider>
        <ViewCount />
        <Increase />
        <Decrease />
      </CounterContextProvider>
      </>
    );
  }

  function ViewCount() {
    const { count } = useContext(CounterContext);
    return (
      <div>
        <h2>{count}</h2>
      </div>
    );
  }
  function Increase() {
    const { count, setCount } = useContext(CounterContext);

    return (
      <div>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          Increase
        </button>
      </div>
    );
  }
  function Decrease() {
    const { count, setCount } = useContext(CounterContext);

    return (
      <div>
        <button
          onClick={() => {
            setCount((c) => c - 1);
          }}
        >
          Decrease
        </button>
      </div>
    );
  }

  export default App;

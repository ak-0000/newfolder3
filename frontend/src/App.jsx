import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./componets/Context";

function App() {
  const [count, setCount] = useState(0);

  // wrap anyone that want to use the teleported value in a provider
  return (
    <>
      <div>
        <CountContext.Provider value={count} >                         
        <Count count={count} setCount={setCount}></Count>           
        {/* now everything wrap inside this count componet can use the CountContext provider */}
        </CountContext.Provider>
      </div>
    </>
  );                                                            // we need to send the props from app to direct
                                                                // the CountRender and Buttons 
                                                                // to do with the help of context api  
}

function Count({ setCount }) {                                
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount}></Buttons>
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;

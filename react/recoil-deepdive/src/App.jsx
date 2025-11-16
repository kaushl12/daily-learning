import "./App.css";
import Header from "./components/Header";
import { RecoilRoot } from 'recoil';
import Asyncrecoilprac from './components/Asyncrecoilprac';
import Todorecoil from "./components/Todorecoil";
import TodoSelector from "./components/TodoSelector";

function App() {
  return (
    <RecoilRoot>
      {/* <Header />
      <Asyncrecoilprac/>
      <Todorecoil id={1}/> */}


      <TodoSelector id={1}/>
      <TodoSelector id={6}/>
      <TodoSelector id={2}/>
      <TodoSelector id={2}/>
      <TodoSelector id={2}/>
      <TodoSelector id={2}/>
    </RecoilRoot>
  );
}

export default App;

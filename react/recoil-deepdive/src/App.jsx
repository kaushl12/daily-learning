import "./App.css";
import Header from "./components/Header";
import { RecoilRoot } from 'recoil';
import Asyncrecoilprac from './components/Asyncrecoilprac';
import Todorecoil from "./components/Todorecoil";

function App() {
  return (
    <RecoilRoot>
      <Header />
      <Asyncrecoilprac/>
      <Todorecoil id={1}/>
      <Todorecoil id={2}/>
      <Todorecoil id={3}/>
      <Todorecoil id={3}/>
      <Todorecoil id={3}/>
      <Todorecoil id={3}/>
      <Todorecoil id={3}/>
      <Todorecoil id={3}/>
    </RecoilRoot>
  );
}

export default App;

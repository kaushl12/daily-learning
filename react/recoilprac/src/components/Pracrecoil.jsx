import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../store/counter";
import { evenSelector } from "../store/selectors/evenSelector";

function Pracrecoil() {
  return (
    <RecoilRoot>
      <h1>Recoil</h1>
      <ViewCount />
      <Increase />
      <Decrease />
      <IsEven/>
    </RecoilRoot>
  );
}

function ViewCount() {
  const count = useRecoilValue(counterAtom);
  return <h2>{count}</h2>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount((c) => c + 2)}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
}
 function IsEven(){
  const even=useRecoilValue(evenSelector)
  return(
    <div>
      {even ? "Even" : "Odd"}
    </div>
  )
 }

export default Pracrecoil;

import {useState, useEffect} from 'react'
import {Content, GlobalStyle} from "./styles/components"
import Header from "./components/Header"
import {useDispatch, useSelector} from "react-redux"
import {Store} from "./redux/store"
import {increment, decrement, incrementByAmount} from "./redux/reducers/counter"


const App = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(0)
  const {count} = useSelector((state:Store)=>state.counter)

  useEffect(()=>{
    console.log("count please", count)
  }, [])
  return (
    <>
        <GlobalStyle />
        <Header />
        <div>
          <Content>Hello App</Content>
        </div>
        <div>
          <p>{count}</p>
          <input type="number" value={amount} onChange={e=>setAmount(parseInt(e.target.value))} />
          <button onClick={()=>dispatch(increment())}>increment</button>
          <button onClick={()=>dispatch(decrement())}>decrement</button>
          <button onClick={()=>dispatch(incrementByAmount(amount))}>increase by {amount}</button>
        </div>
    </>
  )
}

export default App
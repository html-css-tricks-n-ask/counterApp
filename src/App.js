import "./App.css";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , reset } from './feature/counter/counterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="app">
      <div className="counter-box">
        <h1>Counter App</h1>
        <div className="count">{count}</div>
        <div className="buttons">
          <button className="btn    increase"
            onClick={() => dispatch(increment())}


          >
            increase
          </button>
          <button className="btn reset"
            onClick={() => dispatch(reset())}

          >
            Reset
          </button>
          <button className="btn decrease"
            onClick={() => dispatch(decrement())


              
            }

          >
            decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

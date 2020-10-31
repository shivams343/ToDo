import React,{useState} from 'react';
import'./App.css';
import TodoList from './components/TodoList';
function App() {
  const[inputlist,setInputList]= useState('')
  const[itemlist,setItemList]=useState([])

  const InputEvent=(e)=>{
    setInputList(e.target.value)
  }

  const listOfItems=()=>{
    if(inputlist.length)
    setItemList((previtemlist)=>{
      return [ ...previtemlist,inputlist];
    })
    setInputList("")
  }

  const deleteItem=(id)=>{
    setItemList((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
         return index !== id;
      })
    })
  }

  return (
  <>
    <div className="main_div">
      <div className="center_div">
         <br/>
         <h1>TODO List</h1>
         <br/>
         <input type="text" placeholder="Add a Item"
         value={inputlist} onChange={InputEvent}  />
         <button className="add"
         onClick={listOfItems}>+</button>

         <ol>
           {
             itemlist.map((item,index) =>
             <TodoList 
             key={index} 
             id={index} 
             value={item}
             onSelect={deleteItem}
             />
            )}
          <li> {inputlist}</li>
         </ol>
      </div>
    </div> 
  </>
  )
}

export default App


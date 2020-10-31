import React from 'react'

const TodoList=(props)=>{

    return (
        <>
        <div className='Todo_style'>
            <li>
            <button 
            className="delete"
            onClick={()=>{
              props.onSelect(props.id);
            }}>X</button> 
            {props.value}
            </li>
        </div>
        </>
    )
}

export default TodoList

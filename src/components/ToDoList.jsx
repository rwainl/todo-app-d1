import React from 'react'

function ToDoList({ list, onStatus, onDelete }) {
  return (
    <>
        <ul>
            {list.map((item, index) => {
                return(
                    <li key={index} style={{textDecoration: item.done ? "line-through" : "none"}}>
                        {item.item}
                        <button onClick={() => onStatus(index)}>Ubah Status</button>
                        <button onClick={() => onDelete(index)}>Hapus</button>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default ToDoList
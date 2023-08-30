import { useState } from "react";
import  './AddItems.css';
function AddItems({addTask}) {
    const [item,setItem]=useState("")
    function onChange(e){
        setItem(e.target.value)
    }
    function handlerClick(e){
        e.preventDefault()
        if(item!==""){
          addTask(item)
          setItem("")
        }
        else{
          
        }
    }
  return (
    <form className="container">
      <input  className="inp" type="text" name="" value={item} placeholder="Enter new task" onChange={onChange} />
      <button className="submit" onClick={handlerClick}>Add</button>
    </form>
  );
}
export default AddItems;

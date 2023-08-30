import "./App.css";
import { useState } from "react";
import ShowTask from './components/showtasks';
import AddItems from "./components/AddItems";

const initial = [
  { task: "Watch Movie", completed: false, id: 0 },
  { task: "Read Books", completed: false, id: 1 },
  { task: "Attend Classes", completed: false, id: 2 },
  { task: "Play Volleyball", completed: false, id: 3 },
];

function App() {
  const [list, setList] = useState(initial);
  let completed = 0;
  list.forEach((element) => {
    if (element.completed) ++completed;
  });
  // function doubleClick(id){

  // }
  function addTask(item) {
    setList([...list, { task: item, completed: false, id: list.length }]);
  }
  function mark(value) {
    setList(
      list.map((element) => {
        if (element.id === value) {
          element.completed = !element.completed;

          return element;
        }
        return element;
      })
    );
  }
  function priortize(id) {
    let temp = {};
    const newlist = list.filter((element) => {
      if (element.id !== id) return element;
      else {
        temp = element;
      }
    });
    newlist.unshift(temp);

    setList(newlist);
  }
  function moveup(element, reverse) {
    let newList = list;
    const index = newList.indexOf(element);

    if (!reverse) {
      if (index !== 0 && index !== -1) {
        const temp = newList[index - 1];
        newList[index - 1] = newList[index];
        newList[index] = temp;
      }
    } else {
      if (index !== (newList.length-1) && index !== -1) {
        const temp = newList[index +1];
        newList[index +1] = newList[index];
        newList[index] = temp;
      }
    }
    setList([...newList]);
    console.log("hello");
  }
  function deleteElement(id) {
    setList(
      list.filter((element) => {
        if (element.id !== id) return element;
      })
    );
  }
  
  return (
    <div className="App">
      <p className="title">TO Do List</p>

      <AddItems addTask={addTask}></AddItems>
      <h2 className="completed">
        Completed Items: {completed}/{list.length}
      </h2>
      <ShowTask
        list={list}
        mark={mark}
        deleteElement={deleteElement}
        priortize={priortize}
        moveup={moveup}
      ></ShowTask>
      {/* <footer className="foot">

      </footer> */}
    </div>
  );
}

export default App;

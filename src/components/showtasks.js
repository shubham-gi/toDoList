import "./ShowTask.css";
import deleteSvg from "../delete.svg";
import upButton from '../upButton.svg';
import downButton from '../downArrow.svg';
function ShowTask({ list, mark, deleteElement,priortize ,moveup}) {
  //   function clickHandler(e) {
  //     console.log(e.target.value)
  //     mark(e.tartget.value);
  //   }
  return (
    <div className="container">
      {list.map((element) => {
        // console.log(element)
        return (
          <div className="row">
            <div
              className="task"
              onClick={() => {
                mark(element.id);
              }}
              onDoubleClick={()=>priortize(element)}
              
            >
              
                <div>{element.task}</div>
                <div className="tick">{element.completed && "✓"}</div>
              
            </div>
            <button className="upButton" onClick={()=>moveup(element,false)}>
              <img className="up" src={upButton} alt="" />
            </button>
            <button className="upButton" onClick={()=>moveup(element,true)}>
              <img className="up" src={downButton} alt="" />
            </button>
            <button className="del" onClick={() => deleteElement(element)}>
              <img className="App-logo" src={deleteSvg} alt="" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default ShowTask;

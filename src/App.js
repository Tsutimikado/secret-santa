import Fireplace from "./components/interior/Fireplace";
import OldTv from "./components/oldTv/OldTv";
import Edges from "./components/Edges";
import Tree from "./components/interior/Tree";

function App() {
  return (
    <div className="App">
      <OldTv>
        <div className="w-full h-full bg-gradient-to-r from-[#313159] via-sky-900 to-[#313159] p-[2%] relative overflow-hidden">
          <Fireplace />
          <Edges />
          <div className=' w-full h-full relative ' id='visible-content'>
            <Tree/>
 
          </div>
        </div>
      </OldTv>
    </div>
  );
}
//#FE001A Coca-cola Red
//#34a853 random
export default App;

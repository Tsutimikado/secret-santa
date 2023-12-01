import Fireplace from "./components/interior/Fireplace";
import OldTv from "./components/oldTv/OldTv";

function App() {
  return (
    <div className="App">
      <OldTv>
        <div class="w-full h-full bg-gradient-to-r from-[#313159] via-sky-950 to-[#313159] p-[2%] relative">
          <Fireplace />
          <div className=' w-full h-full relative' id='visible-content'>
            {/* <Fireplace/> */}
            <div id='floor-line' className="h-1 bg-red-800 absolute bottom-32 rounded-full w-11/12 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </OldTv>
    </div>
  );
}
//#FE001A Coca-cola Red
//#34a853 random
export default App;

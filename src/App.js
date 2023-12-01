import Fireplace from "./components/interior/Fireplace";
import OldTv from "./components/oldTv/OldTv";

function App() {
  return (
    <div className="App">
      <OldTv>
        <div class="w-full h-full bg-gradient-to-t from-red-700 via-red-700 to-[#cc2204] p-[2%]">
          <div className=' w-full h-full relative' id='visible-content'>
            <Fireplace/>
            <div id='floor-line' className="h-1 bg-red-800 absolute bottom-32 rounded-full w-11/12 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </OldTv>
    </div>
  );
}

export default App;

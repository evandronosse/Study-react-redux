import { Provider } from "react-redux";
import store from "./store/index";
import SideBar from "./components/SideBar";
import Video from "./components/video";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Video />
        <SideBar />
      </Provider>
    </div>
  );
}

export default App;

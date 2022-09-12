import "./App.css";
import Likes from "./Likes";
import Title from "./Title";
import Comments from "./Comments";
import Spin from "./Spin";
import { useSelector } from "react-redux";

interface stateObj {
  appReducer: {
    error: boolean;
  };
}

const App = () => {
  const error = useSelector((state: stateObj) => {
    const { appReducer } = state;
    return appReducer.error;
  });

  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && <div className="error-message">{error}</div>}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default App;

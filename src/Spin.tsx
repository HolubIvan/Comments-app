import React from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

interface stateObj {
  appReducer: {
    loading: boolean;
  };
}

const Spin: React.FC = () => {
  const spinner = useSelector((state: stateObj) => {
    const { appReducer } = state;
    return appReducer.loading;
  });

  return (
    <div className="loader-styles">
      <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
        visible={spinner}
      />
    </div>
  );
};

export default Spin;

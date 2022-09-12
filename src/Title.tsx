import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions/actions";

interface stateObj {
  likesReducer: {
    likes: number;
  };
  titleReducer: {
    text: string;
  };
}

const Title: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const title = useSelector((state: stateObj) => {
    const { titleReducer } = state;
    return titleReducer.text;
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const result = (event.target as HTMLInputElement).value;

    dispatch(inputText(result));
  };
  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange} value={title} />
      </div>
    </div>
  );
};

export default Title;

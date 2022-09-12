import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "./redux/actions/actions";

interface LikesProps {
  likes?: "string";
  onIncrementLikes(): void;
  onDecrementLikes(): void;
}

const Likes: React.FC<LikesProps> = (props): ReactElement => {
  console.log("props", props);
  const { likes } = props;
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>❤ {likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log("mapStateToProps", state);
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onIncrementLikes: () => {
      return dispatch(incrementLikes());
    },
    onDecrementLikes: () => {
      return dispatch(decrementLikes());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Likes);

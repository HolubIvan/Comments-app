import React, { useState, ReactElement, useEffect } from "react";
import SingleComment from "./SingleComment";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, commentsLoad } from "./redux/actions/actions";
import uniqid from "uniqid";

interface stateObj {
  likesReducer: {
    likes: number;
  };
  titleReducer: {
    text: string;
  };
  commentsReducer: {
    comments: [{}];
  };
}

const Comments: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const comments = useSelector((state: stateObj) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
  const [textComment, setTextComment] = useState("");

  const handleInput = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    const result = (event.target as HTMLInputElement).value;
    setTextComment(result);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  useEffect(() => {
    dispatch<any>(commentsLoad());
  }, []);

  return (
    <div className="card-comments">
      <form className="comments-item-create" onSubmit={handleSubmit}>
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments?.length &&
        comments.map((comment: any) => (
          <SingleComment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default Comments;

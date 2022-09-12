import React, { ReactElement, useState, useEffect } from "react";
import { commentUpdate, commentDelete } from "./redux/actions/actions";
import { useDispatch } from "react-redux";

interface Props {
  comment: {
    text?: string;
    id?: string;
  };
}

const SingleComment: React.FC<Props> = (props: Props): ReactElement => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const { text, id } = props.comment;
  useEffect(() => {
    if (text) {
      setComment(text);
    }
  }, [text]);

  const handleInput = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    const result = (event.target as HTMLInputElement).value;
    setComment(result);
  };

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(commentUpdate(comment, id));
  };

  const handleDelete = (event: React.MouseEvent<HTMLInputElement>): void => {
    event.preventDefault();
    dispatch(commentDelete(id));
  };

  return (
    <form className="comments-item" onSubmit={handleUpdate}>
      <div className="comments-item-delete" onClick={handleDelete}>
        &times;
      </div>
      <input type="text" value={comment} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;

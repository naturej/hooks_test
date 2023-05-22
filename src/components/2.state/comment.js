import { useState } from "react";
import styled from "styled-components";

function Comment({ comments, deleteComment, updateComment }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [editIndex, setEditIndex] = useState();

  const handleDeleteComment = (index) => {
    if (isEditMode) return;
    deleteComment(index);
  };

  const handleUpdateComment = (e, index) => {
    e.preventDefault();
    setEditIndex(index);
    if (!isEditMode) return setIsEditMode(true);
    setEditContent(comments[index].content);
    updateComment(index, e.target.content.value);
    setIsEditMode(false);
  };

  return (
    <>
      {comments.map((comment, index) => (
        <S.CommentItem>
          <form onSubmit={(e) => handleUpdateComment(e, index)}>
            <p>
              작성자: <span>{comment.User.nickname}</span>
            </p>
            <p>
              댓글 내용:{" "}
              {isEditMode && index === editIndex ? (
                <textarea
                  name="content"
                  defaultValue={comment.content}
                ></textarea>
              ) : (
                <span>{comment.content}</span>
              )}
            </p>
            {comment.myComment && (
              <>
                <button>수정</button>
                <button
                  type="button"
                  onClick={() => handleDeleteComment(index)}
                >
                  삭제
                </button>
              </>
            )}
          </form>
        </S.CommentItem>
      ))}
    </>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};

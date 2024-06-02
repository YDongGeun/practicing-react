import React from "react";
import Comment from "./Comment";

function CommentList(props) {
  return (
    <div>
      <Comment name={"윤동근"} comment={"안녕하세요, geun입니다."} />
      <Comment name={"홍길동"} comment={"안녕하세요, 재밌네요."} />
    </div>
  );
}

export default CommentList;

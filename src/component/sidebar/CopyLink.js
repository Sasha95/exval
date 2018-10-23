import React from "react";
import "../../static/main.css";

const CopyLink = props => {
  return (
    <div>
      <div id="Title">{props.title}</div>
      <div style={{ fontSize: "15px", lineHeight: 1.47, fontWeight: "normal" }}>
        Отправьте вашим друзьям ссылку, для того чтобы они прошли регистрацию на
        нашем сайте.
      </div>
    </div>
  );
};

export default CopyLink;

import React from 'react';

interface TextStyle {
  text: string;
  bg_color: string;
}
function TextTag(props: TextStyle) {
  return (
    <>
      <div className="container">
        <div className={`border ${props.bg_color} rounded-lg `}>
          <p className="">{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default TextTag;

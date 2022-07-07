import { useCallback, useEffect, useState, useEvent } from "react";

export default function Chat() {
  const [text, setText] = useState("");

  setTimeout(() => {
    setText('你好');
    console.log('effecct text===', text);
  }, 4000)
  

  // const onClick = useEvent(() => {
  //   sendMessage(text);
  // });

  const onClick = useCallback(() => {
    console.log('text===', text);
  });

  return <button onClick={onClick}>点击</button>;
}
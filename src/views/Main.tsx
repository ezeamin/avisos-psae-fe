import { useState } from "react";

import MDEditor from "@uiw/react-md-editor";

const Main = () => {
  const [text, setText] = useState<string | undefined>("");

  return (
    <MDEditor value={text} onChange={(text) => setText(text)} height={250} />
  );
};

export default Main;

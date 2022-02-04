import React from "react";
import ColofullMessage from "./componets/ColorfullMesasage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColofullMessage color="blue">お元気ですか</ColofullMessage>
      <ColofullMessage color="pink">元気です</ColofullMessage>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
export default App;

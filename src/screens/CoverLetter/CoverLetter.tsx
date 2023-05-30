import { Button, Input } from "antd";
import { FC, useState } from "react";

const CoverLetter: FC = () => {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("Answer Here");
  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        // background: colorBgContainer,
      }}
    >
      <Input
        placeholder="Basic usage"
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Button type="primary" onClick={() => console.log("button clicked")}>
        Primary
      </Button>

      <div>{answer}</div>
    </div>
  );
};

export default CoverLetter;

import React, { ReactElement, useCallback, useState } from "react";
import "./App.css";
import { Button, TextField } from "@mui/material";
import SummaryMessageByImo from "./components/SummaryMessageByImo";
import "react-pulse-dot/dist/index.css";

type ChatMessageItem = {
  imo: string;
  chatMessageComponent: ReactElement;
};

function App() {
  const [messages, setMessages] = useState<ChatMessageItem[]>([]);
  const [vesselImo, setVesselImo] = useState<string>("");

  const pushNewMessage = useCallback(
    (imo: string, chatMessageComponent: ReactElement) => {
      setMessages([
        ...messages,
        {
          imo,
          chatMessageComponent,
        },
      ]);
    },
    [messages, setMessages]
  );
  const handleOnClick = () => {
    if (vesselImo === "") return;

    const isVesselSummaryAlreadyExist = messages.find(
      ({ imo }) => imo === vesselImo
    );

    if (isVesselSummaryAlreadyExist) {
      const element = document.getElementById(isVesselSummaryAlreadyExist.imo);
      element?.scrollIntoView({ behavior: "smooth" });
      alert("Already summarized this vessel!");
      return;
    }

    pushNewMessage(
      vesselImo,
      <SummaryMessageByImo
        vesselImo={vesselImo}
        key={vesselImo}
        id={vesselImo}
      />
    );
  };
  return (
    <div className="app_container">
      <h1>Enter your desired Vessel IMO</h1>
      <nav className="navbar">
        <TextField
          variant="standard"
          label="Vessel IMO"
          value={vesselImo}
          onChange={(e) => setVesselImo(e.target.value)}
        />
        <Button onClick={handleOnClick}>Generate Summary</Button>
      </nav>
      <div className="chat_container">
        {messages.map((m) => m.chatMessageComponent)}
      </div>
    </div>
  );
}

export default App;

import { Card } from "antd";
import React from "react";
import EchoWindow from "../modals/EchoWindow";
import "./EchoCards.css";

function EchoCards() {
  const [echoWindow, showEchoWindow] = React.useState(false);
  const [selectedEcho, setSelectedEcho] = React.useState(null);
  function toggleEchoWindow() {
    showEchoWindow((prevState) => !prevState);
  }

  const echoes = [1, 2, 3, 4, 5];

  return (
    <div className="echo-cards" onClick={toggleEchoWindow}>
      {echoWindow && (
        <EchoWindow onClose={toggleEchoWindow} onSelectEcho={setSelectedEcho} />
      )}
      {echoes.map((index) => (
        <Card
          key={index}
          className="echo-card-item"
          size="small"
          bordered={false}
        >
          {/* Your individual echo card contents go here */}
          <p style={{ color: "white", margin: 0, textAlign: "center" }}>
            Echo {index}
          </p>
        </Card>
      ))}
    </div>
  );
}

export default EchoCards;

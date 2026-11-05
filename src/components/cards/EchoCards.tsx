import { Card } from "antd";
import React from "react";
import EchoWindow from "../modals/EchoWindow";
import "./EchoCards.css";

function EchoCards() {
  const [echoWindow, showEchoWindow] = React.useState(false);

  //  use this to determine which slot is selected right now
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const [echoesState, setEchoesState] = React.useState<Array<any>>(
    Array(5).fill(null),
  );

  const openEchoWindow = (index: number) => {
    setActiveIndex(index);
    showEchoWindow(true);
  };

  const closeEchoWindow = () => {
    showEchoWindow(false);
    setActiveIndex(null);
  };

  const setSelectedEcho = (echo: any) => {
    if (activeIndex !== null) {
      const newEchoesState = [...echoesState];
      newEchoesState[activeIndex] = echo;
      setEchoesState(newEchoesState);
    }
    closeEchoWindow();
  };

  const echoes = [0, 1, 2, 3, 4];

  return (
    <>
      {echoWindow && (
        <EchoWindow onClose={closeEchoWindow} onSelectEcho={setSelectedEcho} />
      )}
      <div className="echo-card-grid">
        {echoes.map((index) => {
          const currentEcho = echoesState[index];

          return (
            <Card
              key={index}
              className="echo-card-item"
              size="small"
              bordered={false}
              onClick={() => openEchoWindow(index)}
            >
              {/* Display the current echo if it exists */}
              {currentEcho ? (
                <div className="echo-card-content">
                  <img
                    src={`/assets/icons/echoes/${currentEcho.id}.webp`}
                    alt={currentEcho.name}
                    className="echo-card-image"
                  />
                  <span className="echo-card-name">{currentEcho.name}</span>
                </div>
              ) : (
                <p style={{ color: "white", margin: 0, textAlign: "center" }}>
                  Echo {index + 1}
                </p>
              )}
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default EchoCards;

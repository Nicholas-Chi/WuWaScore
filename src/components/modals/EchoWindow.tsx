import React from "react";
import { Select, ConfigProvider, theme, Input } from "antd";
import sonata from "../../data/sonatas.json";
import echoData from "../../data/echoes.json";

interface EchoFormProps {
  onClose: () => void;
  onSelectEcho: (echo: any) => void;
}

const { Search } = Input;

export default function EchoWindow(props: EchoFormProps) {
  const [searchEcho, setSearchEcho] = React.useState("");

  const [selectedSet, setSelectedSet] = React.useState<string | null>(null);

  const sonataSets = sonata.sonatas.map((sonata) => sonata.name);

  // Filter echoes based on search and selected set
  const filteredEchoes = echoData.echoes.filter((echo) => {
    const matchesSearch = echo.name
      .toLowerCase()
      .includes(searchEcho.toLowerCase());
    // If no set is selected, show all. Otherwise, check if the echo's sets array contains the selectedSet.
    const matchesSet = selectedSet ? echo.sets.includes(selectedSet) : true;

    return matchesSearch && matchesSet;
  });

  // handle echo click in echo window
  function handleEchoClick(echo: any) {
    console.log(`Clicked on echo: ${echo.name}`);
    props.onClose();
    props.onSelectEcho(echo);
  }

  return (
    <div className="modal-overlay" onClick={props.onClose}>
      <div className="echo-window" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={props.onClose}>
          X
        </button>

        <h2 style={{ color: "white" }}>Available Echoes</h2>

        <div className="filters-container">
          {/* <input
            type="text"
            placeholder="Search echoes..."
            value={searchEcho}
            onChange={(e) => setSearchEcho(e.target.value)}
            className="search-bar"
          /> */}
          <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <Search
              placeholder="Search echoes..."
              value={searchEcho}
              allowClear
              onChange={(e) => setSearchEcho(e.target.value)}
              style={{ width: "250px" }}
              className="search-bar"
            ></Search>
          </ConfigProvider>
          <div className="set-filter-container">
            <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
              <Select
                showSearch
                allowClear
                placeholder="Select a Sonata"
                optionFilterProp="label"
                value={selectedSet}
                onChange={(value) => setSelectedSet(value || null)}
                style={{ width: 200 }}
                options={sonataSets.map((setName) => ({
                  value: setName,
                  label: (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <img
                        src={`/assets/icons/sonatas/${setName.replace(/\s+/g, "_").toLowerCase()}.webp`}
                        alt={setName}
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "contain",
                        }}
                      />
                      <span>{setName}</span>
                    </div>
                  ),
                }))}
              />
            </ConfigProvider>
          </div>
        </div>

        <div className="echo-grid" style={{ color: "white" }}>
          <div className="cost-section">
            <h3>4-Cost Echoes</h3>
            <div className="echo-list">
              {filteredEchoes
                .filter((echo) => echo.cost === 4)
                .map((echo) => (
                  <button
                    key={echo.id}
                    className="echo-card"
                    onClick={() => handleEchoClick(echo)}
                  >
                    <img
                      src={`/assets/icons/echoes/${echo.id}.webp`}
                      alt={echo.name}
                    />
                    <p>{echo.name}</p>
                  </button>
                ))}
            </div>
          </div>
          <div className="cost-section">
            <h3>3-Cost Echoes</h3>
            <div className="echo-list">
              {filteredEchoes
                .filter((echo) => echo.cost === 3)
                .map((echo) => (
                  <button
                    key={echo.id}
                    className="echo-card"
                    onClick={() => handleEchoClick(echo)}
                  >
                    <img
                      src={`/assets/icons/echoes/${echo.id}.webp`}
                      alt={echo.name}
                    />
                    <p>{echo.name}</p>
                  </button>
                ))}
            </div>
          </div>
          <div className="cost-section">
            <h3>1-Cost Echoes</h3>
            <div className="echo-list">
              {filteredEchoes
                .filter((echo) => echo.cost === 1)
                .map((echo) => (
                  <button
                    key={echo.id}
                    className="echo-card"
                    onClick={() => handleEchoClick(echo)}
                  >
                    <img
                      src={`/assets/icons/echoes/${echo.id}.webp`}
                      alt={echo.name}
                    />
                    <p>{echo.name}</p>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

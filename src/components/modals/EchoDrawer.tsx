// this component will pop up on the sidee and allow the user to
// fill in the echo stats for the current character.
import React from "react";
import { Drawer, Input, Button, ConfigProvider, theme, Select } from "antd";

interface EchoDrawerProps {
  open: boolean;
  echo: any;
  onClose: () => void;
}

function EchoDrawer(props: EchoDrawerProps) {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Drawer
        title="Edit Echo"
        closable={{ "aria-label": "Close Button" }}
        placement="right"
        open={props.open}
        onClose={props.onClose}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <img
            src={`/assets/icons/echoes/${props.echo.id}.webp`}
            alt={props.echo.name}
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "#333",
            }}
          />
          <h3>{props.echo.name}</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Select
            showSearch
            allowClear
            placeholder="Select a Sonata"
            optionFilterProp="label"
            value={props.echo.sonata}
            onChange={(value) => {
              props.echo.sonata = value;
            }}
            style={{ width: 200 }}
          />
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <Select
              showSearch
              allowClear
              placeholder="Main Stat"
              optionFilterProp="label"
              style={{ width: 200 }}
            />
            <Input
              placeholder="Main Stat Value"
              style={{ width: 150 }}
              allowClear
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <Select
              showSearch
              allowClear
              placeholder="Secondary Stat"
              optionFilterProp="label"
              style={{ width: 200 }}
            />
            <Input
              placeholder="Secondary Stat Value"
              style={{ width: 150 }}
              allowClear
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            props.onClose();
          }}
        >
          Save Echo
        </button>
      </Drawer>
    </ConfigProvider>
  );
}

export default EchoDrawer;

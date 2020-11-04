import React from "react";
import { SlackSearchResult } from "../types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

type SlackItemProps = {
  search: SlackSearchResult;
};

export default function SlackItem({ search }: SlackItemProps) {
  const { channel, author, message, timestamp } = search;
  return (
    <Card style={{ width: "100%", margin: "10px" }}>
      <CardContent>
        <div>
          <text style={{ fontWeight: "bold" }}>#{channel} </text>
        </div>
        <div style={{ fontSize: "14px" }}>{timestamp}</div>
        <div style={{ marginTop: "10px" }}>
          <text>
            <text style={{ fontWeight: "bold" }}>{author}: </text> {message}
          </text>
        </div>
      </CardContent>
    </Card>
  );
}

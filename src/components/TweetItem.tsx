import React from "react";
import { TweetSearchResult } from "../types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

type TweetItemProps = {
  search: TweetSearchResult;
};

export default function TweetItem({ search }: TweetItemProps) {
  const { user, message, timestamp } = search;
  return (
    <Card style={{ width: "100%", margin: "10px" }}>
      <CardContent>
        <div>
          <text style={{ fontWeight: "bold" }}>{user} </text>
          <text style={{ fontSize: "14px", color: "grey" }}>{timestamp}</text>
        </div>
        <div style={{ marginTop: "10px" }}>
          <text>{message}</text>
        </div>
      </CardContent>
    </Card>
  );
}

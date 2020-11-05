import React from "react";
import { DropboxSearchResult } from "../types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";

type DropboxItemProps = {
  search: DropboxSearchResult;
};

export default function DropboxItem({ search }: DropboxItemProps) {
  const { path, title, shared_with, created } = search;
  const numCollaborators = shared_with.length;
  const collaborators = shared_with.map((person: string) => {
    return (
      <div>
        <text style={{ overflowWrap: "break-word" }}>{person}</text>
      </div>
    );
  });
  return (
    <Card style={{ width: "100%", margin: "10px" }}>
      <CardContent>
        <div>
          <text style={{ fontWeight: "bold" }}>{title}</text>
        </div>
        <div>
          <text
            style={{
              fontSize: "14px",
              color: "grey",
              overflowWrap: "break-word",
            }}
          >
            {path}
          </text>
        </div>
        <Accordion style={{ marginTop: "10px", marginBottom: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='expandCollaboratorList'
          >
            <div>
              <text style={{ fontSize: "14px" }}>
                {numCollaborators} collaborator{numCollaborators > 1 ? "s" : ""}
              </text>
            </div>
          </AccordionSummary>
          <AccordionDetails
            style={{ flexDirection: "column", flexWrap: "wrap" }}
          >
            {collaborators}
          </AccordionDetails>
        </Accordion>
        <div>
          <text style={{ fontSize: "14px" }}>
            Document created on {created}
          </text>
        </div>
      </CardContent>
    </Card>
  );
}

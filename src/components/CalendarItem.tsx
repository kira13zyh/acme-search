import React from "react";
import { CalendarSearchResult, Entry } from "../types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";

type CalendarItemProps = {
  search: CalendarSearchResult;
};
export default function CalendarItem({ search }: CalendarItemProps) {
  const { title, invitees, date } = search;
  const inviteesArray = invitees.split(", ");
  const numInvitees = inviteesArray.length;
  const inviteeDisplay = inviteesArray.map((invitee: string) => {
    return (
      <div>
        <text>{invitee}</text>
      </div>
    );
  });

  return (
    <Card style={{ width: "100%", margin: "10px" }}>
      <CardContent>
        <p>{date}</p>
        <text style={{ fontWeight: "bold" }}>{title}</text>
        <Accordion style={{ marginTop: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='expandGuestList'
          >
            <div>
              <text>{numInvitees} guests</text>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ flexDirection: "column" }}>{inviteeDisplay}</div>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}

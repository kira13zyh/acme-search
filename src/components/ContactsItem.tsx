import React from "react";
import { ContactsSearchResult } from "../types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

type ContactsItemProps = {
  search: ContactsSearchResult;
};

export default function ContactsItem({ search }: ContactsItemProps) {
  const { name, company, emails, phones, last_contact } = search;
  const emailDisplay = emails.map((email: string) => {
    return (
      <div>
        <text>{email}</text>
      </div>
    );
  });
  const phoneDisplay = phones.map((phone: string) => {
    return (
      <div>
        <text>{phone}</text>
      </div>
    );
  });
  return (
    <Card style={{ width: "100%", margin: "10px" }}>
      <CardContent>
        <p style={{ fontWeight: "bold" }}>
          {name}, {company}
        </p>
        <div style={{ fontSize: "14px", marginBottom: "5px" }}>
          <text style={{ fontWeight: "bold" }}>Email: </text>
          {emailDisplay}
        </div>
        <div style={{ fontSize: "14px", marginBottom: "5px" }}>
          <text style={{ fontWeight: "bold" }}>Phone: </text>
          {phoneDisplay}
        </div>
        <text style={{ fontSize: "14px", marginBottom: "5px" }}>
          <text style={{ fontWeight: "bold" }}> Last Contact: </text>
          {last_contact}
        </text>
      </CardContent>
    </Card>
  );
}

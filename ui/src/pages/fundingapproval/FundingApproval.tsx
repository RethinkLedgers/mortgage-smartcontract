import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { useStreamQueries,  } from "@daml/react";
import { Mortgage } from '@daml.js/mortgage-app/lib';
import useStyles from "./styles";
import { useKnownParties } from '../../UseKnownParties'; // BGY


export default function FundingApprovalList() {
  const assets = useStreamQueries(Mortgage.FundingContractApproval).contracts;
  const classes = useStyles();
  const {displayName, partyIdentifier, knownPartyDisplayNames} = useKnownParties () // BGY
   

  return (
    <>
    <Table size="small">
    <TableHead>
      <TableRow className={classes.tableRow}>
        <TableCell key={0} className={classes.tableCell}>Contract</TableCell>
        <TableCell key={1} className={classes.tableCell}>GSE</TableCell>
        <TableCell key={2} className={classes.tableCell}>FundingDate</TableCell>
        <TableCell key={3} className={classes.tableCell}>Funding Contract ID</TableCell>
        <TableCell key={4} className={classes.tableCell}>Amount</TableCell>
        <TableCell key={5} className={classes.tableCell}>Originator</TableCell>
        <TableCell key={5} className={classes.tableCell}>HomeOwner</TableCell>
        <TableCell key={7} className={classes.tableCell}>Home Loans Contract</TableCell>
        <TableCell key={8} className={classes.tableCell}>Rate</TableCell>
        <TableCell key={9} className={classes.tableCell}>Type</TableCell>
        <TableCell key={10} className={classes.tableCell}>Asset Type</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {assets.map(a => (
        <TableRow key={a.contractId} className={classes.tableRow}>
          <TableCell key={0} className={classes.tableCellContract}>{a.contractId}</TableCell>
          <TableCell key={1} className={classes.tableCell}>{displayName(a.payload.gse)}</TableCell>
          <TableCell key={2} className={classes.tableCell}>{a.payload.fundingDate}</TableCell>
          <TableCell key={3} className={classes.tableCellContract}>{a.payload.fundingRequestId}</TableCell>
          <TableCell key={4} className={classes.tableCell}>{a.payload.fundingRequest.fundingContract.amount}</TableCell>
          <TableCell key={5} className={classes.tableCell}>{displayName(a.payload.fundingRequest.fundingContract.originator)}</TableCell>
          <TableCell key={6} className={classes.tableCell}>{displayName(a.payload.fundingRequest.fundingContract.homeowner)}</TableCell>
          <TableCell key={7} className={classes.tableCellContract}>{a.payload.fundingRequest.fundingContractId}</TableCell>
          <TableCell key={8} className={classes.tableCell}>{a.payload.fundingRequest.fundingContract.rate}</TableCell>
          <TableCell key={9} className={classes.tableCell}>{a.payload.fundingRequest.fundingContract.homeloantype}</TableCell>
          <TableCell key={10} className={classes.tableCell}>{a.payload.fundingRequest.fundingContract.assetType}</TableCell>
        </TableRow>
          ))}
      </TableBody>
      </Table>
      </>
    );
}


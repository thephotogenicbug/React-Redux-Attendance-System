import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  TablePagination,
  TableSortLabel,
} from "@material-ui/core";
export default function useTable(records, headCell) {
  const TbleContainer = (props) => <Table></Table>;

  return {
    TbleContainer,
  };
}

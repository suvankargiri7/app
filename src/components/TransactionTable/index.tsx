import { FunctionComponent, useState, MouseEvent } from "react";
import TableSortLabel from "@mui/material/TableSortLabel";
import {
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import CeilName from "./ceilName";
import CeilStatus from "./ceilStatus";
import CeilOptions from "./ceilOptions";
import CeilInvoice from "./ceilInvoice";
import CeilDate from "./ceilDate";
import CeilUsd from "./ceilUsdEqual";

type TransactionTableProps = {};

interface Data {
  transaction_date: number;
  invoice_no: string;
  payer: string;
  payer_country: string;
  payee: string;
  payee_country: string;
  amount: number;
  usd_equivalent: number;
  status: number;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

enum countries {
    "India" = "in",
   "Canada" = "ca",
  "United States" = "us",
  "Iceland" = "is",
}

const createData = (
  transaction_date: number,
  invoice_no: string,
  payer: string,
  payer_country: string,
  payee: string,
  payee_country: string,
  amount: number,
  usd_equivalent: number,
  status: number
): Data => {
  return {
    transaction_date,
    invoice_no,
    payer,
    payer_country,
    payee,
    payee_country,
    amount,
    usd_equivalent,
    status,
  };
};

const rowsdata = [
  createData(
    1683700273,
    "ILX3CQ",
    "Tiositiz Public Joint Venture",
    countries.Iceland,
    "Green Kaya Limited",
    countries.India,
    215000,
    25788.5,
    1
  ),
  createData(
    1684305073,
    "ILX3CR",
    "Tiositiz Public Joint Venture",
    countries.Canada,
    "Green Kaya Limited",
    countries["United States"],
    445000,
    93000,
    1
  ),
  createData(
    1684477873,
    "ILX3CS",
    "Green Kaya Limited",
    countries.India,
    "Tiositiz Public Joint Venture",
    countries.Canada,
    210000,
    287855,
    2
  ),
  createData(
    1684564273,
    "ILX3CT",
    "Tiositiz Public Joint Venture",
    countries["United States"],
    "Green Kaya Limited",
    countries.Iceland,
    245000,
    485000,
    3
  ),
];

const headCells: readonly HeadCell[] = [
  {
    id: "transaction_date",
    numeric: true,
    disablePadding: true,
    label: "Transaction Date",
  },
  {
    id: "invoice_no",
    numeric: false,
    disablePadding: false,
    label: "Invoice No",
  },
  {
    id: "payer",
    numeric: false,
    disablePadding: false,
    label: "Payer",
  },
  {
    id: "payee",
    numeric: false,
    disablePadding: false,
    label: "Payee",
  },
  {
    id: "amount",
    numeric: true,
    disablePadding: false,
    label: "Amount",
  },
  {
    id: "usd_equivalent",
    numeric: true,
    disablePadding: false,
    label: "USD Equivalent",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "invoice_no",
    numeric: false,
    disablePadding: false,
    label: "Actions",
  },
];

type Order = "asc" | "desc";

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}

      </TableRow>
    </TableHead>
  );
};

const TransactionTableBlocks: FunctionComponent<TransactionTableProps> = (
  props
) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("transaction_date");
  const [selected, setSelected] = useState<string>('');

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const isSelected = (invoice_no: string) =>
    selected.indexOf(invoice_no) !== -1;

  const handleClick = (event: MouseEvent<unknown>, invoice_no: string) => {
    const selectedIndex = selected.indexOf(invoice_no);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, invoice_no);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(invoice_no);
  };

  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <TableContainer>
          <Table>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rowsdata.length}
              onSelectAllClick={() => {
                console.log("testing");
              }}
            />
            <TableBody>
              {rowsdata.map((row, index) => {
                const isRowSelected = isSelected(row.invoice_no);

                return (
                  <TableRow
                    onClick={(event) => handleClick(event, row.invoice_no)}
                    tabIndex={-1}
                    key={row.invoice_no}
                    selected={isRowSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                    </TableCell>
                    <TableCell align="right"><CeilDate timestamp={row.transaction_date} /></TableCell>
                    <TableCell align="right"><CeilInvoice no={row.invoice_no} /></TableCell>
                    <TableCell align="right"><CeilName name={row.payer} country={row.payer_country}/></TableCell>
                    <TableCell align="right"><CeilName name={row.payee} country={row.payee_country}/></TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right"><CeilUsd amount={row.amount} /></TableCell>
                    <TableCell align="right"><CeilStatus status={row.status}/></TableCell>
                    <TableCell padding="checkbox">
                        <CeilOptions />
                    </TableCell>
                  </TableRow>
                );
              })}
              {rowsdata.length <= 0 && (
                <TableRow>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default TransactionTableBlocks;
//https://anyapi.io/api/v1/exchange/convert?apiKey=ua4h13q2p49nekpgd4d8n87sc2lnhfoud77k29p2o5143tggj9io––

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    
  head: {
    height: "85px",
    fontSize:"20pt",
    backgroundColor: "#212a4a",
    color: theme.palette.common.white,
  },
  body: {
    height: "75px",
    fontSize: "18pt",
    backgroundColor: "#171e38",
    color: "#bec8ea",
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(Time, Transaction, Account, Fee, Mixin, Payees) {
    id += 1;
    return { id, Time, Transaction, Account, Fee, Mixin,Payees };
  }

const rows = [
    createData("12:30 PM", "1.0? h/s","$250", "-$5(10%)", "3.256.54T", "shadow99"),
    createData("12:30 PM", "1.0? h/s","$250", "-$5(10%)", "3.256.54T", "shadow99"),
    createData("12:30 PM", "1.0? h/s","$250", "-$5(10%)", "3.256.54T", "shadow99"),
    createData("12:30 PM", "1.0? h/s","$250", "-$5(10%)", "3.256.54T", "shadow99"),
    createData("12:30 PM", "1.0? h/s","$250", "-$5(10%)", "3.256.54T", "shadow99"),
    createData("12:30 PM", "1.0? h/s","$250", "-$5(10%)", "3.256.54T", "shadow99"),
    createData("12:30 PM", "1.0? h/s","$250", "-$5(10%)", "3.256.54T", "shadow99"),
    createData("12:30 PM", "1.0? h/s","$250", "-$5(10%)", "3.256.54T", "shadow99"),
    createData("12:30 PM", "1.0? h/s","$250", "-$5(10%)", "3.256.54T", "shadow99"),
    createData("12:30 PM", "1.0? h/s","$250", "-$5(10%)", "3.256.54T", "shadow99"),
    createData("12:30 PM", "1.0? h/s","$250", "-$5(10%)", "3.256.54T", "shadow99"),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell numeric>Time Sent</CustomTableCell>
            <CustomTableCell numeric>Transaction Hash</CustomTableCell>
            <CustomTableCell numeric>Account</CustomTableCell>
            <CustomTableCell numeric>Fee</CustomTableCell>
            <CustomTableCell numeric>Mixin</CustomTableCell>
            <CustomTableCell numeric>Payees</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell numeric component="th" scope="row">
                  {row.Time}
                </CustomTableCell>
                <CustomTableCell numeric>{row.Transaction}</CustomTableCell>
                <CustomTableCell numeric>{row.Account}</CustomTableCell>
                <CustomTableCell numeric>{row.Fee}</CustomTableCell>
                <CustomTableCell numeric>{row.Mixin}</CustomTableCell>
                <CustomTableCell numeric>{row.Payees}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);

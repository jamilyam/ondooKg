import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/products/actions";
import OrderItem from "../../components/cart/OrderItem";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";


class Orders extends Component {

  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    const { orders } = this.props;
    return !orders ? (
      <Title>Заказы</Title>
    ) : (
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="right">Номер заказа:</TableCell>
              <TableCell align="right">Имя:</TableCell>
              <TableCell align="right">Email:</TableCell>
              <TableCell align="right">Адрес:</TableCell>
              <TableCell align="right">Номер телефона:</TableCell>
              <TableCell align="right">Сумма:</TableCell>
              <TableCell align="right">Товары:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default connect(
  (state) => ({
    orders: state.products.orders,
  }),
  {
    fetchOrders,
  }
)(Orders);

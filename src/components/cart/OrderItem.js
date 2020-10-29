import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function OrderItem({ order }) {
  return (
    <TableRow key={order.id}>
      <TableCell>{order.id}</TableCell>
      <TableCell>{order.name}</TableCell>
      <TableCell>{order.email}</TableCell>
      <TableCell>{order.address}</TableCell>
      <TableCell>{order.number}</TableCell>
      <TableCell>{order.total}</TableCell>
      <TableCell align="right">
        {order.cartItems.map((item) => (
          <div>
            {item.count} {" x "} {item.title}
          </div>
        ))}
      </TableCell>
    </TableRow>
  );
}

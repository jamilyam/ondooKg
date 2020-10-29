import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "./style.css";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  removeItemFromCart,
  addQuantity,
  subQuantity,
} from "../../redux/products/actions";


export default function CartItem({ item, count }) {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(item));
  };

  const handleAddQuantity = (id) => {
    dispatch(addQuantity(id));
  };

  const handleSubtractQuantity = (id) => {
    dispatch(subQuantity(id));
  };
  return (
    <TableRow key={item.id}>
      <TableCell component="th" scope="row">
        <img src={item.image} alt={item.title}></img>
      </TableCell>
      <TableCell component="th" scope="row">
        {item.title}
      </TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>{item.salePrice}</TableCell>
      <TableCell>
        <button
          className="material-icons"
          onClick={() => handleAddQuantity(item.id)}
        >
          arrow_drop_up
        </button>
        <span className="count">{item.count || 1}</span>
        <button
          className="material-icons"
          onClick={() => handleSubtractQuantity(item.id)}
        >
          arrow_drop_down
        </button>
      </TableCell>
      <TableCell align="right">
        {(item.salePrice || item.price) * (item.count || 1)}
      </TableCell>
      <TableCell>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={handleRemoveFromCart}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

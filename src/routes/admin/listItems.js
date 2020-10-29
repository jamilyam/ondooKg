import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIcon from "@material-ui/icons/Assignment";
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { signout } from "../../redux/firebaseAuth/actions/auth";


export default function MainListItems(){ 
  
  const history = useHistory();

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };

  return (
    <div>
      <ListItem button onClick={() => history.replace("/admin")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Отчет" />
      </ListItem>
      <ListItem button onClick={() => history.replace("/admin/orders")}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Заказы" />
      </ListItem>
      <ListItem button onClick={() => history.replace("/admin/productsList")}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Список товаров" />
      </ListItem>
      <ListItem button onClick={() => history.replace("/admin/addForm")}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Добавить товар" />
      </ListItem>
      <ListItem button onClick={() => history.replace("/admin/editForm")}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Редактировать товар" />
      </ListItem>
      <ListItem button onClick={logout}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
      </ListItem>
    </div>
  );
}

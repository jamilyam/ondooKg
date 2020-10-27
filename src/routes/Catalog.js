import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { useHistory, useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { List } from "@material-ui/core";
import CategoryPage from "../components/CategoryPage";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    flexGrow: 1,
    maxWidth: 400,
  },
}));

export default function Catalog() {
  const classes = useStyles();

  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const history = useHistory();
  const handleChangeFilter = (query) => {
    // e.stopPropagation();
    history.replace(location.pathname + query);
  };

  const Categories = () => (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
      <TreeItem
        nodeId="1"
        label="Стройматериалы"
        button
        // onClick={() => handleChangeFilter("")}
        selected={search.get("category") == null}
      >
        <TreeItem
          nodeId="2"
          label="Сухие смеси"
          button
          onClick={() => handleChangeFilter("?category=suhie")}
          selected={search.get("category") === "suhie"}
        />
        <TreeItem
          nodeId="3"
          label="Строительное оборудование"
          button
          onClick={() => handleChangeFilter("?category=oborud")}
          selected={search.get("category") === "oborud"}
        />
        <TreeItem
          nodeId="4"
          label="Облицованные материалы"
          button
          onClick={() => handleChangeFilter("?category=oblic")}
          selected={search.get("category") === "oblic"}
        />
      </TreeItem>
      <TreeItem
        nodeId="5"
        label="Электротовары"
        button
        // onClick={() => handleChangeFilter("?category=electro")}
        selected={search.get("category") === "electro"}
      >
        <TreeItem
          nodeId="6"
          label="Электроустановочные изделия"
          button
          onClick={() =>
            handleChangeFilter("?category=izdeliya")
          }
          selected={search.get("category") === "izdeliya"}
        />
        <TreeItem
          nodeId="7"
          label="Кабель и монтаж"
          button
          onClick={() => handleChangeFilter("?category=cabel")}
          selected={search.get("category") === "cabel"}
        />
        <TreeItem
          nodeId="8"
          label="Удлинители и тройники"
          button
          onClick={() => handleChangeFilter("?category=udlinit")}
          selected={search.get("category") === "udlinit"}
        />
      </TreeItem>
      <TreeItem
        nodeId="9"
        label="Сантехника"
        button
        onClick={() => handleChangeFilter("?category=santeh")}
        selected={search.get("category") === "santeh"}
      >
        <TreeItem nodeId="10" label="Ванны и комплектующие" />
        <TreeItem nodeId="11" label="Душевые кабины" />
        <TreeItem nodeId="12" label="Смесители" />
      </TreeItem>
      <TreeItem nodeId="13" label="Краски">
        <TreeItem nodeId="14" label="Краски для внутренних работ" />
        <TreeItem nodeId="15" label="Инструменты для покраски" />
        <TreeItem nodeId="16" label="Клеи" />
      </TreeItem>
      <TreeItem nodeId="17" label="Инструменты">
        <TreeItem nodeId="18" label="Электроинструменты" />
        <TreeItem nodeId="19" label="Ручной инструмент" />
        <TreeItem nodeId="20" label="Организация рабочего места" />
      </TreeItem>
      <TreeItem nodeId="21" label="Кухни">
        <TreeItem nodeId="22" label="Мебель для кухни" />
        <TreeItem nodeId="23" label="Мойка и смесители" />
        <TreeItem nodeId="24" label="Кухонные аксессуары" />
      </TreeItem>
    </TreeView>
  );

  return (
    <div>

        <List>
          <Categories/>
        </List>

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <CategoryPage />
        </Grid>
      </Container>
    </div>
  );
}

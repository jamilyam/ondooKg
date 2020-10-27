/* eslint-disable */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Stepper, Step, StepLabel } from "@material-ui/core";

const styles = ({ breakpoints }) => ({
  root: {
    padding: 16,
    [breakpoints.up("sm")]: {
      padding: 24,
      maxWidth: 500,
      margin: "auto",
    },
    [breakpoints.up("md")]: {
      maxWidth: 700,
    },
  },
});

const AboutUs = ({ classes }) => (
  <div className={classes.root}>
    <Typography weight={"bold"} variant={"h1"} gutterBottom>
      О КОМПАНИИ <Link underline={"none"}>ONDOO.KG</Link>
    </Typography>
    <Typography indent={"small"}>
      Ondoo.kg — международная компания-ритейлер, специализирующаяся на продаже
      товаров для строительства, отделки и обустройства дома, дачи и сада. Леруа
      Мерлен помогает людям во всем мире благоустроить жилье и улучшить качество
      жизни.
    </Typography>
    <br />
    <br />
    <br />
    <Typography>
      Эти бренды различны по концепции и формату, но успешно дополняют друг
      друга на базе единых ценностей и общей цели — помочь каждому создать дом
      своей мечты.
    </Typography>
    <Typography>
      GROUPE ADEO занимает 1-е место в Европе и 3-е место в мире по объемам
      продаж, включает в себя магазины DIY различных форматов (гипермаркеты,
      средние и малые магазины, дискаунтеры) в Греции, Бразилии, Франции,
      Италии, Польше, Португалии, Испании, России, Китае, Турции, Румынии и
      Украине.
    </Typography>
    <Typography>
      <b>Леруа Мерлен</b> — это 325 магазинов во всем мире. Леруа Мерлен
      предлагает своим клиентам большой выбор качественных товаров, доступные
      большинству покупателей цены и высокий уровень обслуживания. Во всех
      магазинах представлен широкий ассортимент товаров по пяти основным
      направлениям: дом, интерьер, строительные материалы, ремонт и сад.
    </Typography>
    <Typography>
      Лучшая реклама для Леруа Мерлен — довольный покупатель, который смог
      реализовать свои проекты в рамках намеченного бюджета.
    </Typography>
    <br />
    <br />
    <Typography weight={"bold"} variant={"h2"} gutterBottom>
      ИСТОРИЯ <Link underline={"none"}>ONDOO.KG</Link>
    </Typography>
    <br />
    <Stepper>
      <Step key="Открытие">
        <StepLabel>Открытие первого магазина</StepLabel>
      </Step>
      <Step key="Создание">
        <StepLabel>Создание сайта</StepLabel>
      </Step>
      <Step key="Запуск">
        <StepLabel>Запуск сайта</StepLabel>
      </Step>
    </Stepper>
  </div>
);
export default withStyles(styles)(AboutUs);

import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { TextField, Container, Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <CssBaseline />
        <Container maxWidth="lg">
          <Grid justify={"center"}>
            <form>
              <TextField
                id="standard-basic"
                label="Card number"
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </form>
            <form>
              <TextField
                id="standard-basic"
                label="Card holder name"
                type="name"
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </form>
            <form>
              <TextField
                id="standard-basic"
                label="Expire date"
                type="tel"
                name="expiry"
                placeholder="Expire date"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </form>
            <form>
              <TextField
                id="standard-basic"
                label="CVC/CVV code"
                type="tel"
                name="cvc"
                placeholder="CVC code"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </form>
          </Grid>
        </Container>
      </div>
    );
  }
}

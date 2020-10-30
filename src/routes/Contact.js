import React, { Component } from "react";
import {
  Container,
  Grid,
  Typography
} from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";

export class Contact extends Component {
  render() {
    return (
      <Container maxWidth="md">
        <Grid item xs={12} md={6}>
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Связаяться с нами</h2>
                  <p>
                    Пожалуйста заполните форму для того чтобы мы связались с
                    Вами.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Отправить
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Конатактные данные</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker">ул Исанова 141</i> Address
                  </span>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> 0770540005
                  </span>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o">jamilyam312@gmail.com</i>{" "}
                    Email
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <Typography align={"left"} gutterBottom color={"textPrimary"}>
                <a href="https://www.instagram.com/">
                  <InstagramIcon />
                </a>
                <a href="https://www.youtube.com/">
                  <YouTubeIcon />
                </a>
                <a href="ttps://www.facebook.com/">
                  <FacebookIcon />
                </a>
              </Typography>
            </div>
          </div>
        </Grid>
      </Container>
    );
  }
}

export default Contact;

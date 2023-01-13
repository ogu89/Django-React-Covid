import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
const baseUrl = "http://127.0.0.1.:8000/api/contact/";

function Contact() {
  const [contactData, setContactData] = useState({
    full_name: "",
    email: "",
    inquiry_txt: "",
    status: "",
  });

  const handleChange = (event) => {
    // console.log(event);
    setContactData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const { full_name, email, inquiry_txt } = contactData;

  const submitForm = () => {
    const contactFormData = new FormData();
    contactFormData.append("full_name", contactData.full_name);
    contactFormData.append("email", contactData.email);
    contactFormData.append("inquiry_txt", contactData.inquiry_txt);

    axios.post(baseUrl, contactFormData).then((response) => {
        setContactData({
          full_name: "",
          email: "",
          inquiry_txt: "",
          status: "success",
        });
      })
      .catch((error) => {
        alert("Something wrong happend");
        setContactData({'status': 'error'})
      });
    alert("Thanks for Inquiry");
  };

  return (
    <>
      <Typography variant="h2" style={{ margin: "10px" }}>
        Contact
      </Typography>
      <Card style={{ maxWidth: 700, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact us
          </Typography>
          <form onSubmit={submitForm}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  name="full_name"
                  label="Full name"
                  placeholder="Enter your full name"
                  variant="outlined"
                  value={full_name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  value={email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name="inquiry_txt"
                  label="Inquiry"
                  multiline
                  rows={4}
                  placeholder="Type your Inquiry"
                  variant="outlined"
                  value={inquiry_txt}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default Contact;

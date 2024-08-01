//

import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/joy';
import BasicTextFields from '../TextFields';
import emailjs from 'emailjs-com';
import './index.scss'; // Import the CSS file with responsive styles

export default function BasicCard() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formState, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="body1" className="card-title">
          To Mathew:
        </Typography>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-container">
            <BasicTextFields
              name="name"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
              width='100%'
            />
          </div>
          <div className="input-container">
            <BasicTextFields
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
              width='100%'
            />
          </div>
          <div className="input-container">
            <BasicTextFields
              name="message"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              multiline
              rows={8}
              width='100%'
            />
          </div>
          <Button type="submit" className="submit-button">Send</Button>
        </form>
      </CardContent>
    </Card>
  );
}

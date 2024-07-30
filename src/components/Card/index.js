import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/joy';
import BasicTextFields from '../TextFields';
import emailjs from 'emailjs-com';

export default function BasicCard() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '', // Add message to the state
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
    <Card sx={{
      width: 900,
      height: 650, // Adjust height to accommodate message field
      marginLeft: "20%",
      size: "21px",
      marginTop: "6%",
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',
      backgroundColor: '#F5F5DC',
      borderColor: '#4d4d4e'
    }}>
      <CardContent>
        <Typography variant="body1" sx={{
          fontStyle: 'italic',
          fontSize: '4rem',
          color: '#333333',
          marginBottom: '2rem',
        }}>
          To Mathew:
        </Typography>
        <form onSubmit={handleSubmit}>
        <div style={{ marginTop: '10%', marginLeft: "-150%" }}>
          <BasicTextFields
            name="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
            width = '35ch'
          />
        </div>
          <div style={{ marginTop: '-23%', marginLeft: "80%" }}>
            <BasicTextFields
              name="email"
              placeholder="Email"
              width = '35ch'
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginTop: '4rem', marginLeft: '-66%', width: '280px', }}>
          <BasicTextFields
            name="message"
            placeholder="Message"
            value={formState.message}
            onChange={handleChange}
            multiline
            rows={10}
            width='225%' // Adjust width as needed
            height='12rem' // Adjust height as needed
            />
          </div>
          <Button type="submit" sx={{ marginTop: '22rem' }}>Send</Button>
        </form>
      </CardContent>
    </Card>
  );
}


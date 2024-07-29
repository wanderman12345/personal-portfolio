import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ name, value, onChange, placeholder, width, height, multiline, rows }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: width },
        '& label': {
          fontSize: '1.7rem', // Font size of the label
        },
        '& .MuiInputBase-root': {
          fontSize: '1.7rem', // Font size of the input text
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label={placeholder}
        name={name}
        variant="outlined"
        value={value}
        onChange={onChange}
        fullWidth
        multiline={multiline}
        rows={rows}
        sx={{
          height: height, // Apply height if provided
          '& .MuiOutlinedInput-root': {
            borderBottom: '2px solid white', // Border (underline) color and style
            '&:focus-within': {
              borderBottomColor: 'white', // Border color when focused
            },
          },
          '& .MuiInputBase-input': {
            padding: '12px', // Padding for better readability
          },
        }}
        InputProps={{
          sx: { borderBottomColor: 'white' }, // Initial border color
        }}
      />
    </Box>
  );
}

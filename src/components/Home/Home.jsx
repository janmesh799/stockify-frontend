import { useState } from "react";
import { Box, TextField, FormControl, Typography } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const style = {
  "@media (max-width: 480px)": {
    width: "75vw",
  },
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25vw",
  bgcolor: "background.paper",
  border: "2px solid none",
  boxShadow: 24,
  p: 4,
};

const inputStyle = {
  width: "100%",
  margin: "auto",
  marginTop: "0.75rem",
};
const Home = () => {
  const [creds, setCreds] = useState({
    principle: null,
    expectedDate: "",
    factor: null,
  });
  const [date, setDate] = useState(null);
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setCreds({ ...creds, [id]: value });
  };
  const handleSubmit = () => {};
  return (
    <Box sx={style}>
      <Typography
        align="center"
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        Input details for investment
      </Typography>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "1rem 1rem",
        }}
      >
        <TextField
          sx={inputStyle}
          onChange={handleOnChange}
          value={creds.principle}
          name="principle"
          id="principle"
          label="principle"
          variant="filled"
        />
        <TextField
          sx={inputStyle}
          onChange={handleOnChange}
          value={creds.factor}
          name="factor"
          id="factor"
          label="factor"
          variant="filled"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ margin: "0.5rem 1rem 0rem 0.5rem" }}
            format="DD-MM-YYYY"
            label="end Date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>
      </FormControl>
    </Box>
  );
};

export default Home;

import React, { useState } from 'react';
import { 
  TextField, Button, Typography, Box, 
  makeStyles, IconButton, Select, MenuItem, FormControl, InputLabel
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'relative',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: theme.shape.borderRadius,
    maxWidth: 400,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
}));

const initialFormData = {
  referrerName: '',
  referrerEmail: '',
  refereeName: '',
  refereeEmail: '',
  courseName: '',
};

const courses = [
  'Product Management',
  'Strategy & Leadership',
  'Business Management',
  'Intech',
  'Senior Management',
  'Data Science',
  'Digital Transformation',
  'Business Analytics'
];

function ReferralFormModal({ handleClose }) {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://accredian-backend-task-7uku.onrender.com/api/referral', formData);
      toast.success('Referral submitted successfully');
      handleModalClose();
    } catch (error) {
      console.error('Error submitting referral:', error);
      if (error.response && error.response.data) {
        toast.error(`Error: ${error.response.data.error}`);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const handleModalClose = () => {
    handleReset();
    handleClose();
  };

  return (
    <div className={classes.paper}>

      <IconButton className={classes.closeButton} onClick={handleModalClose}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h6" gutterBottom>
        Refer a Friend
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="referrerName"
          label="Your Name"
          value={formData.referrerName}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="referrerEmail"
          label="Your Email"
          type="email"
          value={formData.referrerEmail}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="refereeName"
          label="Friend's Name"
          value={formData.refereeName}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="refereeEmail"
          label="Friend's Email"
          type="email"
          value={formData.refereeEmail}
          onChange={handleChange}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="program-label">Program</InputLabel>
          <Select
            labelId="program-label"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          >
            {courses.map((course, index) => (
              <MenuItem key={index} value={course}>
                {course}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box className={classes.buttonGroup}>
          <Button type="button" variant="outlined" color="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit Referral
          </Button>
        </Box>
      </form>
      
    </div>
  );
}

export default ReferralFormModal;

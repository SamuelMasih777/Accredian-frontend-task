import React, { useState } from 'react';
import { 
  Container, Typography, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, makeStyles, IconButton, Grid, Button, Modal, Backdrop, Fade 
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SchoolIcon from '@material-ui/icons/School';
import ReferralFormModal from './RefferalModal'; // Make sure to import your modal component

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 0),
  },
  tableContainer: {
    marginBottom: theme.spacing(4),
    boxShadow: theme.shadows[3], // Adding shadow to the table container
    borderRadius: theme.spacing(2), // Adding border radius to the table container
    overflow: 'hidden', // Ensure contents don't overflow rounded corners
    maxWidth: 900, // Limiting max width for the table container
    margin: 'auto', // Centering the container
  },
  table: {
    minWidth: 200,
  },
  tableCell: {
    borderRight: `1px solid ${theme.palette.divider}`, // Adding border line between cells
  },
  tableBody: {
    backgroundColor: '#e6f7ff', // Light blue background for table body
  },
  categoryRow: {
    backgroundColor: 'white', // Blue color for the category row
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer', // Make cursor pointer to indicate clickable
    '&:hover': {
      backgroundColor: '#3385ff', // Darker shade of blue on hover
    },
  },
  tableHead: {
    backgroundColor: '#80bfff', // Light blue background for table head
    '& th': {
      color: '#0d47a1', // Dark blue text for table head
      fontWeight: 'bold',
    },
  },
  categoryTableHead: {
    backgroundColor: '#3385ff', // Blue background for category table head
    '& th': {
      color: 'white', // White text for category table head
      fontWeight: 'bold',
    },
  },
  categoryTableBody: {
    backgroundColor: 'white', // White background for category table body
    '& td': {
      color: 'black', // Black text for category table body
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
  button: {
    padding: theme.spacing(2),
    color: 'white',
    backgroundColor: '#3385ff', // Blue color for the button
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0),
    borderRadius: theme.spacing(2), // Adding border radius to the modal
  },
  typography: {
    marginBottom: theme.spacing(8), // Adding margin bottom to Typography
    "& span": {
      color: '#3385ff',
    },
  },
  icon: {
    color: '#0d47a1', // Blue color for the icon
    marginRight: theme.spacing(1), // Margin right to create space between icon and text
  },
}));

function RewardsTable() {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
  const [open, setOpen] = useState(false); // State to manage modal open/close

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const programs = [
    { name: 'Professional Certificate Program in Product Management', referrerBonus: 7000, refereeBonus: 9000 },
    { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: 9000, refereeBonus: 11000 },
    { name: 'Executive Program in Data Driven Product Management', referrerBonus: 10000, refereeBonus: 10000 },
    { name: 'Executive Program in Product Management and Digital Transformation', referrerBonus: 10000, refereeBonus: 10000 },
    { name: 'Executive Program in Product Management', referrerBonus: 10000, refereeBonus: 10000 },
  ];
  
  const categories = [
    'Product Management',
    'Strategy & Leadership',
    'Business Management',
    'Intech',
    // 'Senior Management',
    // 'Data Science',
    // 'Digital Transformation',
    // 'Business Analytics',
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category); // Toggle category visibility
  };

  return (
    <section className={classes.section}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom className={classes.typography}>
          What Are The <span>Referral Benefits?</span>
        </Typography>
        
        <Grid container spacing={4}>          
          {/* Categories Table */}
          <Grid item xs={12} md={3}>
            <Paper className={classes.tableContainer}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="categories table">
                  <TableHead className={classes.categoryTableHead}>
                    <TableRow>
                      <TableCell>All Program</TableCell>
                      <TableCell><ArrowForwardIcon /></TableCell>                               
                    </TableRow>
                  </TableHead>
                  <TableBody className={classes.categoryTableBody}>
                    {categories.map((category, index) => (
                      <TableRow key={index} className={classes.categoryRow} onClick={() => handleCategoryClick(category)}>
                        <TableCell>{category}</TableCell>
                        <TableCell align="right">
                          <IconButton>
                            {selectedCategory === category ? <ExpandMoreIcon /> : <ArrowForwardIcon />}
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
          {/* Main Rewards Table */}
          <Grid item xs={12} md={8}>
            <Paper className={classes.tableContainer}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="main rewards table">
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                      <TableCell>Program</TableCell>
                      <TableCell align="center">Referrer Bonus</TableCell>
                      <TableCell align="center">Referee Bonus</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className={classes.tableBody}>
                    {programs.map((program, index) => (
                      <TableRow key={index}>
                        <TableCell className={classes.tableCell} component="th" scope="row">
                          <SchoolIcon className={classes.icon} />
                          {program.name}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="center">₹ {program.referrerBonus}</TableCell>
                        <TableCell className={classes.tableCell} align="center">₹ {program.refereeBonus}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          {/* Refer Now Button */}
          <Grid item xs={12}>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="large"
                onClick={handleOpen} // Open modal on button click
              >
                Refer Now
              </Button>
            </div>
          </Grid>

          {/* Modal */}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
          >
            <Fade in={open}>
              <div className={classes.modalPaper}>
                <ReferralFormModal handleClose={handleClose} />
              </div>
            </Fade>
          </Modal>
        </Grid>
      </Container>
    </section>
  );
}

export default RewardsTable;

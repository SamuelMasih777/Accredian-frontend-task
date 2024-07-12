import React, { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
  Box,
  Button,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 0),
  },
  callToAction: {
    backgroundColor: '#3385ff',
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: theme.spacing(2),
    fontSize: '2rem', // Increase the size of the icon
  },
  title: {
    marginBottom: theme.spacing(4),
    "& span": {
      color: '#3385ff',
    },
  },
  categoryButton: {
    textAlign: "left",
    justifyContent: "center",
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
    "&.active": {
      backgroundColor: 'white',
      color: "#3385ff",
    },
  },
  accordion: {
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
  },
  accordionSummary: {
    padding: 0,
  },
  question: {
    fontWeight: "bold",
    color: '#3385ff',
  },
  answer: {
    color: theme.palette.text.secondary,
  },
}));

function FAQSection() {
  const classes = useStyles();
  const [activeCategory, setActiveCategory] = useState("Eligibility");

  const categories = ["Eligibility", "How To Use?", "Terms & Conditions"];

  const faqs = {
    Eligibility: [
      {
        question:
          "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer:
          "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        question: "What is the minimum system configuration required?",
        answer:
          "A computer with a stable internet connection is sufficient for accessing our online learning platform.",
      },
    ],
    "How To Use?": [
      {
        question: "What is the minimum system configuration required?",
        answer:
          "A computer with a stable internet connection is sufficient for accessing our online learning platform.",
      },
    ],
    "Terms & Conditions": [
      // Add FAQs for Terms & Conditions
    ],
  };

  return (
    <section id="faqs" className={classes.section}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom className={classes.title}>
          Frequently Asked <span>Questions</span>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            {categories.map((category) => (
              <Button
                key={category}
                fullWidth
                variant="outlined"
                className={`${classes.categoryButton} ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </Grid>
          <Grid item xs={12} md={9}>
            {faqs[activeCategory].map((faq, index) => (
              <Accordion key={index} className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}a-content`}
                  id={`panel${index}a-header`}
                  className={classes.accordionSummary}
                >
                  <Typography className={classes.question}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.answer}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
        <Box className={classes.callToAction}>
          <Box display="flex" alignItems="center">            
            <HeadsetMicIcon className={classes.icon} />
            <Box>
              <Typography variant="h6">Want to delve deeper into the program?</Typography>
              <Typography variant="body2">Share your details to receive expert insights from our program team!</Typography>
            </Box>
          </Box>
          <Button variant="contained" color="secondary">
            Get in touch
          </Button>
        </Box>
      </Container>
    </section>
  );
}

export default FAQSection;

import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Link as ScrollLink } from 'react-scroll';

const sections = ['Refer', 'Benefits', 'FAQs', 'Support'];

function NavigationBar({ navBarClass, navButtonClass }) {
  return (
    <Box className={navBarClass}>
      {sections.map((section) => (
        <ScrollLink
          key={section}
          to={section.toLowerCase()}
          spy={true}
          smooth={true}
          offset={-70} // Adjust this value based on your header height
          duration={500}
          activeClass="active" // Specify the active class
        >
          <Button className={navButtonClass}>
            {section}
          </Button>
        </ScrollLink>
      ))}
    </Box>
  );
}

export default NavigationBar;

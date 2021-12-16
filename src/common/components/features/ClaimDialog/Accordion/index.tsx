import React from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails, Typography, Avatar,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './useStyles';

interface ClaimAccordionProps {
  title: string
}

const ClaimAccordion: React.FC<ClaimAccordionProps> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Accordion defaultExpanded elevation={0} className={classes.accordion}>
      <AccordionSummary className="summary">
        <div className="icon">
          <ExpandMoreIcon />
        </div>
        {title}
      </AccordionSummary>
      <AccordionDetails className="details">
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default ClaimAccordion;

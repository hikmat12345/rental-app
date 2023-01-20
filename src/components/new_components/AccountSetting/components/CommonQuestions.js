import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import React, { useState } from 'react';
import './commonquestions.css';

export default function CommonQuestions() {
  return (
    <>
      <div className='common-question-container'>
        <h5>Common Questions</h5>

        <div className='accordion-container'>
          <Accordion className='accordion-top'>
            <AccordionSummary
              expandIcon={
                <span className='MuiAccordionSummary-expandIcon'>+</span>
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
              classes={{
                expandIcon: 'MuiAccordionSummary-expandIcon',
              }}
            >
              <div className='head'>
                Where does the discount go once my friends sign up?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className='body'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accordion-btw'>
            <AccordionSummary
              expandIcon={
                <span className='MuiAccordionSummary-expandIcon'>+</span>
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className=''>How to redeem my rewards?</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accordion-bottom'>
            <AccordionSummary
              expandIcon={
                <span className='MuiAccordionSummary-expandIcon'>+</span>
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className=''>How many people can I invite?</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}

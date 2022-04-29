import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';

const AccordionComp = ({ title, text }) => (
  <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>{text}</Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export default AccordionComp;

AccordionComp.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

AccordionComp.defaultProps = {
  title: 'Accordion Dropdown',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`,
};

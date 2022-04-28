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
  title: '',
  text: '',
};

import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';

function AccordionComp({ title, children }) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComp;

AccordionComp.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AccordionComp.defaultProps = {
  title: '',
};

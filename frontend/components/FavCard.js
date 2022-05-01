// /* eslint-disable camelcase */
// import Card from 'react-bootstrap/Card';
// import PropTypes from 'prop-types';
// import { Button, ButtonGroup } from 'react-bootstrap';
// import { BsShieldFillCheck } from 'react-icons/bs';
// import { useRouter } from 'next/router';

// const FavCard = ({
//   // img,
//   uuid,
//   is_safebar,
//   name,
//   street_address,
//   city,
//   zip,
//   phone,
//   func,
//   bar_report_count,
// }) => {
//   const router = useRouter();

//   const handleClick = (id) => {
//     router.push(`/report/${id}`);
//   };

//   return (
//     <Card style={{ width: '18rem' }}>
//       {/* <Card.Img variant="top" src={img} /> */}
//       <Card.Body>
//         <Card.Title>
//           {is_safebar ? <BsShieldFillCheck className="shieldIcon" size={25} /> : ''}{' '}
//           {name}
//         </Card.Title>
//         <Card.Text>
//           {street_address}, {city} {zip}
//           <br />
//           <a href={`tel:${phone}`}>{phone}</a>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default FavCard;

// FavCard.propTypes = {
//   // img: PropTypes.string,
//   uuid: PropTypes.string.isRequired,
//   is_safebar: PropTypes.bool,
//   name: PropTypes.string.isRequired,
//   street_address: PropTypes.string,
//   city: PropTypes.string.isRequired,
//   zip: PropTypes.string,
//   phone: PropTypes.string,
//   func: PropTypes.func.isRequired,
//   bar_report_count: PropTypes.number,
// };

// FavCard.defaultProps = {
//   // img: '/sac-logo.png',
//   is_safebar: false,
//   street_address: '',
//   zip: '',
//   phone: '',
//   bar_report_count: 0,
// };

/* eslint-disable react/prop-types */
// import { AuthConsumer, AuthProvider } from '../utils/context/authContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // <AuthProvider>
    //   <AuthConsumer>
    //     {({ user, userLoading }) => (
    <div className="container">
      {/* all pages have access to the user object */}
      <Component {...pageProps} />
    </div>
    //     )}
    //   </AuthConsumer>
    // </AuthProvider>
  );
}

export default MyApp;

/* eslint-disable react/prop-types */
import { AuthConsumer, AuthProvider } from '../utils/context/authContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthConsumer>
        {({ user, userLoading }) => (
          <div>
            {/* all pages have access to the user object */}
            {userLoading ? 'Loading...'
              : (
                <>
                  <HeaderNav />
                  <div className="container">
                    <Component {...pageProps} user={user} />
                  </div>
                  <FooterNav />
                </>
              )}
          </div>
        )}
      </AuthConsumer>
    </AuthProvider>
  );
}

export default MyApp;

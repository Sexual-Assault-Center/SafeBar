/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import firebase from 'firebase';
import { AuthConsumer, AuthProvider } from '../utils/context/authContext';
import * as ga from '../utils/ga';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';

function MyApp({ Component, pageProps }) {
  // const [user, setUser] = useState(null);
  const router = useRouter();

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((authed) => {
  //     if (authed) {
  //       const userInfoObj = {
  //         uid: authed.uid,
  //       };
  //       setUser(userInfoObj);
  //     } else if (user || user === null) {
  //       setUser(false);
  //     }
  //   });
  // }, [user]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AuthProvider>
      <AuthConsumer>
        {({ user, userLoading }) => (
          <div className="layout-cont">
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

/* eslint-disable no-nested-ternary */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome, FaSearch } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { BiDrink } from 'react-icons/bi';
import { BsPersonCircle, BsExclamationCircle } from 'react-icons/bs';
import NAVIGATION from '../constants/navigation';
import { useAuth } from '../utils/context/authContext';
import { signInUser, signOutUser } from '../utils/auth';

export default function FooterNav() {
  const router = useRouter();
  const { user } = useAuth();

  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  const renderIcon = (name) => {
    let icon;
    switch (name) {
      case 'home':
        icon = <FaHome className="footerIcon" size={25} />;
        break;
      case 'explore':
        icon = <FaSearch className="footerIcon" size={20} />;
        break;
      case 'HELP':
        icon = (
          <BsExclamationCircle className="m-0 footerIcon helpIcon" size={40} />
        );
        break;
      case 'saved':
        icon = <BiDrink className="footerIcon" size={27} />;
        break;
      case 'login':
        icon = <BsPersonCircle className="footerIcon" size={25} />;
        break;
      default:
        break;
    }
    return icon;
  };
  return (
    <footer>
      <ul className="allFooterButtons">
        {NAVIGATION.FOOTER.map((el, i) => (
          <li
            key={i}
            className={classNames(
              router.pathname === `/${el.text === 'home' ? '' : el.path}`
                ? 'activeFooter'
                : '',
            )}
          >
            <Link href={`/${el.text === 'home' ? '' : el.path}`} passHref>
              <div
                className={classNames(
                  `footerBarOption ${el.path === 'help' ? 'help-nav' : ''}`,
                  el.path === 'saved' ? 'list-nav' : '',
                )}
              >
                <div
                  className={`${
                    el.path === 'help' ? 'help-icon' : 'optionIcon'
                  }`}
                >
                  {renderIcon(el.text)}
                </div>
                <p
                  className={`${
                    el.path === 'help' ? 'help-title' : 'optionTitle'
                  }`}
                >
                  {el.text}
                </p>
              </div>
            </Link>
          </li>
        ))}

        <li>
          <Button
            onClick={!user ? signInUser : signOutUser}
            className="auth-btn"
          >
            <div className="footerBarOption position-relative">
              <div className="optionIcon">{renderIcon('login')}</div>
              <p className="optionTitle">{!user ? 'login' : 'logout'}</p>
            </div>
          </Button>
        </li>
      </ul>
    </footer>
  );
}

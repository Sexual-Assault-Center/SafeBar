/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome, FaSearch, FaExclamation } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import NAVIGATION from '../constants/navigation';
import { useAuth } from '../utils/context/authContext';

export default function FooterNav() {
  const router = useRouter();
  const { user } = useAuth();

  const renderIcon = (name) => {
    let icon;
    switch (name) {
      case 'Home':
        icon = <FaHome className="footerIcon" />;
        break;
      case 'Explore':
        icon = <FaSearch className="footerIcon" />;
        break;
      case 'HELP':
        icon = <FaExclamation className="m-0 footerIcon" />;
        break;
      case 'Lists':
        icon = <BiDrink className="footerIcon" />;
        break;
      case 'Login':
        icon = <BsPersonCircle className="footerIcon" />;
        break;
      default:
        break;
    }
    return icon;
  };
  return (
    <footer>
      <ul className="allFooterButtons">
        {NAVIGATION.FOOTER.map((name, i) => {
          const lc = name.toLowerCase();

          return (
            <li
              key={i}
              className={router.pathname.includes(lc) ? 'activeFooter' : ''}
            >
              <Link
                href={lc === 'training' ? NAVIGATION.TRAINING_LINK : `/${lc}`}
                passHref
              >
                <div className="footerBarOption position-relative">
                  <p>{renderIcon(name)}</p>
                  <p className="optionTitle">
                    {!!user && name === 'Login' ? 'Logout' : name}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome, FaSearch, FaExclamation } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import NAVIGATION from '../constants/navigation';

export default function FooterNav() {
  const router = useRouter();

  const renderIcon = (name) => {
    let icon;
    switch (name) {
      case 'Home':
        icon = <FaHome />;
        break;
      case 'Explore':
        icon = <FaSearch />;
        break;
      case 'HELP':
        icon = (
          <div className="rounded-circle bg-primary icon-circle-style">
            <FaExclamation className="" />
          </div>
        );
        break;
      case 'Lists':
        icon = <BiDrink />;
        break;
      case 'Login':
        icon = <BsPersonCircle />;
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
              <Link href={lc === 'training' ? NAVIGATION.TRAINING_LINK : `/${lc}`} passHref>
                <div className="footerBarOption">
                  {renderIcon(name)}
                  <p className="optionTitle">{name}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import { useRouter } from 'next/router';
import NAVIGATION from '../constants/navigation';

export default function FooterNav() {
  const router = useRouter();
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
                  <p className="footerIcon">
                    <img
                      className="footerSvg"
                      src={`/footer/${lc}.svg`}
                      alt={`${lc} link`}
                    />
                  </p>
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

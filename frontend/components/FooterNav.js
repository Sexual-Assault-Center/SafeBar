/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function FooterNav() {
  const router = useRouter();
  return (
    <footer>
      <ul className="allFooterButtons">
        {['Bars', 'Lists', 'Help', 'Training', 'FAQs'].map((name, i) => {
          const lc = name.toLowerCase();

          return (
            <li
              key={i}
              className={router.pathname.includes(lc) ? 'activeFooter' : ''}
            >
              <Link href={`/${lc}`} passHref>
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

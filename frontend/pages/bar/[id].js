// USE FOR BAR DETAILS IF WE ARE ABLE TO GET THIS FAR
import { useRouter } from 'next/router';

export default function Bar() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Bar ID: {id}</div>;
}

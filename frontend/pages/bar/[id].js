import { useRouter } from 'next/router';

export default function Bar() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Bar ID: {id}</div>;
}

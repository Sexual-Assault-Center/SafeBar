import { useRouter } from 'next/router';

export default function Lists() {
  const router = useRouter();
  const { id } = router.query;

  return <div>List ID: {id}</div>;
}

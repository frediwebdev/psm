import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => window.location.href = 'https://partner.hp.com/group/upp-emea/technical-support'}>HP Portal</div>
      <div onClick={() => window.location.href = 'https://www.ricoh-europe.com/support/'}>Ricoh Portal</div>
    </div>
  );
};

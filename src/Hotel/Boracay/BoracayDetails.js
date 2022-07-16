import styles from './Boracay.module.css';
import BoracayDetails from './BoracayDetails';

const BoracayHotels = [
  {
    title: 'Weddings',
    image:
      'https://www.beaches.com/blog/content/images/2019/11/Beaches-Turks-Caicos-Beach-Wedding2.jpg',
    id: 1,
  },
  {
    title: 'Corporate',
    image:
      'https://www.lazorpoint.com/hubfs/Blog/New%20Website%20Hero%20Images%201905%20x%201301%20%289%29.png',
    id: 2,
  },
  {
    title: 'Milestones',
    image:
      'https://cdn0.weddingwire.com/vendor/537359/original/960/jpg/reception-rosales_51_953735-165212965895663.webp',
    id: 3,
  },
];

export default function MyReactComponent() {
  return (
    <>
      {BoracayHotels.map(({ title, image, id }) => (
        <div
          key={id}
          className={styles.HotelGatheringContainer + ' container mt-5'}
        >
          <a key={BoracayDetails.id} href="google.com" className={styles.photo}>
            <div className={styles.HotelGatheringImage}>
              <h1>{title}</h1>
              <img
                alt="wd2"
                src="https://www.lazorpoint.com/hubfs/Blog/New%20Website%20Hero%20Images%201905%20x%201301%20%289%29.png"
              />
              <div className={styles.glowwrap}>
                <i className={styles.glow}></i>
              </div>
            </div>
          </a>
        </div>
      )).join(' ')}
    </>
  );
}

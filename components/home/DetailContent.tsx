import styles from '@/styles/detail.module.scss';
import { Store } from '@/types/store';
import Image from 'next/image';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import Naver from 'public/images/naver.png';

interface Props {
  currentStore: Store | undefined;
  expanded: boolean;
}

const DetailContent = ({ currentStore, expanded }: Props) => {
  if (!currentStore) return null;
  return (
    <div
      className={`${styles.detailContent} ${expanded ? styles.expanded : ''}`}
    >
      <div className={styles.images}>
        {currentStore.images.slice(0, 3).map((image) => (
          <div
            key={image}
            style={{ position: 'relative', maxWidth: 120, height: 80 }}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="120px"
              style={{ objectFit: 'cover' }}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
              priority
            />
          </div>
        ))}
      </div>
      {expanded && (
        <>
          <div className={styles.description}>
            <h2>설명</h2>
            <p>{currentStore.description}</p>
          </div>
          <hr />
          <div className={styles.basicInfo}>
            <h2>기본 정보</h2>
            <div className="address">
              <IoLocationOutline size={20} />
              <span>{currentStore.address ?? '정보가 없습니다'}</span>
            </div>
            <div className="phone">
              <IoCallOutline size={20} />
              <span>{currentStore.phone ?? '정보가 없습니다'}</span>
            </div>
            <div className="naverUrl">
              <Image src={Naver} alt="naver" width={20} height={20} />
              <a
                href={`https://pcmap.place.naver.com/restaurant/${currentStore.nid}/home`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>네이버 상세 정보</span>
              </a>
            </div>
          </div>
          <hr />
          <div className={styles.menus}>
            <h2>메뉴</h2>
            <ul>
              {currentStore.menus?.map((menu) => (
                <li key={menu.name} className={styles.menu}>
                  <span className={styles.name}>{menu.name}</span>
                  <span className={styles.price}>{menu.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailContent;

import styles from './home.module.scss';
import family from '../../assets/family.png';
import {
  Button,
  Checkbox,
  Dropdown,
  Hyperlink,
  Tag,
  TextInput,
} from '../../components';

const DOCUMENT_TYPES = [
  { value: 'DNI', label: 'DNI' },
  { value: 'RUC', label: 'RUC' },
  { value: 'PASSPORT', label: 'Pasaporte' },
];

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__image}>
          <img src={family} alt='Home' />
        </div>
        <div className={styles['home__form-container']}>
          <div className={styles['home__form-container__header']}>
            <div className={styles['home__form-container__title']}>
              <Tag>Seguro Salud Flexible</Tag>
              <h1>Creado para ti y tu familia</h1>
            </div>

            <p className={styles['home__form-container__description']}>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría, 100% online.
            </p>
          </div>
          <div className={styles['home__form-container__body']}>
            <div className={styles['home__form-container__document-container']}>
              <Dropdown options={DOCUMENT_TYPES} groupVariant='left' />
              <TextInput
                fullWidth
                label='Nro. de documento'
                groupVariant='right'
              />
            </div>
            <TextInput fullWidth label='Celular' />
          </div>
          <div className={styles['home__form-container__terms']}>
            <Checkbox label='Acepto lo Política de Privacidad' />
            <Checkbox label='Acepto lo Política de Comunicaciones Comerciales' />
            <Hyperlink href='#'>Aplican Términos y Condiciones.</Hyperlink>
          </div>
          <div className={styles['home__form-container__footer']}>
            <Button variant='dark'>Cotiza aqui</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

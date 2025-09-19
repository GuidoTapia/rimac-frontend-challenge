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
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { useUser } from '../../shared/user/use-auth';

const DOCUMENT_TYPES = [
  { value: 'DNI', label: 'DNI' },
  { value: 'RUC', label: 'RUC' },
  { value: 'PASSPORT', label: 'Pasaporte' },
];

type Inputs = {
  documentType: string;
  documentNumber: string;
  phone: string;
  privacyPolicy: boolean;
  commercialCommunications: boolean;
};

const Home: React.FC = () => {
  const { registerUser } = useUser();
  const { handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      documentType: 'DNI',
      documentNumber: '',
      phone: '',
      privacyPolicy: false,
      commercialCommunications: false,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = data => registerUser(data);

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__image}>
          <img src={family} alt='Home' />
        </div>
        <form
          className={styles['home__form-container']}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles['home__form-container__header']}>
            <div className={styles['home__form-container__header__container']}>
              <div className={styles['home__form-container__title']}>
                <Tag>Seguro Salud Flexible</Tag>
                <h1>Creado para ti y tu familia</h1>
              </div>
              <div className={styles['home__form-container__header__image']}>
                <img src={family} alt='Home' />
              </div>
            </div>
            <div
              className={styles['home__form-container__header__separator']}
            />

            <p className={styles['home__form-container__description']}>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría, 100% online.
            </p>
          </div>
          <div className={styles['home__form-container__body']}>
            <div className={styles['home__form-container__document-container']}>
              <Controller
                render={({ field, formState: { errors } }) => (
                  <Dropdown
                    options={DOCUMENT_TYPES}
                    groupVariant='left'
                    error={errors.documentType?.message}
                    {...field}
                  />
                )}
                name='documentType'
                control={control}
              />
              <Controller
                render={({ field, formState: { errors } }) => (
                  <TextInput
                    fullWidth
                    label='Nro. de documento'
                    groupVariant='right'
                    error={errors.documentNumber?.message}
                    maxLength={20}
                    {...field}
                  />
                )}
                name='documentNumber'
                control={control}
                rules={{
                  required: { message: 'Documento requerido', value: true },
                  maxLength: {
                    message: 'Documento debe tener menos de 20 caracteres',
                    value: 20,
                  },
                }}
              />
            </div>
            <Controller
              render={({ field, formState: { errors } }) => (
                <TextInput
                  fullWidth
                  label='Celular'
                  error={errors.phone?.message}
                  maxLength={12}
                  {...field}
                />
              )}
              name='phone'
              control={control}
              rules={{
                required: { message: 'Celular requerido', value: true },
                maxLength: {
                  message: 'Celular debe tener menos de 12 caracteres',
                  value: 12,
                },
              }}
            />
          </div>
          <div className={styles['home__form-container__terms']}>
            <Controller
              render={({ field, formState: { errors } }) => (
                <Checkbox
                  label='Acepto lo Política de Privacidad'
                  checked={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  error={errors.privacyPolicy?.message}
                />
              )}
              name='privacyPolicy'
              control={control}
              rules={{
                required: {
                  message: 'Debe leer y aceptar la política de privacidad',
                  value: true,
                },
              }}
            />
            <Controller
              render={({ field, formState: { errors } }) => (
                <Checkbox
                  label='Acepto lo Política de Comunicaciones Comerciales'
                  checked={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  error={errors.commercialCommunications?.message}
                />
              )}
              name='commercialCommunications'
              control={control}
              rules={{
                required: {
                  message:
                    'Debe leer y aceptar la política de comunicaciones comerciales',
                  value: true,
                },
              }}
            />
            <Hyperlink href='#'>Aplican Términos y Condiciones.</Hyperlink>
          </div>
          <div className={styles['home__form-container__footer']}>
            <Button variant='dark' type='submit'>
              Cotiza aqui
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

import { useTranslation } from 'react-i18next';

const Coppyright = () => {
  const { t, i18n } = useTranslation();
  return <p className="text-center mt-5 mb-3 text-gray-600 hover:scale-50">{t("copyright")}</p>
}

export default Coppyright
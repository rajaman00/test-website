import React, { useEffect } from 'react';
import '../components/css/VMVsection.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

function VMVsection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

   const { i18n } = useTranslation();
    
        const changeLanguage = (language) => {
            i18n.changeLanguage(language);
        };
        const { t } = useTranslation();
  return (
    <div className="parentVMV">
      <div className="background-image"></div>
      <div className="VMV">
        {/* Vision Div */}
        <div className="vision" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div className="text-header-container">
            <h4 className='text-header'> {t('vision')} </h4>
          </div>
          <div className="text-content">
            <ul><li>
              {t('vision-text')}
            </li> </ul> </div>
        </div>

        {/* Mission Div */}
        <div className="mission" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div className="text-header-container">
            <h4 className='text-header'>  {t('mission')}  </h4>
          </div>
          <div className="text-content">
            {t('mission-text 1:')}
            <ul>
              <li>{t('mission-text 2')}</li>
              <li>{t('mission-text 3')}</li>
              <li>{t('mission-text 4')}</li>
            </ul>
          </div>
        </div>

        {/* Values Div */}
        <div className="value" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div className="text-header-container">
            <h4 className='text-header'> {t('values')} </h4>
          </div>
          <div className="text-content">
            <ul>
              <li>{t('values-text 1')}</li>
              <li>{t('values-text 2')}</li>
              <li>{t('values-text 3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VMVsection;
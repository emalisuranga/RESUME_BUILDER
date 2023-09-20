// YourComponentLogic.js
import { useI18n } from 'vue-i18n';

export const TranslationMixin = {
    setup() {
        const { t } = useI18n();
        console.log('Translations:');

        return {
            // Your translation properties
            firstNameLabel: t('firstNameLabel'),
            lastNameLabel: t('lastNameLabel'),
            genderLabel: t('genderLabel'),
            nationalityLabel: t('nationalityLabel'),
            genderRequiredError: t('genderRequiredError'),
            nationalityRequiredError: t('nationalityRequiredError'),
            // ...
        };
    },
};

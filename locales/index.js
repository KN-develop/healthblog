import merge from 'merge';
import en from './en';
import fr from './fr';
import de from './de';
import ru from './ru';

export default {
    en,
    fr: merge.recursive(true, en, fr),
    de: merge.recursive(true, en, de),
    ru: merge.recursive(true, en, ru),
};

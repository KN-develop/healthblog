import MockCategoriesList from '~/mocks/MockCategoriesList';
import MockCategories from '~/mocks/MockCategories';

export default async function({ store }) {
    store.commit('menu/setTopMenu', topMenu);
    store.commit('blog/setCategoriesList', MockCategoriesList);

    return true;
}

const topMenu = [
    {
        title: 'Главная',
        url: '/',
    },
    {
        title: 'Обо мне',
        url: '/about',
    },
    {
        title: 'Блог',
        url: '/blog',
        sublist: MockCategories,
    },
    {
        title: 'Каталог',
        url: '/catalog',
    },
    {
        title: 'Контакты',
        url: '/contacts',
    },
];

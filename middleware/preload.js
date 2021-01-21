export default async function(ctx) {
    const { store } = ctx;
    const menu = topMenu;
    await store.dispatch('blog/fetchPosts');

    store.commit('menu/setTopMenu', menu);

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
        //sublist: MockCategories,
    },
    /*{
        title: 'Каталог',
        url: '/catalog',
    },*/
    {
        title: 'Контакты',
        url: '/contacts',
    },
];

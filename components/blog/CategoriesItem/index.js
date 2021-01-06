export default {
    props: {
        title: {
            type: String,
            default: 'Заголовок потерялся',
        },
        text: {
            type: String,
            default: 'Странно, но текста тут почему то нет.',
        },
        categories: {
            type: Array,
            default: () => [{ title: 'Блог', href: '/blog' }],
        },
        href: {
            type: String,
            default: '/404',
        },
        bgImage: {
            type: String,
            default: 'https://imgholder.ru/380x253/8493a8/adb9ca&text=NOT+FOUND&font=kelson',
        },
        author: {
            type: String,
            default: 'Admin',
        },
        date: {
            type: Number,
        },
        readTime: {
            type: String,
            default: '',
        },
    },

    computed: {
        getDate() {
            const dateObject = this.date && new Date(this.date);
            return dateObject ? {} : null;
        },
    },
};

export default {
    data() {
        return {
            monthEng: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Dec'],
            monthRus: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сеп', 'Окт', 'Дек'],
        };
    },
    props: {
        title: {
            type: String,
            default: 'Заголовок потерялся',
        },
        text: {
            type: String,
            default: 'Странно, но текста тут почему то нет.',
        },
        description: {
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
            type: Date,
        },
        readTime: {
            type: String,
            default: '',
        },
    },

    computed: {
        getDate() {
            return {
                day: this.date.getDate(),
                month: this.monthRus[this.date.getMonth()],
            };
        },
    },
};

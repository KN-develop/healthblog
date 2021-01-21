<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer__text">
                        <div class="footer__logo">
                            <a href="#"><img src="/img/logo.png" alt=""/></a>
                        </div>
                        <div class="flex flex-column align-items-center">
                            <p class="col-lg-8 col-md-12">
                                Мой блог о том, как сохранять красоту, здоровье и молодость натуральными способами.
                                <br />
                                Здесь вы найдете советы про правильное питание и здоровый образ жизни, рецепты домашней
                                косметики, натуральные принципы ухода за волосами и кожей, эффективные маски для лица,
                                описание лекарственных растений и секреты народной и восточной медицины.
                            </p>
                        </div>

                        <div class="footer__social">
                            <a href="#"><i class="fa fa-vk"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="mailto:locauz@bk.ru"><i class="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                    <div class="footer__copyright">
                        <p>
                            Copyright &copy; 2020 - {{ year }} Блог Кристины Ивановой о красоте и здоровье. All Rights
                            Reserved. <a href="#">Политика конфиденциальности</a> Все права на авторский дизайн и
                            контент защищены и преследуются по закону об авторском праве Гражданский кодекс | глава 70
                            ГК РФ, копирование материалов, без указания открытой индексируемой ссылки на блог
                            -запрещено!Информация, данная на сайте, носит рекомендательный характер и перед ее
                            применением рекомендуется проконсультироваться с вашим врачом.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
};
</script>

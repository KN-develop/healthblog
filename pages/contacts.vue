<template>
    <section class="contact spad">
        <div class="container">
            <div class="contact__text">
                <div class="row">
                    <div class="col-lg-12">
                        <BlogBreadcrumb
                            :list="[
                                {
                                    title: 'Контакты',
                                    href: '/contacts',
                                },
                            ]"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="contact__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19803.294410160397!2d40.50946209109107!3d64.5518986351679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x441836969cbcbdf3%3A0x85fb5baac78a0d04!2sProspekt%20Troitskiy%2C%20160%2C%20Arkhangel&#39;sk%2C%20Arkhangelskaya%20oblast&#39;%2C%20163001!5e0!3m2!1sen!2sru!4v1609940822853!5m2!1sen!2sru"
                                height="350"
                                style="border:0;"
                                allowfullscreen=""
                                aria-hidden="false"
                                tabindex="0"
                            ></iframe>
                        </div>
                        <div class="contact__widget">
                            <ul>
                                <!--
                                <li>
                                    <i class="fa fa-map-marker"></i>
                                    <span>John Doe, 123 Main St Chicago, IL 60626</span>
                                </li>
                                -->
                                <li>
                                    <i class="fa fa-mobile"></i>
                                    <span>
                                        <a
                                            :href="
                                                `https://wa.me/79021934099?text=Я%20увидел%20ваш%20контакт%20на%20сайте%20HealthBlog`
                                            "
                                            target="_blank"
                                        >
                                            WhatsApp
                                        </a>
                                        &nbsp;|&nbsp;
                                        <a href="viber://chat?number=%2B79021934099" target="_blank">Viber</a>
                                    </span>
                                </li>
                                <li>
                                    <i class="fa fa-envelope-o"></i>
                                    <a href="mailto:locauz@bk.ru">Почта: locauz@bk.ru</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--
                    <div class="col-lg-6 col-md-6">
                        <div class="contact__form">
                            <div class="contact__form__title">
                                <h2>gET IN TOUCH</h2>
                                <p>
                                    My experience with Realy is absolutely positive. The themes are beautifully designed
                                    and well documented. Realy theme provides quick support.
                                </p>
                            </div>
                            <form action="#">
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Website" />
                                <textarea placeholder="Message"></textarea>
                                <button type="submit" class="site-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                    -->
                </div>
            </div>
        </div>
    </section>
</template>

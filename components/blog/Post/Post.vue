<template>
    <section class="single-post spad">
        <div class="single-post__hero set-bg" :style="`background-image: url(${image})`"></div>
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                    <div class="single-post__title">
                        <!--
                        <div class="single-post__title__meta">
                            <h2>08</h2>
                            <span>Aug</span>
                        </div>
                        -->
                        <div class="single-post__title__text">
                            <ul class="label" v-if="categories">
                                <li v-for="item in categories" :key="`category-${item}`">{{ item }}</li>
                            </ul>
                            <h4>{{ title }}</h4>
                            <ul class="widget">
                                <li>автор: {{ author }}</li>
                            </ul>
                        </div>
                    </div>
                    <div v-html="contentHtml"></div>
                    <div class="single-post__tags" v-if="tags">
                        <NuxtLink :to="item.href" v-for="item in tags" :key="`tag-${item.title}`">
                            {{ item.title }}
                        </NuxtLink>
                    </div>
                    <!--
                    <div class="single-post__next__previous">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <a href="#" class="single-post__previous">
                                    <h6><span class="arrow_carrot-left"></span> Previous posts</h6>
                                    <div class="single-post__previous__meta">
                                        <h4>08</h4>
                                        <span>Aug</span>
                                    </div>
                                    <div class="single-post__previous__text">
                                        <span>Dinner</span>
                                        <h5>The Best Weeknight Baked <br />Potatoes, 3 Creative Ways</h5>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <a href="#" class="single-post__next">
                                    <h6>Next posts <span class="arrow_carrot-right"></span></h6>
                                    <div class="single-post__next__meta">
                                        <h4>05</h4>
                                        <span>Aug</span>
                                    </div>
                                    <div class="single-post__next__text">
                                        <span>Smoothie</span>
                                        <h5>The $8 French Rosé I Buy in <br />Bulk Every Summer</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="single-post__author__profile">
                        <div class="single-post__author__profile__pic">
                            <img src="/img/categories/single-post/author-profile.jpg" alt="" />
                        </div>
                        <div class="single-post__author__profile__text">
                            <h4>Lena Mollein.</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div class="single-post__author__profile__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-google-plus"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="single-post__comment">
                        <div class="widget__title">
                            <h4>03 Comment</h4>
                        </div>
                        <div class="single-post__comment__item">
                            <div class="single-post__comment__item__pic">
                                <img src="/img/categories/single-post/comment/comment-1.jpg" alt="" />
                            </div>
                            <div class="single-post__comment__item__text">
                                <h5>Brandon Kelley</h5>
                                <span>15 Aug 2017</span>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                    magnam.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa fa-heart-o"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-share-square-o"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="single-post__comment__item single-post__comment__item&#45;&#45;reply">
                            <div class="single-post__comment__item__pic">
                                <img src="/img/categories/single-post/comment/comment-2.jpg" alt="" />
                            </div>
                            <div class="single-post__comment__item__text">
                                <h5>Brandon Kelley</h5>
                                <span>15 Aug 2017</span>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                    magnam.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa fa-heart-o"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-share-square-o"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="single-post__comment__item">
                            <div class="single-post__comment__item__pic">
                                <img src="/img/categories/single-post/comment/comment-3.jpg" alt="" />
                            </div>
                            <div class="single-post__comment__item__text">
                                <h5>Brandon Kelley</h5>
                                <span>15 Aug 2017</span>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                    magnam.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa fa-heart-o"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-share-square-o"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="single-post__leave__comment">
                        <div class="widget__title">
                            <h4>Leave a comment</h4>
                        </div>
                        <form action="#">
                            <div class="input-list">
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Website" />
                            </div>
                            <textarea placeholder="Message"></textarea>
                            <button type="submit" class="site-btn">Submit</button>
                        </form>
                    </div>
                    -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
        },
        contentHtml: {
            type: String,
            default: '',
        },
        categories: {
            type: Array,
        },
        author: {
            type: String,
            default: 'Admin',
        },
        image: {
            type: String,
            default: '',
        },
        tags: {
            type: Array,
        },
    },
};
</script>

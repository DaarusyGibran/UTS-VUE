<template>
    <div class="home">
        <div>
            <b-carousel id="carousel-1" v-model="slide"
                :interval="4000"
                controls
                indicators
                img-width="1024"
                img-height="480"
            >
                <b-carousel-slide>
                    <template v-slot:img>
                    <img
                        class="d-block img-fluid w-100 img-banner"
                        src="../assets/images/1.png"
                        alt="image slot"
                    >
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                    <img
                        class="d-block img-fluid w-100 img-banner"
                        src="../assets/images/2.png"
                        alt="image slot"
                    >
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                    <img
                        class="d-block img-fluid w-100 img-banner"
                        src="../assets/images/3.png"
                        alt="image slot"
                    >
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                    <img
                        class="d-block img-fluid w-100 img-banner"
                        src="../assets/images/4.png"
                        alt="image slot"
                    >
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                    <img
                        class="d-block img-fluid w-100 img-banner"
                        src="../assets/images/5.png"
                        alt="image slot"
                    >
                    </template>
                </b-carousel-slide>                                
            </b-carousel>
        </div>
        <section class="product text-center mt-5">
            <b-tabs align="center" pills no-key-nav>
                <b-tab class="category-item" title="All">
                    <div class="container-fluid container-product">
                        <div class="row row-product">
                            <div class="col-md-3" v-for="(data, index) in products" :key="index">
                                <div class="product-item">
                                    <div class="product-img text-center">
                                        <img
                                            :src="require(`../assets/images/${data.foto}`)"
                                            class="img-product"
                                        >
                                    </div>
                                    <div class="product-detail text-center">
                                        <h5><b>{{data.nama}}</b></h5>
                                        <h6>{{data.harga}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-tab>
                <b-tab class="category-item" title="Batik">
                    <div class="container-fluid container-product">
                        <div class="row row-product">
                            <div class="col-md-3" v-for="(data, index) in batik" :key="index">
                                <div class="product-item">
                                    <div class="product-img text-center">
                                        <img
                                            :src="require(`../assets/images/${data.foto}`)"
                                            class="img-product"
                                        >
                                    </div>
                                    <div class="product-detail text-center">
                                        <h5><b>{{data.nama}}</b></h5>
                                        <h6>{{data.harga}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-tab>
                <b-tab class="category-item" title="Baju">
                    <div class="container-fluid container-product">
                        <div class="row row-product">
                            <div class="col-md-3" v-for="(data, index) in baju" :key="index">
                                <div class="product-item">
                                    <div class="product-img text-center">
                                        <img
                                            :src="require(`../assets/images/${data.foto}`)"
                                            class="img-product"
                                        >
                                    </div>
                                    <div class="product-detail text-center">
                                        <h5><b>{{data.nama}}</b></h5>
                                        <h6>{{data.harga}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-tab>                
            </b-tabs>
            <div class="container-fluid">
                <div class="row text-center">
                    <div class="col-md-12 text-center">
                        <button type="button" class="btn btn-load-more mb-5">LOAD MORE</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="newsletter">
            <div class="container-fluid">
                <div class="row m-5">
                    <div class="col-md-12 text-center">
                        <h4><b>Newsletter</b></h4>
                        <p>Get the weekly promotions after you subscribe below</p>
                        <div class="input-group mb-3">
                            <input
                                type="text"
                                class="form-control input-subscribe"
                                placeholder="Enter your email address"
                                aria-label="email address"
                                aria-describedby="button-subscribe"
                            >
                            <div class="input-group-append">
                                <button
                                    class="btn btn-outline-secondary btn-subscribe"
                                    type="button"
                                    id="button-subscribe">
                                    <b>Subscribe</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact">
            <footer class="footer-contact">
                <div class="row row-contact">
                    <div class="col-md-4">
                    <img src="../assets/images/logo.png" alt="logo" class="logo-footer img-fluid">
                        <br/>
                        <p class="link-footer">Batik Indonesia</p>
                    </div>
                    <div class="col-md-4 pl-4">
                        <p><b>Quick Links</b></p>
                        <div class="row">
                            <div class="col-6">
                                <a href="product" class="link-footer"><p>Batik</p></a>
                                <a href="#product" class="link-footer"><p>Baju</p></a>                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <p><b>Contact Us</b></p>
                        <p class="link-footer">
                    Email : <a href="mailto:daarusygibran@gmail.com" class="link-footer">
                        daarusygibran@gmail.com</a>
                        </p>
                        <p class="link-footer">
                    WhatsApp: <a href="tel:+6281299424639" class="link-footer">+6281299424639</a>
                        </p>
                        <p class="link-footer">Instagram : <a href="https://www.instagram.com/daarusy" class="link-footer">@daarusy</a></p>                        
                    </div>
                </div>
                <br/><br/>
                <p class="text-center link-footer">
                    Copyright &copy;2020 Batik Indonesia. All Rights Reserved
                    <br/>
                    Created by Daarusy Gibran
                </p>
            </footer>
        </section>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      products: [],
      batik: [],
      baju: []    
    }
  },
  async created () {
    const BASEURI = 'https://my-json-server.typicode.com/DaarusyGibran/dbuts/db'
    axios.get(BASEURI).then((result) => {
      this.products = result.data.products
      this.batik = result.data.batik
      this.baju = result.data.baju      
    })
  }
}
</script>

<style scoped>
@import url('http://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css');

.title {
    text-align: left;
    top: 50%;
}
.row-product {
    padding: 50px;
}
.tab-category {
    border-bottom: 1px solid black;
}
.product-item {
    transition: 0.3s;
}
.product-img {
    padding: 20px;
    background-color: #E6E6E6;
}
.img-product {
    height: 250px;
}
.product-detail {
    padding: 50px;
}
.btn-load-more {
    padding: 15px 30px;
    background-color: #141414;
    border-radius: 0;
    color: #E6E6E6;
    transition: 0.3s ease;
}
.btn-load-more:hover {
    background-color: transparent;
    color: #141414;
    border: 1px solid #141414;
}
.input-subscribe {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #b8b8b8;
    background-color: transparent;
}
.btn-subscribe {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #b8b8b8;
    background-color: transparent;
}
.btn-subscribe:hover {
    background-color: #141414;
}
.footer-contact {
    padding: 40px;
    background-color: black;
    color: white;
}
.logo-footer {
    width: 200px;
    padding-bottom: 10px;
}
.link-footer {
    text-decoration: none;
    color: dodgerblue;
}
</style>

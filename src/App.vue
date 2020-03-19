<template>
<html>
<body>
    <div class="my-jumbotron" id="my-jumbotron">
      <b-navbar class="navbar" id="nav" toggleable="lg" fixed="top">
        <b-navbar-brand  class="navbar-brand" href="#home">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <b-nav-item class="nav-item" href="#home" right>Home</b-nav-item>
            <b-nav-item class="nav-item" href="#category-sect" right>Category</b-nav-item>
            <b-nav-item class="nav-item" href="#contact" right>Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </div>
<div class="slider">
    <b-carousel
      id="carousel-1"
      v-tasbihel="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=1"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=2">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=3"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=8"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-src="https://picsum.photos/1024/480/?image=7">
      </b-carousel-slide>
    </b-carousel>
  </div>
<div id="category-sect">
    <h4 class="font-weight-bold pt-5 text-center"> Shop By Category </h4>
      <section id="tabs" class="project-tab">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <b-tabs content-class="mt-3" fill>
                    <b-tab title="QURAN" active>
                    <ul class="container mt-4">
                          <div class="row">
                        <div v-for="(quran, index) in quran" :key="index" class="my-3 mr-2 text-center">
                          <div class="product-image">
                            <img class="img-responsive h-75 w-100 p-2" src="./pictures/produk1.jpg" />
                            </div>
                          <div class="product-details">
                            <h6 class="display-6 mt-3">{{ quran.name }}</h6>
                            <h6 class="display-6 text-muted">Rp.{{ quran.price }}</h6>
                          </div>
                        </div>
                    </div>
                    </ul>
                    </b-tab>
                    <b-tab title="TASBIH">
                      <ul class="container mt-4">
                          <div class="row">
                        <div v-for="(tasbih, index) in tasbih" :key="index" class="my-3 mr-2 text-center">
                          <div class="product-image">
                            <img class="img-responsive h-75 w-100 p-2" src="./pictures/produk4.jpg" />
                            </div>
                          <div class="product-details">
                            <h6 class="display-6 mt-3">{{ tasbih.name }}</h6>
                            <h6 class="display-6 text-muted">Rp.{{ tasbih.price }}</h6>
                          </div>
                        </div>
                    </div>
                    </ul>
                      </b-tab>
                    <b-tab title="KOKO">
                      <ul class="container mt-4">
                          <div class="row">
                        <div v-for="(koko, index) in koko" :key="index" class="my-3 mr-2 text-center">
                          <div class="product-image">
                            <img class="img-responsive h-75 w-100 p-2" src="./pictures/produk7.jpg" />
                            </div>
                          <div class="product-details">
                            <h6 class="display-6 mt-3">{{ koko.name }}</h6>
                            <h6 class="display-6 text-muted">Rp.{{ koko.price }}</h6>
                          </div>
                        </div>
                    </div>
                    </ul>
                    </b-tab>
                  </b-tabs>

                    </div>
                </div>
            </div>
            </section>
        </div>
</body>
<footer class="page-footer blue pt-5 mt-5 mb-0">
<div class="container-fluid text-center text-md-left">
  <div class="row row-contact">
    <div class="col-md-4">
      <br/>
      <p class="link-footer">Official Webpage</p>
    </div>
    <div class="col-md-4">
      <p><b>Quick Links</b></p>
          <a href="/" class="link-footer"><p>Home</p></a>
          <a href="#category-sect" class="link-footer"><p>Category</p></a>
          <a href="#contact" class="link-footer"><p>Contact</p></a>
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
    Copyright &copy;2020 Created by <a href="https://www.instagram.com/daarusy">Daarusy Gibran</a>.
  </p>
</div>
</footer>

</html>
  <!-- <div id="app">
    <h1 v-for="(shirt, index) in shirts" :key="index">{{ shirt.name }}</h1>
    <h1 v-for="(tshirt, index) in tshirts" :key="index">{{ tshirt.price }}</h1>
    </div> -->
</template>

<script>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  data () {
    return {
      quran: [],
      tasbih: [],
      koko: []
    }
  },
  async created () {
    const baseURI = 'https://my-json-server.typicode.com/Wasomeno/myuts/db'
    axios.get(baseURI)
      .then((result) => {
        this.quran = result.data.quran
        this.tasbih = result.data.tasbih
        this.koko = result.data.koko
      })
  }
}

</script>

<style>
.navbar {
  background-color: #D3D0D0;
}
.nav-item {
  padding: 10px;
  font-weight: bold;
  font-family: 'Habibi';
}
#my-jumbotron {
    background-size: cover;
    overflow: hidden;
}
#jumbo-text-contain {
    color: black;
    min-height: 400px;
}
#jumbotron-btn {
    font-size: 20px;
    border: 3px solid ;
    border-radius: 0;
    transition: 0.3s;
}
#jumbotron-btn:hover {
    color:white ;
    border: 1px solid white;
}
#products-container li{
    list-style-type: none;
    height: 250px;
    position: relative;
}
.product-image {
    background: #f4f4ef;
    width: 250px;
    height: 275px;
    position: relative;
}
.project-tab {
    padding: 10%;
    margin-top: -8%;
}
.project-tab #tabs{
    background: #007b5e;
    color: #eee;
}
.project-tab #tabs h6.section-title{
    color: #eee;
}
.project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #20232a;
    background-color: transparent;
    border-color: transparent transparent #f3f3f3;
    border-bottom: 3px solid !important;
    font-size: 16px;
    font-weight: bold;
}
.project-tab .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    color: #acbebe;
    font-size: 16px;
    font-weight: 600;
}
.project-tab .nav-link:hover {
    border: none;
}
.project-tab thead{
    background: #f3f3f3;
    color: #333;
}
.project-tab a{
    text-decoration: none;
    color: #333;
    font-weight: 600;
}
.page-footer {
    padding: 40px;
    background-color: #141414;
    color: white;
}
</style>

<template>
    <div style="position: relative">
        <business-banner></business-banner>
        <v-row justify="center">
            <v-col cols="10" sm="8" md="8" lg="8" xl="8" class="pa-0">
                <p class="author text-uppercase" style="margin-bottom: 70px">Jessica Dominguez Delgado</p></v-col>
        </v-row>
        <v-row id="text-row11" justify="center"  :class="{'align-end': !textRowAlignStart, 'align-start': textRowAlignStart}">
            <v-col cols="10" sm="8" md="5" lg="5" xl="5" class="pa-0">
                <div class="info-container">
                    <div :key="i" v-for="(t, i) in textos">
                        <p :class="{'text-justify': true, 'text-subtitle': i===10||i===23}" v-html="t">
<!--                            {{t}}-->
                        </p>
                        <evolucion-hoteles v-if="i===5"></evolucion-hoteles>
                        <sunburts-hoteles v-if="i===14"></sunburts-hoteles>
<!--                        <p class="text-uppercase" style="font-family: Montserrat-Bold;" v-if="i===9">¿Quienes controlan el mercado?</p>-->
<!--                        <p class="text-uppercase" style="font-family: Montserrat-Bold;" v-if="i===22">De los males, el menor</p>-->
                        <bubble-habitaciones v-if="i===29"></bubble-habitaciones>

                        <v-carousel
                                v-if="i===20"
                                cycle
                                hide-delimiter-background
                                show-arrows-on-hover
                                class="my-carousel"
                                style="margin-top: 20px; margin-bottom: 20px;  height: max-content !important;"
                        >
                            <v-carousel-item style="height: min-content!important;">
                                    <img width="100%" src="@/assets/2/1.jpg"/>
                                <div class="img-footer">Inaugurado en 1928 y ubicado en la calle G del Vedado, el Hotel Presidente fue en su época el primer rascacielos de Cuba. FOTO: Alejandro Basulto</div>
                            </v-carousel-item>
                            <v-carousel-item style="height: min-content!important;">
                                <img width="100%" src="@/assets/2/2.jpg"/>
                                <div class="img-footer">El hotel Prado y Malecón, operado por las cadenas Accor y Gaviota es el 5 estrellas plus de más reciente apertura, en octubre de 2019. FOTO: Jans Sosa</div>
                            </v-carousel-item>
                            <v-carousel-item style="height: min-content!important;">
                                <img width="100%"  src="@/assets/2/3.jpg"/>
                                <div class="img-footer">El Hotel Parque Central, uno de los más emblemáticos del centro de La Habana, está actualmente operado por la cadena Iberostar. FOTO: Jorge Beltrán</div>
                            </v-carousel-item>
                            <v-carousel-item style="height: min-content!important;">
                                <img width="100%"  src="@/assets/2/4.jpg"/>
                                <div class="img-footer">El hotel Manzana Kempinsky fue el primer hotel 5 estrellas plus en Cuba, inaugurado en 2016, FOTO: Jorge Beltrán</div>
                            </v-carousel-item>
                            <v-carousel-item style="height: min-content!important;">
                                <img width="100%"  src="@/assets/2/5.jpg"/>
                                <div class="img-footer">El hotel Inglaterra es el más antiguo de Cuba, fundado en 1875, y es monumento nacional. FOTO: Jorge Beltrán</div>
                            </v-carousel-item>
                            <v-carousel-item style="height: min-content!important;">
                                <img width="100%"  src="@/assets/2/6.jpg"/>
                                <div class="img-footer">Hotel Panorama, operado por la cadena española H10, en el litoral norte de La Habana. FOTO: Jorge Beltrán</div>
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                    <comment style="margin-top: 40px" category="12"></comment>
                </div>
            </v-col>
            <v-col cols="1" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"></v-col>
            <v-col cols="2" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
                <!--        side bar-->
                <v-row id="sidebarCol" justify="start" align="start" :class="{'side-bar-fixed': sidebarFixed}">
                    <v-col cols="12" style="height: max-content;">
                        <v-card class="card first-card" width="max-content">
                            <v-img :src="require('@/assets/home/montecarlo.jpg')" width="250px" height="2in">
                                <v-card-title class="card-title  pb-0 pt-1">
                                    <div class="card-title-text text-uppercase">
                                        El regreso del lujo
                                    </div>
                                    <div class="sep-line"></div>
                                    <router-link :to="{name: 'montecarlo'}" style="text-decoration: none">
                                        <div class="card-action-text text-uppercase">Leer mas</div>
                                    </router-link>
                                </v-card-title>
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" style="height: max-content;">
                        <v-card class="card first-card" width="max-content">
                            <v-img :src="require('@/assets/home/gaesa.jpg')" width="250px" height="2in">
                                <v-card-title class="card-title pb-0 pt-1">
                                    <div class="card-title-text text-uppercase">
                                        El esquema gaesa para construir hoteles
                                    </div>
                                    <div class="sep-line"></div>
                                    <router-link :to="{name: 'gaesa'}" style="text-decoration: none">
                                        <div class="card-action-text text-uppercase">Leer mas</div>
                                    </router-link>

                                </v-card-title>
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" style="height: max-content;">
                        <v-card class="card first-card" style="background-color: #292929;" width="max-content">
                            <video-frame width="250px" height="140"></video-frame>
                            <v-card-title class="pr-4 pb-4" style="background-color: #292929; height: 5%">
                                <h1 class="video-title text-uppercase text-right" style="width: 100%">Video Resumen</h1>
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import BusinessBanner from '@/components/banners/BusinessBanner'
    import VideoFrame from '@/components/videoFrame'
    import {mapGetters} from 'vuex'
    import BubbleHabitaciones from "@/components/graphics/BubbleHabitaciones";
    import EvolucionHoteles from "@/components/graphics/EvolucionHoteles";
    import SunburtsHoteles from "@/components/graphics/SunburtsHoteles";
    import Comment from "@/components/Comment.vue";

    export default {
        name: "Building",
        metaInfo: {
            // Children can override the title.
            title: 'LA APUESTA HOTELERA EN CUBA',
            titleTemplate: '%s ← EL REGRESO DEL LUJO',
            // Define meta tags here.
            meta: [
                {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'En manos del grupo Gaviota, de las Fuerzas Armadas, y de un conjunto cada vez más amplio de actores extranjeros se encuentra el próspero negocio hotelero de Cuba'
                },
                {name: 'tags', content: 'cuba, hoteles, turismo, eltoque'},
                {name: 'author', content: 'Abraham Calas <dogcalas@gmail.com>'},
                // OpenGraph data (Most widely used)
                {property: 'og:title', content: 'EL NEGOCIO HOTELERO'},
                {property: 'og:site_name', content: 'LA APUESTA HOTELERA EN CUBA'},
                // The list of types is available here: http://ogp.me/#types
                {property: 'og:type', content: 'website'},
                // Should the the same as your canonical link, see below.
                {property: 'og:url', content: 'https://hoteles.eltoque.com/negocio'},
                {property: 'og:image', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'},
                // Often the same as your meta description, but not always.
                {property: 'og:description', content: 'En manos del grupo Gaviota, de las Fuerzas Armadas, y de un conjunto cada vez más amplio de actores extranjeros se encuentra el próspero negocio hotelero de Cuba'},

                // Twitter card
                {name: 'twitter:card', content: 'summary'},
                {name: 'twitter:site', content: 'https://hoteles.eltoque.com/negocio'},
                {name: 'twitter:title', content: 'EL NEGOCIO HOTELERO'},
                {name: 'twitter:description', content: 'En manos del grupo Gaviota, de las Fuerzas Armadas, y de un conjunto cada vez más amplio de actores extranjeros se encuentra el próspero negocio hotelero de Cuba'},
                // Your twitter handle, if you have one.
                {name: 'twitter:creator', content: '@eltoquecom'},
                {name: 'twitter:image:src', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'},

                // Google / Schema.org markup:
                {itemprop: 'name', content: 'EL NEGOCIO HOTELERO'},
                {itemprop: 'description', content: 'En manos del grupo Gaviota, de las Fuerzas Armadas, y de un conjunto cada vez más amplio de actores extranjeros se encuentra el próspero negocio hotelero de Cuba'},
                {itemprop: 'image', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'}
            ]
        },
        computed: {
            ...mapGetters({
                textos: 'business'
            })
        },
        components: {VideoFrame, BusinessBanner, BubbleHabitaciones, EvolucionHoteles,SunburtsHoteles, Comment},
        data(){
            return{
                sidebarFixed: false,
                textRowAlignStart: true
            }
        },
        mounted() {
            const textRow =  document.getElementById('text-row11')
            const sideBarCol = document.getElementById('sidebarCol')

            const me = this
            window.addEventListener('scroll', function () {
                const pixel_tope_fila = textRow.offsetTop
                const pedazo_texto_recorrido =  window.scrollY - pixel_tope_fila
                const pedazo_por_recorrer = textRow.offsetHeight - pedazo_texto_recorrido
                const sidebarheight = sideBarCol.offsetHeight

                const scrollPosition = window.scrollY

                if(scrollPosition >= pixel_tope_fila){
                    if (sidebarheight >= pedazo_por_recorrer) {
                        me.sidebarFixed = false
                        me.textRowAlignStart = false
                    } else{
                        me.sidebarFixed = true
                    }
                } else {
                    me.sidebarFixed = false
                    me.textRowAlignStart = true
                }
            })
        }
    }
</script>

<style scoped>
    .img-footer{
        margin-top: 2px;
        /*font-family: Montserrat-Thin;*/
        font-size: 8pt;
        /*letter-spacing: 2px;*/
        line-height: 9pt;
    }
    .text-subtitle{
        text-transform: uppercase !important;
        font-family: Montserrat-ExtraBold !important;
    }
    .side-bar-fixed {
        position: fixed;
        top: 0;
    }

    .card {
        height: max-content;
        border-radius: 0;
    }

    .first-card {
        /*margin-top: 246px;*/
    }

    .card-title {
        height: max-content;
        background-color: #eeeeed;
    }

    .card-title-text {
        font-family: Montserrat-ExtraBold;
        margin-left: auto;
        margin-right: auto;
        font-size: 13pt;
        line-height: 14pt;
        margin-top: 8%;
    }

    .card-action-text {
        font-family: Montserrat-Light;
        color: var(--primary-color);
        margin-right: 20px;
        font-size: 10pt;
    }

    .author {
        padding-left: 20px;
        padding-top: 150px;
        border-left: 4px solid var(--primary-color);
        font-family: Montserrat-Light;
        color: var(--primary-color);
    }

    .sep-line {
        width: 40%;
        margin-left: auto;
        margin-right: 20px;
        border: 2px solid var(--primary-color);
    }

    .video-title {
        font-family: Montserrat-ExtraBold;
        color: var(--primary-color);
        font-size: 15pt;
        line-height: 15pt;
    }

    .info-container {
        animation-name: example;
        animation-duration: 1s;
    }

    @media screen and (max-width: 600px) {
        .author {

            padding-top: 90px;

        }
    }
</style>

<style>
    .v-carousel__controls {
        display: none !important;
    }

    .my-carousel .v-responsive{
        height: min-content !important;
    }

</style>

<template>
    <div style="width: 100%">
        <v-row no-gutters>
            <v-col cols="7">
                <v-img :src="require('@/assets/banners/gaesa_banner.jpg')" min-height="400px" height="100%"></v-img>
            </v-col>
            <v-col cols="5" style="position: relative">
                <v-img :src="require('@/assets/home/gaesa.jpg')" height="60%"></v-img>
                <v-row no-gutters style="position: absolute; top: 0; width: 100%; height: 100%" justify="end"
                       align="end">
                    <v-col cols="6" style="height: 80%">
                        <div style="background-color: #eeeeed; width: 100%; height: 100%">
                        </div>
                    </v-col>
                    <v-col cols="6" align="end">
                        <div>
                            <div style="margin-left: -90%;">
                                <h1 class="text-left banner-title">
                                    El esquema</h1>
                                <h1 class="text-left banner-title">
                                    GAESA</h1>
                                <h1 class="nd400 text-left banner-title">
                                    para construir</h1>
                                <h1 class="d400 text-left banner-title">
                                    para </h1>
                                <h1 class="d400 text-left banner-title">
                                    construir</h1>
                                <h1 class="text-left banner-title">
                                    hoteles </h1>
                            </div>
                        </div>
                        <div style="border-bottom: 2px solid black; width: 80%; margin-left: auto">
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "GaesaBanner"
    }
</script>

<style scoped>
    .d400{
        display: none;
    }
    .banner-title {
        white-space: nowrap;
        font-size: 30.28pt;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-family: Montserrat-ExtraBold;
    }

    @media screen and (max-width: 1200px) {
        .banner-title {
            font-size: 40.28pt;
        }
    }

    @media screen and (max-width: 1100px) {
        .banner-title {
            font-size: 25.28pt;
        }
    }

    @media screen and (max-width: 900px) {
        .banner-title {
            font-size: 22.28pt;
        }
    }

    @media screen and (max-width: 850px) {
        .banner-title {
            font-size: 18.28pt;
            letter-spacing: 2px;
        }
    }

    @media screen and (max-width: 600px) {
        .banner-title {
            font-size: 14.28pt;
            letter-spacing: 2px;
        }
    }

    @media screen and (max-width: 500px) {
        .banner-title {
            font-size: 13.28pt;
            letter-spacing: 2px;
        }
    }

    @media screen and (max-width: 450px) {
        .banner-title {
            font-size: 10.28pt;
            letter-spacing: 2px;
        }
    }

    @media screen and (max-width: 400px) {
        .d400{
            display: flex;
        }

        .nd400{
            display: none;
        }
    }



</style>
<template>
    <v-app id="layout" style="background-color: transparent; overflow-x: hidden">
        <router-view></router-view>
    </v-app>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="less">
    @font-face {
        font-family: "Montserrat-Black";
        src: url("assets/fonts/Montserrat-Black.ttf") format("opentype");
    }

    @font-face {
        font-family: "Montserrat-Bold";
        src: url("assets/fonts/Montserrat-Bold.ttf") format("opentype");
    }

    @font-face {
        font-family: "Montserrat-Light";
        src: url("assets/fonts/Montserrat-Light.ttf") format("opentype");
    }

    @font-face {
        font-family: "Montserrat-Regular";
        src: url("assets/fonts/Montserrat-Regular.ttf") format("opentype");
    }

    @font-face {
        font-family: "Montserrat-Thin";
        src: url("assets/fonts/Montserrat-Thin.ttf") format("opentype");
    }

    @font-face {
        font-family: "Montserrat-ExtraBold";
        src: url("assets/fonts/Montserrat-ExtraBold.otf") format("opentype");
    }

    :root {
        --primary-color: #cc983c;
        --secundary-color: rgba(0, 0, 0, 0.76);
    }

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background-color: white;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
    }

</style>

<template>
    <Highcharts ref="sunburtsHoteles" :options="chartOptions"/>
</template>

<script>
    import Highcharts from "highcharts";
    import {genComponent} from "vue-highcharts";
    import data from '../../data/hotelessunburst.json'

    require('highcharts/highcharts-more.js')(Highcharts);
    require('highcharts/modules/sunburst')(Highcharts);

    export default {
        name: "SunburtsHoteles",
        components: {
            Highcharts: genComponent('Highcharts', Highcharts),
        },
        data() {
            return {
                Highcharts: Highcharts,
                chartOptions: {
                    chart: {
                        height: '100%'
                    },

                    title: {
                        text: 'Empresas cubanas a cargo de los hoteles'
                    },
                    subtitle: {
                        text: 'Fuente: Elaboración a partir de base de datos propia'
                    },
                    colors: ['#ec6c5e', '#89cabd', '#575756', '#3a3d59', '#f6ab68', '#6d889b', '#3a3d59', '#f6ab68'],
                    series: [{
                        type: "sunburst",
                        data: data,
                        allowDrillToNode: true,
                        cursor: 'pointer',
                        dataLabels: {
                            format: '{point.name}',
                            filter: {
                                property: 'innerArcLength',
                                operator: '>',
                                value: 16
                            }
                        },
                        levels: [{
                            level: 1,
                            levelIsConstant: false,
                            dataLabels: {
                                filter: {
                                    property: 'outerArcLength',
                                    operator: '>',
                                    value: 64
                                }
                            }
                        }, {
                            level: 2,
                            colorByPoint: true
                        },
                            {
                                level: 3,
                                colorVariation: {
                                    key: 'brightness',
                                    to: -0.5
                                }
                            }, {
                                level: 4,
                                colorVariation: {
                                    key: 'brightness',
                                    to: 0.5
                                }
                            }]

                    }],
                    tooltip: {
                        headerFormat: "",
                        pointFormat: '<b>{point.name}</b>: <b>{point.value} hoteles</b>'
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
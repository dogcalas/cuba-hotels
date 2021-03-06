import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        categories: require('@/data/categories.json'),
        regions: require('@/data/regions.json'),
        montecarlo: require('@/data/textos/montecarlo.json'),
        business: require('@/data/textos/business.json'),
        gaesa: require('@/data/textos/gaesa.json'),
        hotels: require('@/data/hoteles.json'),
        projects: require('@/data/hoteles-const.json').sort((p1, p2) => {
            const y1 = parseInt(p1.fecha_fin)
            const y2 = parseInt(p2.fecha_fin)
            if (isNaN(y1)) {
                return -1
            }
            if (isNaN(y2)) {
                return 1
            }
            return y1 - y2
        })
    },
    getters: {
        categories: state => state.categories,
        managers: state => [...new Set(state.hotels.map(p => p.oper_cu))],
        regions: state => state.regions,
        montecarlo: state => state.montecarlo.textos,
        gaesa: state => state.gaesa.textos,
        business: state => state.business.textos,
        hotels: state => state.hotels.sort((h1,h2)=>{
            var h1_index = state.regions.indexOf(h1.provincia.nombre)
            var h2_index = state.regions.indexOf(h2.provincia.nombre)
            return h1_index - h2_index
        }),
        projects: state => state.projects,
        years: state => [...new Set(state.projects.map(p => parseInt(p.fecha_fin)))].filter(y => !isNaN(y))
    }
})

export default store

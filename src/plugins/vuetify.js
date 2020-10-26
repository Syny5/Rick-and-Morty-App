import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light:{
                primary: '#03a9c1',
                info: '#66a86c'
            }
        }
    }
});

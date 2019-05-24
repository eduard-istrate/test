/* this is the store of the application. Here we will structure the data as a data tree. The branches of our tree are the modules */
/* In this example we have a module called testModule which has the general purpose of exemplifying the one-way-data-flow pattern */
/* Each section of the application that I need data in the store for, should have its own module. The news page will have a module,
the contact page would have a different module and so on and so forth. */

import Vue from 'vue'
import Vuex from 'vuex'
import testModule from './modules/test/module'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        testModule
    }
})
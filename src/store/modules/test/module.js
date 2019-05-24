/* The structure of a module is very simple. The actions, mutations, getters and states of the module are each held in a sepparate file.
The index.js file of each module imports each of these sepparate files and bundles them in a single object. That object is the module itself.
The module is exported here and imported in the top level index.js file, where it's being injected in our Vue application
*/

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './states'

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

/* I recommend reading this after analyising the four individual files. */
/* The flow of the module works like this:
- the states are initilized inside states.js
- inside the component I wish to use the state(VuexExample.vue inside src/components) I dispatch the action for the http request of our data.
- the action will request the data from the server and commit the mutation which sets a new value to our state.
- the mutation sets the new value of our state
- all of this happened in the created() lifecycle hook of our component. 
- now that the data is set inside the state the component retrieves it with a getter for rendering
*/
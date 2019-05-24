/* The state or the source of truth are the variables that hold the data the frontend uses */
/* In this case we have we have a list of objects that we receive from a server 
and a boolean that tells us if we have received it or not */
/* We do not invoke states directly in our components, rather we use getters */

export default {
    testData: [],
    loadingTestData: true
}
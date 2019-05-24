/* As I said we will not be accesing the states directly as variables. */
/* Getters are functions which return the data in our states. Their added benefit as functions is that we can add 
extra logic to them, and most importantly that they are reactive properties. Whenever a change is issued
inside the data the getter returns, the entire page shall be re-rendered. */

export default {
    getTestData: (state) => {
        console.log(state.testData);
        return state.testData;
    },
    getLoadingTestData: (state) => {
        return state.loadingTestData;
    }
}
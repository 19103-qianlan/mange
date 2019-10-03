<template>
    <div id="app">
        <router-view/>
<!--        <test @name="fn"></test>-->
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            fn(val) {
                console.log(val);
            }
        }
    };
</script>

<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        overflow: hidden;
    }
</style>

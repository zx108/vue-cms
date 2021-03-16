<template>
    <div>

        <mt-swipe :auto="4000" style="height: 180px;">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <h3>HomeContainer</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
    div:nth-child(1){
        background: red;
    }

    div:nth-child(2){
        background: pink;
    }

    div:nth-child(3){
        background: hotpink;
    }
</style>
<template>
    <div>

        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,i) in lunboimg" :key="i">
                
                <img :src="item.img">
            </mt-swipe-item>
            
        </mt-swipe>
        <h3>HomeContainer</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lunboimg: []
        }
    },
    methods: {
        async getLunbo(){
            const { data } = await this.$http.get("/api/getlunbo")
            console.log(data)
            if (data.status === 0) this.lunboimg = data.message
        }
    },

    created(){
        this.getLunbo()
    }

}
</script>

<style scoped>
    div:first-child{
        height: 180px;
    }

    div:first-child img{
        width: 100%;
        height: 100%;
    }
</style>
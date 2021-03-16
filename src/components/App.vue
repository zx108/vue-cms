<template>
    <div>
        <h2>实践是认识的基础</h2>

        <router-link to="/login">login</router-link>
        <router-link to="/reg">reg</router-link>

        <router-view></router-view>
    </div>
</template>


<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>


<style scoped>
h2{
    color:red;
    
}
</style>
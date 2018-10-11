<template>
    <div class="detail">
         <p>
            <router-link to="/home">home</router-link>
            <router-link to="/news">news</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style>
.detail{
    width: 100%;
    background-color: #fff;
}

</style>

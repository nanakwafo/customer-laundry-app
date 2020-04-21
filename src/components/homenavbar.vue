<template>
<div class="text-center ">
    <v-btn depressed="" class="ma-2 font-weight-thin text-transform-none" rounded color="primary" @click="$router.push('signin').catch(err => {})">SignIn</v-btn>
    <v-btn depressed="" class="ma-2 font-weight-thin text-transform-none" rounded color="primary" @click="$router.push('signup').catch(err => {})">SignUp</v-btn>

</div>
</template>
<script>
export default {
    
}
</script>
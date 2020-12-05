<template>
      <v-container class="py-8 px-6"  fluid>
        <WelcomeIndex msg="Welcome to Your Vue.js App" />
      </v-container>
</template>

<script>
  import WelcomeIndex  from '@/components/welcome/Index'

  export default {
    components:{
        WelcomeIndex
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>
<template>
      <v-container class="py-8 px-6"  fluid>
        <WelcomeTable />
        <WelcomeIndex msg="Welcome to Your Vue.js App" />
      </v-container>
</template>

<script>
  import WelcomeIndex  from '@/components/welcome/Index'
  import WelcomeTable  from '@/components/welcome/Table'

  export default {
    components:{
        WelcomeIndex,WelcomeTable
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>
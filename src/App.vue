<template>
  <v-app id="inspire">
    
    
    <Menu :drawer="drawer" />

    <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    
    <v-main>
        <Dashboard />
    </v-main>

  </v-app>
</template>

<script>
    import Menu from '@/components/layouts/Menu'
    import Dashboard from '@/components/layouts/Dashboard'

    export default {
        components:{
            Menu,Dashboard
        },
        data: () => ({
            drawer: true,
        }),
    }
</script>

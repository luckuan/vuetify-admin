<template>
    <div>
        <Menu :drawer="drawer" />
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
    </div>
</template>

<script>
    import Menu from '@/components/layouts/Menu'
    export default {
        components:{
            Menu
        },
        data: () => ({
            drawer: true,
        }),
    }
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      :width="navWidth"
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>john@vuetifyjs.com</div>
      </v-sheet>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container class="py-8 px-6"  fluid>
        <WelcomeTable />
        <WelcomeIndex msg="Welcome to Your Vue.js App" />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
  import WelcomeIndex  from '@/components/welcome/Index'
  import WelcomeTable  from '@/components/welcome/Table'

  export default {
    components:{
        WelcomeIndex,WelcomeTable
    },
    data: () => ({
      navWidth: 200,  //<!-- navigation 的宽度 -->
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
    }),
  }
</script>

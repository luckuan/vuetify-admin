<template>

  <v-navigation-drawer v-model="drawer" app :width="navWidth">
    <v-sheet color="grey lighten-4" class="pa-4">
      <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

      <div>john@vuetifyjs.com</div>
    </v-sheet>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="[icon, text, targetPath] in links" :key="icon" link>
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <router-link :to="{path:targetPath}"> {{ text }} </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'MainMenu',
    props: {
      drawer: Boolean
    },
    data: () => ({
      navWidth: 200, //<!-- navigation 的宽度 -->
      links: [
        ['mdi-inbox-arrow-down', 'Inbox', '/tables'],
        ['mdi-send', 'Send', '/home'],
        ['mdi-delete', 'Trash', '/'],
        ['mdi-alert-octagon', 'Spam', '/tables'],
      ],
    }),
    methods: {
      logout() {
        this.$router.push({
          name: 'home'
        });
      },
    },
  };
</script>
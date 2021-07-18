<template>
  <div>
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <ul>
        <li>
          <router-link 
              :to="{
                name: 'Diary'
              }"
            >
              Diary 
            </router-link>
        </li>

         <li>
          <router-link 
              :to="{
                name: 'Recipes'
              }"
            >
              Recipes 
            </router-link>
        </li>

         <li>
          <router-link 
              :to="{
                name: 'Profile'
              }"
            >
              Profile 
            </router-link>
        </li>
      </ul>
    </v-navigation-drawer>
    <router-view />
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
    }),
  }
</script>

<style>

</style>
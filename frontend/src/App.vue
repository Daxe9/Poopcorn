<template>
  <v-app>
		<v-app-bar>
			<v-app-bar-title class="font-weight-medium text-h5 ">PoopCorn💩🌽</v-app-bar-title>
			<v-spacer />
			<v-btn v-if="!isAuth" class="elevation-2 rounded-pill">Login</v-btn>
			</v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
    
  }),
	computed: {
		isAuth() {
			return this.$store.state.user
		}
	}
}
</script>

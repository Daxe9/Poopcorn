<template>
	<v-container>
		<v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="20"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      type="password"
			label="Password"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
  </v-form>
	</v-container>
</template>

<script>
export default {
	name: "Login",
	data: () => ({
		valid: true,
		name: "",
		nameRules : [
			v => !!v || "Name is required",
			v => (v && v.length > 20) || "Name must be less than 20 characters"
		],
		password: "",
		passwordRules: [
			v => !!v || "Required",
			v => v.length >= 8 || "Min 8 characters"
		]
	}),
	methods: {
		validate() {
			console.log(this.name, this.password)
			// this.$ref.form.validate();
		},
		reset() {
			// this.$ref.form.reset()
		}
	}

}
</script>

<template>
  <v-row align="center" justify="center">
    <v-col md="6">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="title"
          :counter="10"
          :rules="nameRules"
          label="Title"
          required
        />

        <v-textarea
          v-model="content"
          label="Content"
          :rules="contentRules"
          hint="write your post content"
          :counter="250"
        />

        <v-file-input v-model="thumbnail" :rules="thumbnailRules" chips label="Upload thumbnail" />

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Create
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
export default {
  layout: 'admin',
  data: () => ({
    title: '',
    content: '',
    thumbnail: null,
    valid: true,
    nameRules: [
      v => !!v || 'Name is required'
    ],
    contentRules: [
      v => !!v || 'Content is required',
      v => v.length < 250 || 'Content is to long'
    ],
    thumbnailRules: [
      v => !!v || 'Thumbnail is required'
    ]
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

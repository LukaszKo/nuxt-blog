<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="form.title" :rules="nameRules" label="Title" required />
    <v-text-field v-model="form.author" :rules="nameRules" label="Author" required />

    <v-textarea
      v-model="form.content"
      label="Content"
      :rules="contentRules"
      hint="write your post content"
      :counter="250"
    />

    <v-text-field v-model="form.thumbnail" :rules="thumbnailRules" label="Thumbnail link" required />

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="onSave">
      Save
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset
    </v-btn>
  </v-form>
</template>
<script>
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    form: {
      title: '',
      author: '',
      content: '',
      thumbnail: ''
    },
    valid: true,
    nameRules: [v => !!v || 'Name is required'],
    contentRules: [
      v => !!v || 'Content is required',
      v => (v && v.length <= 250) || 'Content must be less than 250 characters'
    ],
    thumbnailRules: [v => !!v || 'Thumbnail is required']
  }),
  computed: {
    postData () {
      return this.$store.state.post
    }
  },
  created () {
    if (this.isEdit) {
      this.form = { ...this.postData }
    }
  },
  methods: {
    onSave () {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        this.$emit('onSubmit', { ...this.form, updatedDate: new Date() })
      }
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

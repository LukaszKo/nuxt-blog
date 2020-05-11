import Vue from 'vue'

Vue.filter('toLocalDate', (val) => {
  if (!val) { return '' }
  const date = new Date(val)
  return date.toLocaleDateString()
})

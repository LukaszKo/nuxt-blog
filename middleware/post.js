export default function ({ store, payload, params }) {
  if (payload) {
    store.commit('setPost', payload)
  } else {
    store.dispatch('fetchPost', params.id)
  }
}

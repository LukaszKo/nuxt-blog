export default async ({ store, payload, params }) => {
  if (payload) {
    return store.commit('setPost', payload)
  } else {
    await store.dispatch('fetchPost', params.id)
  }
}

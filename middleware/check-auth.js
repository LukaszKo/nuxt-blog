export default ({ store, req }) => {
  store.dispatch('core/initAuth', req)
}

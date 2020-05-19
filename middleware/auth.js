export default ({ store, redirect }) => {
  if (!store.getters['core/isAuthenticated']) {
    redirect('/admin/auth')
  }
}

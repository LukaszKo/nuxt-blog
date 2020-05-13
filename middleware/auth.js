export default function (context) {
  if (!context.store.getters['core/isAuthenticated']) {
    context.redirect('/admin/auth')
  }
}

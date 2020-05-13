export default function (context) {
  context.store.dispatch('core/initAuth', context.req)
}

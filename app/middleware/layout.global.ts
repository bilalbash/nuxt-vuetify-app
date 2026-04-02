export default defineNuxtRouteMiddleware((to) => {
  const layout =
    to.path.startsWith('/users') ? 'users'
      : to.path.startsWith('/admin') ? 'admin'
        : 'default'

  setPageLayout(layout)
})

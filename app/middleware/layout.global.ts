export default defineNuxtRouteMiddleware((to) => {
  const layout =
    to.path.startsWith('/users') ? 'users'
      : to.path.startsWith('/admin') ? 'admin'
        : to.path.startsWith('/play') ? 'play'
          : 'default'

  setPageLayout(layout)
})

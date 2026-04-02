import { setPageLayout } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/users')) {
    setPageLayout('users')
    return
  }

  if (to.path.startsWith('/admin')) {
    setPageLayout('admin')
    return
  }

  setPageLayout('default')
})

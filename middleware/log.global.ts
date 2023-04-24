export default defineNuxtRouteMiddleware((to, from) => {
    const event = useRequestEvent()

    console.log('Heading from ', from.path, ' to ', to.path)
    const currentCount = event.context.session.count
    console.log('from middleware: ', currentCount)
    // return '/secret'
  })
  
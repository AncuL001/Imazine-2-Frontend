export default defineEventHandler(async (event) => {
    event.context.session.isLoggedIn = false
    return event.context.session.isLoggedIn;
})

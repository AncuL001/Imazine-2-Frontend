export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const currentCount = event.context.session.count || 0
    event.context.session.count = currentCount + 1
    return event.context.session.count;
})
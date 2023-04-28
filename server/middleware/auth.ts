export default defineEventHandler((event) => {
  event.context.token = parseCookies(event).token
})

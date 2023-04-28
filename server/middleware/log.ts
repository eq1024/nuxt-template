export default defineEventHandler((event) => {
  console.log(`New request: ${event.node.req.url}`, `token: ${parseCookies(event).token}`)
})

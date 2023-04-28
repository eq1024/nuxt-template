export default defineEventHandler(async (event) => {
  console.log('\(^o^)/~', event.context.token)
  const result: any = await $fetch('http://localhost:3999/', { method: 'GET', headers: { authorization: event.context.token } })
  //  await , )
  return { result }
})

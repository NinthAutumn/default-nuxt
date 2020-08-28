// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
// export default (fetch) => (resource) => ({
//   index() {
//     return fetch.$get(`${resource}`)
//   },

//   show(id) {
//     return fetch.$get(`${resource}/${id}`)
//   },

//   create(payload) {
//     return fetch.$post(`${resource}`, payload)
//   },

//   update(id, payload) {
//     return fetch.$post(`${resource}/${id}`, payload)
//   },

//   delete(id) {
//     return fetch.$delete(`${resource}/${id}`)
//   }
// })
interface defaultQuery {
  limit: number,
  page: number
}

export default (fetch: any) => (resource: string) => ({
  index(defaultQuery: defaultQuery) {
    const { limit, page } = defaultQuery
    return fetch.$get(`${resource}?limit=${limit}&page=${page}`)
  },
  show(id: any) {
    return fetch.$get(`${resource}/${id}`)
  },
  create(payload: Object) {
    return fetch.$post(`${resource}`, payload)
  },

  update(id: any, payload: Object) {
    return fetch.$post(`${resource}/${id}`, payload)
  },

  delete(id: any) {
    return fetch.delete(`${resource}/${id}`)
  }
})

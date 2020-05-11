import axios from 'axios'

const postsUrl = 'https://nuxt-blog-a2b7e.firebaseio.com/posts'
const extenstion = '.json'

export default {
  all () {
    return axios.get(`${postsUrl}${extenstion}`)
  },
  create (post) {
    return axios.post(`${postsUrl}${extenstion}`, post)
  },
  delete (id) {
    return axios.delete(`${postsUrl}/${id}${extenstion}`)
  },
  find (id) {
    return axios.get(`${postsUrl}/${id}${extenstion}`)
  },
  update (post) {
    return axios.patch(`${postsUrl}/${post.id}${extenstion}`, post)
  }
}

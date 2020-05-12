import Vue from 'vue'

export const state = () => ({
  posts: [],
  post: null,
  admin: null
})

export const mutations = {
  setPosts (state, payload) {
    state.posts = payload
  },
  setPost (state, payload) {
    state.post = payload
  },
  addPost (state, payload) {
    state.posts.push(payload)
  },
  setAdmin (state, payload) {
    state.admin = payload
  },
  updatePost (state, payload) {
    const postIndex = state.posts.findIndex(item => item.id === payload.id)
    if (postIndex > -1) {
      Vue.set(state.posts, postIndex, payload)
    }
  },
  removePost (state, payload) {
    state.posts = state.posts.filter(item => item.id !== payload)
  }
}

export const getters = {
  latestPosts: state => state.posts.slice(0, 3),
  getPost: state => id => state.posts.find(item => item.id === parseInt(id))
}

export const actions = {
  nuxtServerInit ({ commit }, context) {
    return context.app.$axios
      .$get('/posts.json')
      .then((data) => {
        const postsArray = []
        for (const key in data) {
          postsArray.push({ ...data[key], id: key })
        }
        commit('setPosts', postsArray)
      })
      .catch(err => context.error(err))
  },
  async fetchPost ({ commit }, payload) {
    const data = await this.$axios.$get(`/posts/${payload}.json`)
    commit('setPost', data)
  },
  async createPost ({ commit }, payload) {
    const data = await this.$axios.$post('/posts.json', payload)
    commit('addPost', { ...payload, id: data.name })
  },
  async updatePost ({ commit }, payload) {
    const data = await this.$axios.$patch(
      `posts/${payload.id}.json`,
      payload
    )
    commit('updatePost', data)
  },
  async removePost ({ commit }, payload) {
    await this.$axios.$delete(`posts/${payload}.json`)
    commit('removePost', payload)
  }
}

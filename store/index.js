import Vue from 'vue'

export const state = () => ({
  posts: [],
  post: null
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
  async fetchPosts ({ commit }) {
    const data = await this.$axios.$get('/posts.json')
    const postsArray = []
    for (const key in data) {
      postsArray.push({ ...data[key], id: key })
    }
    commit('setPosts', postsArray)
  },
  async fetchPost ({ commit }, payload) {
    const data = await this.$axios.$get(`/posts/${payload}.json`)
    commit('setPost', { ...data, id: payload })
  },
  async createPost ({ commit, rootState }, payload) {
    const data = await this.$axios.$post(`/posts.json?auth=${rootState.core.token}`, payload)
    commit('addPost', { ...payload, id: data.name })
  },
  async updatePost ({ commit, rootState }, payload) {
    const data = await this.$axios.$patch(
      `posts/${payload.id}.json?auth=${rootState.core.token}`,
      payload
    )
    commit('updatePost', data)
  },
  async removePost ({ commit, rootState }, payload) {
    await this.$axios.$delete(`posts/${payload}.json?auth=${rootState.core.token}`)
    commit('removePost', payload)
  }
}

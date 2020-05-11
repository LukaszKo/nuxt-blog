import Vue from 'vue'
import postsRepository from '~/repositories/posts'

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
    return postsRepository
      .all()
      .then((res) => {
        const postsArray = []
        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }
        commit('setPosts', postsArray)
      })
      .catch(err => context.error(err))
  },
  async fetchPost ({ commit }, payload) {
    const { data } = await postsRepository.find(payload)
    commit('setPost', data)
  },
  async createPost ({ commit }, payload) {
    const { data } = await postsRepository.create(payload)
    commit('addPost', { ...payload, id: data.name })
  },
  async updatePost ({ commit }, payload) {
    const { data } = await postsRepository.update(payload)
    commit('updatePost', data)
  },
  async removePost ({ commit }, payload) {
    await postsRepository.delete(payload)
    commit('removePost', payload)
  }
}

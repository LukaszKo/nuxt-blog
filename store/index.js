export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts (state, payload) {
    state.posts = payload
  }
}

export const getters = {
  latestPosts: state => state.posts.slice(0, 3),
  getPost: state => id => state.posts.find(item => item.id === parseInt(id))
}

export const actions = {
  nuxtServerInit  ({ commit }, context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('setPosts', [
          {
            id: 1,
            title: 'Post 1',
            thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
          },
          {
            id: 2,
            title: 'Post 2',
            thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
          },
          {
            id: 3,
            title: 'Post 3',
            thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
          },
          {
            id: 4,
            title: 'Post 4',
            thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
          },
          {
            id: 5,
            title: 'Post 5',
            thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
          },
          {
            id: 6,
            title: 'Post 6',
            thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
          }
        ])
        resolve()
      }, 1500)
    })
  }
}

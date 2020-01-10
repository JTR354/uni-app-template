export const state = {
  hello: 123
}

export const getters = {
  hello: (state) => state.hello
}

export const mutations = {
  addHello(state) {
    state.hello++
  }
}

export const actions = {}

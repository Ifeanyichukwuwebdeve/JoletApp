import axios from './axiosConfig'
// import router from '../router'

export default {
  async getUserStatus ({ commit }, id) {
    const { data } = await axios.get(`curricula/${id}`)
    console.log(data)
    const curr = { ...data.curriculum, createdByName: data.createdByName }
    console.log(curr)
    commit('updateSelectedCurriculum', curr)
  }
}

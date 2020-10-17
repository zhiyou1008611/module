export default {
    login(state, v) {
        state.userInfo = v
    },
    setMeberInfo(state, v) {
        state.userStatus = v.userStatus
        state.vipLevel = v.vipLevel
    }
}

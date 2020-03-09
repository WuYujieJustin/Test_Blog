export default {
    methods: {
        toHome() {
            if (this.$router.currentRoute.name === 'Home') {
                this.$router.push('/home')
            }
        }
    }
}

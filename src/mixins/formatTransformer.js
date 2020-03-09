export default {
    methods: {
        base2str(code) {
            return window.atob(code)
        },
        str2base(str) {
            return window.btoa(str)
        }
    }
}

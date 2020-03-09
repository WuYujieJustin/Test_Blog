<template>
    <router-view></router-view>
</template>

<script>
import refreshMixins from 'mixins/refreshMixins'
export default {
    mixins: [refreshMixins],
    created() {},
    methods: {},
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.toHome()
        })
    }
}
</script>

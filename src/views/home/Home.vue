<template>
    <keep-alive>
        <router-view :key="path" />
    </keep-alive>
</template>

<script>
export default {
    computed: {
        path() {
            return this.$route.query.path
        }
    }
}
</script>

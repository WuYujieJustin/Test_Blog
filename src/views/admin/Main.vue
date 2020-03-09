<template>
    <div class="mark-down">
        <button @click="download">download</button>
        <mark-down @on-contetn-save="save" v-model="content"></mark-down>
    </div>
</template>

<script>
import api from 'api/blog'
import formatTransformer from 'mixins/formatTransformer'
export default {
    mixins: [formatTransformer],
    data() {
        return {
            content: '# test'
        }
    },
    created() {
        this.download()
    },
    methods: {
        save(value) {
            // this.content = value.html
            console.log(value)
        },
        download() {
            api.getBlogDetail('README.md').then(res => {
                console.log(res)
                this.content = this.base2str(res.content)
            })
        }
    }
}
</script>

<style scoped lang="scss">
.mark-down {
    width: 100%;
    height: 100%;
}
</style>

<template>
    <div class="list-item">
        <div>card</div>
        <div>{{ card }}</div>
        <div ref="editor" id="editor"></div>
    </div>
</template>

<script>
import * as Monaco from 'monaco-editor'
export default {
    name: 'ListCard',
    props: {
        card: {
            type: Object
        }
    },
    created() {
        Monaco.create(this.$refs.editor)
    }
}
</script>

<style lang="scss" scoped>
.list-item {
    width: 100px;
    height: 100px;
    background: red;
    #editor {
        width: 200px;
        height: 200px;
    }
}
</style>

<template>
    <div class="mark-down">
        <markdown
            :toolbars="toolbars"
            theme="dark"
            :value="value"
            @on-save="handleOnSave"
        ></markdown>
    </div>
</template>

<script>
import Markdown from 'vue-meditor'
export default {
    name: 'MarkDown',
    components: {
        Markdown
    },
    props: {
        value: {
            type: String
        }
    },
    data() {
        return {
            editor: null,
            toolbars: {
                strong: true,
                italic: true,
                overline: true,
                h1: true,
                h2: true,
                h3: true,
                h4: true,
                h5: true,
                h6: true,
                hr: true,
                quote: true,
                ul: true,
                ol: true,
                code: true,
                link: true,
                image: true,
                table: true,
                checked: true,
                notChecked: true,
                preview: true,
                split: true,
                print: true,
                theme: true,
                fullscreen: true,
                exportmd: true,
                importmd: true,
                save: true,
                clear: true
            }
        }
    },
    methods: {
        handleOnSave(value) {
            console.log(value)
            this.$emit('on-content-save', value)
        }
    }
}
</script>

<style lang="scss" scoped>
.mark-down {
    width: 1000px;
    height: 1000px;
}
</style>

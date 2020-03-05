<template>
    <div class="list-item">
        <markdown
            :toolbars="toolbars"
            theme="light"
            @on-save="handleOnSave"
        ></markdown>
        <button @click="createEditor">try</button>
    </div>
</template>

<script>
import * as monaco from 'monaco-editor'
import Markdown from 'vue-meditor'
export default {
    name: 'MonacoEditor',
    components: {
        Markdown
    },
    props: {
        card: {
            type: Object
        },
        editorContent: {
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
        handleOnSave({ value }) {
            console.log(value)
        },
        createEditor() {
            // create div to avoid needing a HtmlWebpackPlugin template
            const div = document.createElement('div')
            div.id = 'editor'
            div.style = 'width:400px; height:400px; border:1px solid #ccc;'

            document.body.appendChild(div)
            this.editor = monaco.editor.create(
                document.getElementById('editor'),
                {
                    value: this.editorContent,
                    language: 'javascript',
                    theme: 'vs-dark'
                }
            )
            console.log(this.editor.getValue())
        }
    }
}
</script>

<style lang="scss" scoped>
.list-item {
    width: 1000px;
    height: 1000px;
    #editor {
        width: 500px;
        height: 500px;
    }
}
</style>

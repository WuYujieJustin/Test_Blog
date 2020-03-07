<template>
    <div class="editor">
        <button @click="createEditor">try</button>
    </div>
</template>

<script>
import * as monaco from 'monaco-editor'
export default {
    name: 'MonacoEditor',
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
            editor: null
        }
    },
    methods: {
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

<style lang="scss" scoped></style>

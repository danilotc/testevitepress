---
title:  FrontMatter
editLink: true
---

# {{ $frontmatter.title }}
Algum outro conteúdo textual aqui para explicar alguma coisa referente ao título que aparece na tela por causa do frontmatter.


Interpolação: {{ 2 + 1 }}

Diretivas: <span v-for="i in 3">{{ i }}</span>


<script setup>
    import { ref } from 'vue'
    const count = ref(0)
</script>

## Conteúdo Markdown

A contagem é: {{ count }}

<button :class="$style.button" @click="count++">Incrementar</button> - 
<button @click="count--">Decrementar</button> - 
<button @click="count=0">Zerar</button>

<style module>
    .button {
        color: red;
        font-weight: bold;
    }
</style>


### Title <Badge type="info">custom element</Badge>
### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />
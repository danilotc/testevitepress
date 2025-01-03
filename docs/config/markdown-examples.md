---
outline: deep
---

# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

## Título de teste

Algum texto aqui para ilustrar

### Subtítulo de teste

Outro texto aqui explicando

```java{3}
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
        String myVar = "John";
        System.out.println(myVar); // [!code highlight]
    }
}
```

### Outro subtítulo de teste

Texto do outro subtitulo que mostra como criar uma classe para começar a dar vida em projetos com programação orientada a objetos.

```java
public class New {
    String name;  // [!code focus:2]
    double salary;
}
```

Usando `// [!code --]` e `// [!code ++]`

```java
public class New {
    String name;  // [!code --]
    double salary; // [!code ++]
}
```

Mostrando código com número de linhas

```java:line-numbers {1}
// Número de linhas ativado
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
        String myVar = "John";
        System.out.println(myVar);
    }
}
```

Criando grupos de código

::: code-group
```java:line-numbers [Hello.java]
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
        String myVar = "John";
        System.out.println(myVar);
    }
}
```

```java:line-numbers [World.java]
public class World {
    String name;
    double salary;
}
```
:::

## Começando...

Iniciando teste com outro projeto. Estes são anotações do que é criado em cada comando.

### Criar projeto

Quando executar o comando 

```sh
npm add -D vitepress
```

Uma pasta e três arquivos serão criados na raiz, conforme a seguinte estrutura.

```
.
├─ node_modules
├─ package-lock.json
└─ package.json
```

### Iniciar projeto

Aqui será iniciado o projeto, algumas configurações serão necessárias para garantir que o projeto será feito com os padrões que você desejar.

```sh
npx vitepress init
```

Ao executar este comando algumas perguntas serão feitas através do terminal interativo. Essas perguntas irão determinar os padrões do projeto como uso de `TypeScript` ou se o diretório `docs` será utilizado como raiz.

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◆  Theme:
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
└
```

Conforme documentação em [Getting Started](https://vitepress.dev/pt/guide/getting-started).

#### A pasta `docs`

Após esta interação, caso na primeira pergunta você tenha escolhido a opção `./docs` a estrutura do projeto ficará da seguinte forma.

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
├─ node_modules
├─ package-lock.json
└─ package.json
```

## Observação no Build

Para criar o build e funcionar corretamente é necessário informar o comando que irá fazer o build no campo `Build command` e o diretório onde os arquivos complicados para .html ficarão, essa instrução deve estar no campo `Published directory`.

No campo `Build command` adicionar este comando:

```sh
npm run docs:build
```

Já no campo `Published directory` adicionar esta instrução:

```
docs/.vitepress/dist
```

<template>
  <div id="app">
    <fork-link :repo="repo" />
    <header>
      <img src="./assets/logo.png">
      <h1>{{pkg.name}} <span>{{pkg.version}}</span></h1>
      <p>{{pkg.description}}</p>
      <div class="text-center" style="padding: 15px;">
        <a :href="repo" target="_blank">
          <m-button type="info" size="large" round>
            <img src="https://avatars1.githubusercontent.com/u/11366654?s=40&v=4" class="user-img" alt="mengdu">
            Github
          </m-button>
        </a>
        &nbsp;
        <a href="#example"><m-button type="warning" size="large" plain round>Example</m-button></a>
      </div>
    </header>
    <main class="doc-block">
      <m-loader
        url="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"
        library="jQuery"
        @onload="handleLoad"
        @onerror="handleError"
        ></m-loader>
      <readme></readme>
      <Doc/>
    </main>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from './components/footer'
import ForkLink from './components/fork-link'
import Doc from './doc.md'
import Readme from '~/README.md'
import pkg from '~/package.json'

export default {
  name: 'App',
  components: {
    Doc,
    LayoutFooter,
    ForkLink,
    Readme
  },
  data () {
    return {
      pkg
    }
  },
  computed: {
    repo () {
      return pkg.repository.url.replace(/git\+/, '')
    }
  },
  methods: {
    handleLoad () {
      console.log('load', arguments)
    },
    handleError () {
      console.log('error', arguments)
    }
  }
}
</script>

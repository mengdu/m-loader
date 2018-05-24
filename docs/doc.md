<!-- <m-button @click="handleClick" >button</m-button> -->
<script>
  export default {
    data () {
      return {
        url: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js'
      }
    },
    methods: {
      handleClick() {
        this.$loader({
          url: this.url,
          library: 'jQuery'
        }).then(library => {
          console.log(library.target)
        }).catch(err => {
          throw err
        })
      }
    }
  }
</script>

<span id="example"></span>
## Online demo1

:::demo 在线 `demo`。

```html
<div>
 <input type="text" class="m-form-control" v-model="url" style="display: block;width: 100%; margin: 10px 0;">
 <m-button @click="handleClick" type="info">loader</m-button> 
</div>

```

:::


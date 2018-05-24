<!-- <m-button @click="handleClick" >button</m-button> -->
<script>
  export default {
    data () {
      return {
        input: 'hello'
      }
    },
    methods: {
      handleClick() {
        alert('button click');
        console.log(this.input)
      }
    }
  }
</script>

<span id="example"></span>
## Online demo1

:::demo 在线 `demo`。

```html
<m-button @click="handleClick" type="info">info</m-button>
<m-button @click="handleClick" type="danger">danger</m-button>
```

:::


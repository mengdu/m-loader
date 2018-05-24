import loader from './loader'

const MLoader = {
  name: 'm-loader',
  props: {
    url: String,
    type: {
      type: String,
      default: 'script'
    },
    library: String,
    force: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    let {url, type, library, force} = this
    this.$emit('onstart')
    loader({url, type, library, force})
      .then((target) => {
        this.$emit('onload', target.target, target)
      })
      .catch(err => {
        this.$emit('onerror', err)
      })
  },
  render () {
    return null
  }
}

MLoader.install = function (Vue) {
  Vue.component(MLoader.name, MLoader)
  Vue.prototype.$loader = loader
}

export {
  MLoader as default,
  MLoader,
  loader
}

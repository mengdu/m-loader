
let LOADERLIST = {}
let LOADERCOUNT = 0
/**
* 加载脚本对象
* @param {Object} options
* @param {String} options.url 路径
* @param {String} options.type 脚本类型，script or link；默认 script
* @param {String} options.library 脚本挂载window下的属性名
* @param {Boolean} options.force 如果已经加载过，重新加载脚本
* @return {Object} 返回当前对象
**/
function loader (options) {
  if (!options.url) throw new Error('options.url is not undefined.')

  let scriptType = (options.type || 'SCRIPT').toLocaleUpperCase()
  let libraryName = options.library

  return new window.Promise((resolve, reject) => {
    if (!options.force && LOADERLIST[options.url]) {
      let current = LOADERLIST[options.url]

      // 已经加载过
      if (typeof current.status !== 'undefined') {
        if (current.status) {
          resolve(current)
        } else {
          reject(current.error)
        }
        return false
      }
      // 用于并发多个情况
      let onload = current.onload
      let onerror = current.onerror

      current.onload = function () {
        onload && onload(current['target'])
        resolve(current)
      }
      current.onerror = function (err) {
        onerror && onerror(err)
        reject(err)
      }
      return false
    }

    let el = window.document.createElement(scriptType || 'SCRIPT')

    let load = LOADERLIST[options.url] = {}
    load.url = options.url
    load.el = el
    load.type = scriptType
    // console.log(LOADERLIST)
    el.addEventListener('load', function () {
      load.target = window[libraryName]
      load.status = true
      resolve(load)
      if (load.onload && typeof load.onload === 'function') {
        load.onload(load)
      }
    }, false)

    el.addEventListener('error', function (err) {
      load.status = false
      load.error = err
      reject(err)
      if (load.onerror && typeof load.onerror === 'function') {
        load.onerror(err)
      }
    }, false)

    if (scriptType === 'SCRIPT') {
      el.src = options.url
    } else if (scriptType === 'LINK') {
      el.href = options.url
    }
    el.setAttribute('id', 'loader-' + LOADERCOUNT++)
    window.document.head.appendChild(el)
  })
}

export {
  loader as default,
  loader
}

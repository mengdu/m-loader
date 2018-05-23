
let LOADERLIST = {}

function loader (options) {
  if (!options.url) throw new Error('options.url is not undefined.')

  let scriptType = (options.type || 'SCRIPT').toLocaleUpperCase()
  let libraryName = options.library
  return new Promise((resolve, reject) => {
    if (!options.force && LOADERLIST[options.url]) {
      LOADERLIST[options.url].onload = function () {
        resolve(LOADERLIST[options.url]['target'])
      }
      LOADERLIST[options.url].onerror = function (err) {
        reject(err)
      }
      return false
    }

    let el = document.createElement(scriptType || 'SCRIPT')

    let load = LOADERLIST[options.url] = {}
    load.url = options.url
    load.el = el
    load.type = scriptType
    console.log(LOADERLIST)
    el.addEventListener('load', function () {
      load.target = window[libraryName]
      resolve(load.target, load)
      if (load.onload && typeof load.onload === 'function') {
        load.onload(load.target, load)
      }
    }, false)

    el.addEventListener('error', function (err) {
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
    document.head.appendChild(el)
  })
}

loader.list = function (urls) {
  return Promise.all(urls)
}

export {
  loader as default,
  loader
}

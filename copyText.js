export default copyText = function (text = '', successFn = () => {}, errorFn = () => {}) {
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.setAttribute('value', text)
    input.select()
    if (document.execCommand('copy')) {
      document.execCommand('copy')
      typeof successFn === 'function' && successFn()
    } else {
      typeof errorFn === 'function' && errorFn()
    }
    document.body.removeChild(input)
}

/**
 * 文件下载
 * @description 基于 axios 返回结果
 * @param response
 * @param {string} fileName=timestamp - 文件名
 * @param {string} fileExt=.xls - 文件类型
 */
export const fileDownloadTrigger = (response, fileExt = '.xls') => {
  const type = response.headers['content-type']
  const file = /filename="(.*)"/.exec(response.headers['content-disposition'])
  const blob = new Blob([response.data], {type: type, encoding: 'UTF-8'})
  const link = document.createElement('a')
  const href = window.URL.createObjectURL(blob)
  link.href = href
  link.download = (file && decodeURIComponent(file[1])) || +(new Date().getTime()) + fileExt
  document.body.append(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(href)
}

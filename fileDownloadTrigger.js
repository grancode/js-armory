/**
 * 文件下载
 * @param response
 * @param {string} fileName=timestamp - 文件名
 * @param {string} fileExt=.xls - 文件类型
 */
export const fileDownloadTrigger = (response) => {
  const type = response.headers["content-type"]
  const file = /filename=(.*);/.exec(response.headers["content-disposition"])
  const blob = new Blob([response.data], {type: type, encoding: "UTF-8"})
  const link = document.createElement("a")
  link.href = window.URL.createObjectURL(blob)
  link.download = (file && file[1]) || +(new Date().getTime()) + ".xls"
  document.body.append(link)
  link.click()
  document.body.removeChild(link)
}

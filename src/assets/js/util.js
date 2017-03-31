export var myFn = {
  /* 根据类名(class)获取元素
  */
  getElementByClass: function (oParent, target) {
    var aEle = oParent.getElementByTagName('*')
    var aResult = []
    var reg = new RegExp('\\b' + target + '\\b', 'i')
    var i = 0
    for (i = 0; i < aEle.length; i++) {
      if (reg.test(aEle[i].className)) {
        aResult.push[aEle[i]]
      }
    }
    return aResult
  },
  /* 获取元素style
  注意：如果不设置元素的宽度和高度，那么在非IE浏览器下返回默认的宽度和高度。在IE下面返回auto字符串
  */
  getObjStyle: function (obj) {
    var style = null
    if (window.getComputedStyle) {
      style = window.getComputedStyle(obj, null) // 非IE
    } else {
      style = obj.currentStyle // IE
    }
    return style
  }
}

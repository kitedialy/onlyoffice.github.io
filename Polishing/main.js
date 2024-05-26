(function(window, undefined) {
    window.Asc.plugin.init = function(initData) {
      // 自定义逻辑
      // ...
  
      // 在插件 iframe 之外释放鼠标按钮时调用的函数
      window.Asc.plugin.onExternalMouseUp = function() {
        var event = document.createEvent('MouseEvents')
        event.initMouseEvent('mouseup', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null)
        document.dispatchEvent(event)
      }
  
      window.Asc.plugin.button = function(id) {
        // 被中断或关闭窗口
        if (id === -1) {
          this.executeCommand('close', '')
        }
        }
    }
  })(window, undefined)

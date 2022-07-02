import { useState, useEffect } from 'react'

/**
 * 在组件中为 window 注册的全局事件, 以及定时器, 在组件卸载前要清理掉, 防止组件卸载后继续执行影响应用性能.
 * @returns 
 */
function TestInterval() {
  let [index, setIndex] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setIndex(prev => prev + 1)
      console.log('定时器在运行...', timer);
    }, 1000)
    return () => clearInterval(timer)
  }, []);

  return (
    <button>
      {index}
    </button>
  )
}

export default TestInterval;
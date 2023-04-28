(function flexible(window, document) {
  const docEl = document.documentElement
  const dpr = window.devicePixelRatio || 1

  // function setBodyFontSize() {
  //   if (document.body)
  //     document.body.style.fontSize = `${12 * dpr}px`
  //   else
  //     document.addEventListener('DOMContentLoaded', setBodyFontSize)
  // }
  // setBodyFontSize()

  function setRemUnit() {
    console.log('是是是色二群')
    if (docEl.clientWidth >= 1280) {
      const rem = docEl.clientWidth / 19.2
      docEl.style.fontSize = `${rem}px`
    }
    else {
      const rem = 1280 / 19.2
      docEl.style.fontSize = `${rem}px`
    }
  }

  setRemUnit()

  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', (e) => {
    if (e.persisted)
      setRemUnit()
  })

  if (dpr >= 2) {
    const fakeBody = document.createElement('body')
    const testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1)
      docEl.classList.add('hairlines')

    docEl.removeChild(fakeBody)
  }
}(window, document))

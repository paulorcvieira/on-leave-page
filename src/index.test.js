import OnLeavePage from '.'

describe('OnLeavePage', () => {
  let callback
  let onLeavePage
  const delay = 1000
  jest.useFakeTimers()

  beforeEach(() => {
    callback = jest.fn()
    onLeavePage = new OnLeavePage(callback, delay)
  })

  it('should run the callback function if user goes out of the screen', () => {
    jest.advanceTimersByTime(delay)
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))

    expect(callback).toHaveBeenCalled()
  })

  it('should not run the callback function if user moves inside the page', () => {
    document.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: new EventTarget() })
    )

    expect(callback).not.toHaveBeenCalled()
  })

  it('should not run the callback before the delay passed', () => {
    document.dispatchEvent(new MouseEvent('mouseout'))

    expect(callback).not.toHaveBeenCalled()
  })

  it('should remove the listener when destroyed ', () => {
    onLeavePage.destroy()
    jest.advanceTimersByTime(delay)
    document.dispatchEvent(new MouseEvent('mouseout'))

    expect(callback).not.toHaveBeenCalled()
  })

  it('should call the callback function only once', () => {
    jest.advanceTimersByTime(delay)
    document.dispatchEvent(new MouseEvent('mouseout'))
    document.dispatchEvent(new MouseEvent('mouseout'))

    expect(callback).toHaveBeenCalledTimes(1)
  })
})

import createBrowserHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'

/**
 * 需配合react-router使用
 * @param gaCode
 */
const useGaListener = (gaCode: string) => {
  const customHistory = createBrowserHistory()
  ReactGA.initialize(gaCode)
  customHistory.listen((location) => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(location.pathname + location.search)
  })
  return customHistory
}
export default useGaListener

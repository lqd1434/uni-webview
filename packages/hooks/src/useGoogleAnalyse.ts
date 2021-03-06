import {createBrowserHistory} from 'history';
import ReactGA from 'react-ga'

/**
 * 需配合react-router使用
 * @param gaCode ga跟踪id
 */
export const useGaListener = (gaCode: string) => {
  const customHistory = createBrowserHistory()
  ReactGA.initialize(gaCode)
  customHistory.listen((location) => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(location.pathname + location.search)
  })
  return customHistory
}

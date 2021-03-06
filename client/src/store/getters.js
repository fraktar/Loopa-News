const getters = {
  authView: state => state.authView,
  isLoading: state => state.isLoading,
  isFetchingMore: state => state.isFetchingMore,
  notifications: state => state.notifications,
  isAuthWidgetOpen: state => state.isAuthWidgetOpen,
  isNotificationPanelOpen: state => state.isNotificationPanelOpen,
  routeParams: state => state.route.params,
  appAlerts: state => state.appAlerts
}

export default getters

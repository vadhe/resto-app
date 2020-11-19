import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    NotificationHelper.sendNotification({
      title: message.data,
    });
  },
};
export default WebSocketInitiator;
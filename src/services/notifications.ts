import * as Notifications from "expo-notifications"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowList: true,
    shouldShowBanner: true,
    shouldSetBadge: false
  })
})

export async function requestNotificationPermission() {
  const { status } = await Notifications.requestPermissionsAsync()

  return status === "granted";
}


export async function sendInstantNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "📢",
      body: "Essa mensagem é imediata."
    },
    trigger: null
  })
}

export async function sendDelayNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Notificação Atrasada",
      body: "Passaram 5 segundos."
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 5,
      // repeats: true
    }
  })
}

export async function cancelAllNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync()
}

export async function sendNotificationSound() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "🎹",
      body: "Essa mensagem é com som.",
      sound: "default"
    },
    trigger: null
  })
}
import { StyleSheet, View } from 'react-native'
import React from 'react'

import Button from '@/components/Button'

import {
  requestNotificationPermission,
  sendInstantNotification,
  sendDelayNotification,
  cancelAllNotifications,
  sendNotificationSound
} from '@/services/notifications'


export default function App() {

  async function execute(action: () => Promise<void>) {
    const granted = await requestNotificationPermission()

    if (!granted) {
      alert("Permissão Negada.")
      return;
    }

    await action()
  }

  return (
    <View style={styles.container}>
      <Button
        title='Notificações Imediatas'
        onPress={() => execute(sendInstantNotification)}
      />

      <Button
        title='Após 5 segundos'
        onPress={() => execute(sendDelayNotification)}
      />

      <Button
        title='Notificação com som'
        onPress={() => execute(sendNotificationSound)}
      />

      <Button
        title='Cancelar Todas as notificações'
        onPress={() => execute(cancelAllNotifications)}
      />

      <Button title='Quinto Button' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 20,
  }
})
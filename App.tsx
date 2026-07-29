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

import {
  simpleVibration,
  repeatVibration,
  cancelVibration,
  longVibration
} from '@/services/vibration'


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

      <Button title='Vibrador simples' 
      onPress={simpleVibration}
      />

      <Button title='Vibrador longo' 
      onPress={longVibration}
      />

      <Button title='Vibrador repetido' 
      onPress={repeatVibration}
      />

      <Button title='Cancelar Vibrador' 
      onPress={cancelVibration}
      />

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
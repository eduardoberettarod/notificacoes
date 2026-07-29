import { Vibration } from 'react-native'

export function simpleVibration() {
  Vibration.vibrate()
  console.log("Ta vibrando")
}

export function longVibration() {
  Vibration.vibrate(2000)
  console.log("Vibrando longamente");
}

export function repeatVibration() {
  Vibration.vibrate(2000, true)
  console.log("Ta vibrando muito")
}

export function cancelVibration() {
  Vibration.cancel
  console.log("Parou de Vibrar")
}
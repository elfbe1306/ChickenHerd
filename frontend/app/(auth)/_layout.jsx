import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login"/>
      <Stack.Screen name="SignUp"/>
    </Stack>
  )
}

export default AuthLayout
import React from 'react'
import { Dashboard } from '../dashboard/Dashboard'
import { Carsouel } from '../carsouel/Carsouel'
import {Body } from '../body/Body'

export const Home = () => {
  return (
    <div>
      <Dashboard />
      <Carsouel />
      <Body />
    </div>
  )
}

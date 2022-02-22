import express, { Router } from 'express'
import authRoute from './auth.route.js'

const router = Router()

const routeIndex = [
  {
    path: '/auth',
    route: authRoute,
  },
]

routeIndex.forEach((route_part) => {
  router.use(route_part.path, route_part.route)
})

export default router

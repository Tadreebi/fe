import React from 'react'
import { useLocation } from 'react-router-dom'
import routes from 'src/Routes/dashboard'
import { Breadcrumb, BreadcrumbItem } from '../Root/Breadcrumb'

const DashboardBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <Breadcrumb className="m-0 ms-2">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <BreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}

export default React.memo(DashboardBreadcrumb)

const resolveRoutes = (route) => {

    if(route.length <= 3) {

        let validRoute = route === '/' ? route : '/:id'
        return validRoute
    }

    return `/${route}/`  //about section
}

export default resolveRoutes;
const resolveRoutes = (route) => {

    if(route.length <= 3) {

        let validRoute = route === '/' ? route : '/:id'
        return validRoute 
    }

    return `/${route}/`  //about section or error404
}

export default resolveRoutes;
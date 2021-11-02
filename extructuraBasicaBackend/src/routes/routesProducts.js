import * as controllerProducts from '../controllers/controllerProducts.js'

const routesProducts = app => {
    
    app.get('/elinicio',controllerProducts.traerInicio)
    app.get('/institucional',controllerProducts.traernosotros)

}
export default routesProducts
module.exports = (error, next) => {
    console.log('entró al handler')
    console.log(error)
    if (error.errors) {
        if (error.errors[0]) {       
            // Errors related to the stores model
            if (error.errors[0].message === 'stores.name cannot be null') next({ error: new Error('El nombre de la tienda no puede estar vacío'), status: 401 })
            else if (error.errors[0].message === 'stores.description cannot be null') next({ error: new Error('La descripción de la tienda no puede estar vacía'), status: 401 })
            else if (error.errors[0].message === 'name must be unique') next({ error: new Error('Ya hay una tienda con este mismo nombre'), status: 401 })
            else if (error.errors[0].message === 'Validation isUrl on logoUrl failed') next({ error: new Error('La url del logo es inválida'), status: 401 })
            else if (error.errors[0].message === 'Validation isUrl on coverPictureUrl failed') next({ error: new Error('La url del cover es inválida'), status: 401 })
            else if (error.errors[0].message === 'stores.address cannot be null') next({ error: new Error('La dirección de la tienda no puede estar vacía'), status: 401 })

            // Errors related to the products model
            else if (error.errors[0].message === 'products.name cannot be null') next({ error: new Error('El nombre del producto no puede estar vacío'), status: 401 })
            else if (error.errors[0].message === 'products.description cannot be null') next({ error: new Error('La descripción del producto no puede estar vacía'), status: 401 })
            else if (error.errors[0].message === 'Validation isUrl on pictureUrl failed') next({ error: new Error('La url de la foto del producto es inválida'), status: 401 })

            // Errors related to both
            else if (error.errors[0].message === 'Validation notEmpty on name failed') next({ error: new Error('El nombre no puede estar vacío'), status: 401 })
            else if (error.errors[0].message === 'Validation notEmpty on description failed') next({ error: new Error('La descripción no puede estar vacía'), status: 401 })

            else next({ error: new Error(error.errors[0].message), status: 401 })
        }
        else {
            console.log('Primer else')
            next({ error: new Error(error.message), status: 500 })
        }
    }
    else if (error.error) {
        console.log('Segundo else')
        next({ error: new Error(error.error), status: 401 })
    }
    else{
        console.log('Tercer else')
        next({ error: new Error(error.message), status: 500 })
    }
}
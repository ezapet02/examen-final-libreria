const readline = require(`readline-sync`)
const colors = require(`colors`)

let catalogo = []

console.log(`Bienvenido a la librería El Rincón del Saber`.green)
let opcionMenu = Number(readline.prompt({prompt: `Ingrese una de las siguientes opciones para continuar:
1. Agregar libro
2. Mostrar catálogo
3. Buscar libro por título
4. Eliminar libro
5. Ver estadísticas
6. Ordenar libros
7. Editar libro
`.yellow}))

do{
switch(opcionMenu){
    case 1: 
    let titulo= readline.prompt({prompt: `Por favor ingrese el título del libro
        `.cyan})
    let autor = readline.prompt({prompt: `Por favor ingrese el autor del libro
        `.cyan})
    let precio = Number(readline.prompt({prompt: `Por favor ingrese el precio del libro
        `.cyan}))
    let anoPubli = parseInt(readline.prompt({prompt: `Por favor ingrese el Año del libro
        `.cyan}))

    let objeto = {
       titulo: titulo,
       autor: autor,
       precio: precio,
       anio: anoPubli
    }
    catalogo.push(objeto)

    console.log(`Su libro se agregó con éxito`.green) 
    break

    case 2: 
    if(catalogo.length === 0){
        console.log(`Aún no hay libros registrados`.red)
    }
    else{
        console.log(`Aquí tienes el catálogo registrado`.green)
        catalogo.forEach((objeto, indice) =>{
            indice + 1
            console.log(`
                Título: ${objeto.titulo}
                Autor: ${objeto.autor}
                Precio: ${objeto.precio}
                Año de Publicación: ${objeto.anio}
            `.blue)
        }
    )
    }
    break

    case 3: 
    const pregunta3 = readline.prompt({prompt: `Ingrese el título del libro que desea consultar
        `.cyan})
        const buscaLibro = catalogo.find(objeto => objeto.titulo.toLowerCase() === pregunta3.toLowerCase())
        if(buscaLibro){
            console.log(`
                Título: ${buscaLibro.titulo}
                Autor: ${buscaLibro.autor}
                Precio: ${buscaLibro.precio}
                Año de Publicación: ${buscaLibro.anio}
                
                `.blue)
        }
        else{
            console.log(`Libro no encontrado`.red)
        }
    break

    case 4: 
    const pregunta4 = readline.prompt({prompt: `Ingrese el título del libro que desea eliminar
        `.cyan})
    const eliminarLibro = catalogo.findIndex(i => i.titulo.toLowerCase() === pregunta4.toLowerCase())
    if(eliminarLibro !== -1)
    {
        catalogo.splice(eliminarLibro, 1)
        console.log(`El libro se eliminó correctamente`.green)
    }
    else{
        console.log(`libro no encontrado`.red)
    }

    break
    case 5: 
    if(catalogo.length === 0){
        console.log(`No existen libros registrados`.red)
    }
    else{
        const totalDeLibros = catalogo.length

        const suma = catalogo.reduce((suma, objeto) => suma + objeto.precio, 0)
        const promedio = suma / catalogo.length

        const libroAntiguo = catalogo.reduce((masAntiguo, objeto) => objeto.anio < masAntiguo.anio ? objeto: masAntiguo)

        const libroCaro = catalogo.reduce((masCaro, objeto) => objeto.precio > masCaro.precio ? objeto : masCaro)

        console.log(`
            La cantidad total de libros es: ${totalDeLibros}
            El precio promedio por libro es: ${promedio.toFixed(2)}
            El libro más antiguo guardado se publicó en: ${libroAntiguo.anio}
            El libro más caro cuesta: ${libroCaro.precio}

            `.blue)
    }

    break

    case 6: 
    const ordenPrecio = readline.prompt({prompt:`Desea ordenar el precio de los libros de forma ascendente o descendente
        `.cyan})
        
           if(ordenPrecio === `ascendente`.toLowerCase()){
            const orden1 = catalogo.sort((a, b) => {
                return a.precio - b.precio
        })
        console.log(`El orden ascendente de los precios es:`.green)

        orden1.forEach(objeto =>  console.log(` 
            ${objeto.titulo} - ${objeto.precio}`.blue))
       
        }
        else if(ordenPrecio === `descendente`.toLowerCase()){
            const orden2 = catalogo.sort((a, b) => {
                return b.precio - a.precio
        })
        console.log(`El orden descendente de los precios es:`.magenta)

        orden2.forEach(objeto =>  console.log(`
            ${objeto.titulo} - ${objeto.precio}`.blue))
        }
       
        else{
            console.log(`Dato no válido`.red)
        }

        const ordenAnio = readline.prompt({prompt:`Desea ordenar el año de los libros de forma ascendente o descendente
            `.cyan})
        if(ordenAnio === `ascendente`.toLowerCase()){
            const orden3 = catalogo.sort((a, b) => {
                return a.anio - b.anio
        })
        console.log(`El orden ascendente de los años es:`.green)
        orden3.forEach(objeto =>  console.log(`
            ${objeto.titulo} - ${objeto.anio}`.blue))
        }
        else  if(ordenAnio === `descendente`.toLowerCase()){
            const orden4 = catalogo.sort((a, b) => {
                return b.anio - a.anio
        })
        console.log(`El orden descendente de los años es:`.magenta)
        orden4.forEach(objeto =>  console.log(` 
            ${objeto.titulo} - ${objeto.anio}`.blue))
        }
        else{
            console.log(`Dato no válido`.red)
        }
        

    break

    case 7: 
    const pregunta7 = readline.prompt({prompt: `Ingrese el título del libro que desea modificar
        `.cyan})
        const buscarLibro = catalogo.find(objeto => objeto.titulo.toLowerCase() === pregunta7.toLowerCase())
        if(buscarLibro){
            console.log(`
                Título: ${buscarLibro.titulo}
                Autor: ${buscarLibro.autor}
                Precio: ${buscarLibro.precio}
                Año de Publicación: ${buscarLibro.anio}
                
                `.blue)
        }
        else{
            console.log(`Libro no encontrado`.red)
        }

        console.log("MENSAJE : Por favor ingresar los datos que desea modificar, sino desea modifica un campo dejarlo en blanco".yellow)

    const nuevoTitulo = readline.prompt({prompt:`Nuevo título:`.cyan})
    const nuevoAutor = readline.prompt({prompt:`Nuevo autor:`.cyan})
    const nuevoPrecio = (readline.prompt({prompt:`Nuevo precio:`.cyan}))
    const nuevoAnio = (readline.prompt({prompt:`Nuevo Año de publicación:`.cyan}))

    if (nuevoTitulo.trim() !== ``) buscarLibro.titulo = nuevoTitulo
    if (nuevoAutor.trim() !==``) buscarLibro.autor = nuevoAutor
    if (nuevoPrecio.trim() !== ``) buscarLibro.precio = Number(nuevoPrecio)
    if (nuevoAnio.trim() !== ``) buscarLibro.anio = parseInt(nuevoAnio)

    console.log(`Libro fue editado con éxito`.green)

    break

    case 8: 
    console.log(`Saliendo del Menú`.red)
     break

    default:
        console.log(`Opción no válida`.red)

}
opcionMenu = Number(readline.prompt({prompt: `Ingrese una de las siguientes opciones para continuar:
    1. Agregar libro
    2. Mostrar catálogo
    3. Buscar libro por título
    4. Eliminar libro
    5. Ver estadísticas
    6. Ordenar libros
    7. Editar libro
    8. Salir
    `.yellow}))

}while(opcionMenu != 8)

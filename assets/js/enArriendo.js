const propiedadesArriendo = [
    {
        nombre: 'Moderna Casa Dentro de condominio',
        src: 'https://http2.mlstatic.com/D_NQ_NP_647657-MLC76738092218_062024-W.webp',
        descripcion: 'Casa Acogedora, espaciosa',
        ubicacion: '675 hojuela, Santiago , Buin',
        habitaciones: 2,
        baños: 2,
        costo: 600000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Arriendo casa Simple',
        src:'https://http2.mlstatic.com/D_NQ_NP_787667-MLC54972839373_042023-W.webp',
        descripcion: 'Casa Acogedora',
        ubicacion: '456 el antro, Santiago, los tomo',
        habitaciones: 2,
        baños: 1,
        costo: 670000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://http2.mlstatic.com/D_NQ_NP_910991-MLC76744659034_062024-W.webp',
        descripcion: 'Moderno condominio de 3 habitaciones en una zona residencial tranquila.',
        ubicacion: '789 Street, buin, lindero',
        habitaciones: 3,
        baños: 2,
        costo: 700000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Duplex en medio de la ciudad',
        src: 'https://http2.mlstatic.com/D_NQ_NP_873928-MLC76758777364_062024-W.webp',
        descripcion: 'Moderno duplex de 2 habitaciones cerca del centro de l ciudad',
        ubicacion: '958 Olympia, Santiago, Las Condes',
        habitaciones: 2,
        baños: 2,
        costo: 320000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa en arriendo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_913114-MLC76089196031_042024-W.webp',
        descripcion: 'Moderno condominio de 3 habitaciones en una zona residencial tranquila.',
        ubicacion: 'Pasaje Iver 854, Olmué, Chile',
        habitaciones: 4,
        baños: 2,
        costo: 620000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en arriendo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_642920-MLC77234174263_062024-W.webp',
        descripcion: 'Moderno condominio de 3 habitaciones en una zona residencial tranquila.',
        ubicacion: '444 el esfuerzo, Valdivia, Chile',
        habitaciones: 2,
        baños: 3,
        costo: 760000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa en arriendo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_947276-MLC77053361042_062024-W.webp',
        descripcion: 'Casa Acogedora, espaciosa',
        ubicacion: '333 Cerro la Campana, Olmué, Chile',
        habitaciones: 5,
        baños: 4,
        costo: 890000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa arriendo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_836816-MLC77224440359_062024-W.webp',
        descripcion: 'Casa Acogedora, espaciosa',
        ubicacion: '1790 el paso, Santiago, Lagranja',
        habitaciones: 3,
        baños: 2,
        costo: 650000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa arriendo',
        src:'https://http2.mlstatic.com/D_NQ_NP_823955-MLC77088568336_062024-W.webp',
        descripcion: 'Casa Acogedora',
        ubicacion: '895 las tranuqeras, los angeles',
        habitaciones: 3,
        baños: 2,
        costo: 850000,
        smoke: false,
        pets: false
    },
];

const arriendoList = document.getElementById('arriendo-list');

function renderizarPropiedades(propiedades, container) {
    propiedades.forEach(propiedad => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p class="card-text">Ubicación: ${propiedad.ubicacion}</p>
                    <p class="card-text">Habitaciones: ${propiedad.habitaciones}</p>
                    <p class="card-text">Baños: ${propiedad.baños}</p>
                    <p class="card-text">Costo: $${propiedad.costo}</p>
                     <p class="card-text"> 
                        ${propiedad.smoke ? '<i class="fa-solid fa-smoking" style="color: green;"></i> Se permite fumar' : '<i class="fa-solid fa-ban-smoking" style="color: red;"></i> No se permite fumar'}
                    </p>
                    <p class="card-text"> 
                        ${propiedad.pets ? '<i class="fa-solid fa-paw" style="color: green;"></i> Se permiten mascotas' : '<i class="fa-solid fa-ban" style="color: red;"></i> No se permiten mascotas'}
                    </p>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

renderizarPropiedades(propiedadesArriendo, arriendoList);
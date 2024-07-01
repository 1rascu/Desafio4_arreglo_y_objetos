const propiedadesVenta = [
    {
        nombre: 'Casa espaciosa ',
        src: 'https://http2.mlstatic.com/D_NQ_NP_619340-MLC53605745170_022023-W.webp',
        descripcion: 'Hermosa casa de 4 habitaciones ',
        ubicacion: '321 Maple Drive, buib, linderos',
        habitaciones: 4,
        baños: 3,
        costo: 500000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa moderna',
        src: 'https://http2.mlstatic.com/D_NQ_NP_656566-MLC73870331978_012024-W.webp',
        descripcion: 'Casa de lujo con diseño moderno.',
        ubicacion: '654 Oak pass, champa, los toros',
        habitaciones: 5,
        baños: 4,
        costo: 12000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en venta',
        src: 'https://http2.mlstatic.com/D_NQ_NP_895339-MLC49654630676_042022-W.webp',
        descripcion: 'Encantadora casa, acogedora',
        ubicacion: '987 Vine tas, La tranca, peralillo',
        habitaciones: 3,
        baños: 2,
        costo: 85000000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa en venta',
        src: 'https://http2.mlstatic.com/D_NQ_NP_785772-MLC76223966521_052024-W.webp',
        descripcion: 'Hermosa casa en cerca de la montaña.',
        ubicacion: '565, Cerro la Campana. Olmué, Chile',
        habitaciones: 5,
        baños: 4,
        costo: 79000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa en venta',
        src: 'https://http2.mlstatic.com/D_NQ_NP_983802-MLC49142925403_022022-W.webp',
        descripcion: 'Encantadora casa, espaciosa, Grande.',
        ubicacion: 'Cerro Alegre, Valparaiso, Chile',
        habitaciones: 3,
        baños: 2,
        costo: 35000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en venta',
        src: 'https://http2.mlstatic.com/D_NQ_NP_705675-MLC41056619493_032020-W.webp',
        descripcion: 'Encantadora casa ',
        ubicacion: '895 Snow Road, Iceland, Alaska ',
        habitaciones: 3,
        baños: 2,
        costo: 450000000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa en la montaña',
        src: 'https://http2.mlstatic.com/D_NQ_NP_968877-MLC49704636670_042022-W.webp',
        descripcion: 'Encantadora casa .',
        ubicacion: '565, Cerro la Campana. Olmué, Chile',
        habitaciones: 5,
        baños: 4,
        costo: 200000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa en venta',
        src: 'https://http2.mlstatic.com/D_NQ_NP_631952-MLC76339471597_052024-W.webp',
        descripcion: 'Encantadora casa ',
        ubicacion: 'Cerro Alegre, Valparaiso, Chile',
        habitaciones: 3,
        baños: 2,
        costo: 13000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en venta',
        src: 'https://http2.mlstatic.com/D_NQ_NP_627886-MLC72337355769_102023-W.webp',
        descripcion: 'Encantadora casa ',
        ubicacion: '895 Snow Road, lautaro, temuco',
        habitaciones: 3,
        baños: 2,
        costo: 20000000,
        smoke: false,
        pets: false
    },
];

const ventaList = document.getElementById('venta-list');

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

renderizarPropiedades(propiedadesVenta, ventaList);

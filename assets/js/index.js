const propiedadesArriendo = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 150000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 2,
        costo: 200000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Moderno condominio de 3 habitaciones en una zona residencial tranquila.',
        ubicacion: '789 Quiet Street, Suburbia, CA 54321',
        habitaciones: 3,
        baños: 2,
        costo: 450000,
        smoke: false,
        pets: false
    },
];

const propiedadesVenta = [
    {
        nombre: 'Casa espaciosa con jardín',
        src: 'https://tindas.es/images/espacios-exteriores-mas-solicitados-casa_7.jpg',
        descripcion: 'Hermosa casa de 4 habitaciones con amplio jardín.',
        ubicacion: '321 Maple Drive, Greentown, CA 65432',
        habitaciones: 4,
        baños: 3,
        costo: 12000000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa moderna con piscina',
        src: 'https://img.freepik.com/fotos-premium/casa-moderna-piscina-vista-al-jardin_865967-3242.jpg?w=740',
        descripcion: 'Casa de lujo con diseño moderno y piscina privada.',
        ubicacion: '654 Oak Street, Luxuryville, CA 98765',
        habitaciones: 5,
        baños: 4,
        costo: 16000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de campo con viñedo',
        src: 'https://previews.123rf.com/images/dpreezg/dpreezg1504/dpreezg150400055/42314894-vista-de-una-casa-de-campo-y-vi%C3%B1edos-en-el-valle-del-r%C3%ADo-hex.jpg',
        descripcion: 'Encantadora casa de campo con su propio viñedo.',
        ubicacion: '987 Vine Road, Wineland, CA 87654',
        habitaciones: 3,
        baños: 2,
        costo: 13000000,
        smoke: true,
        pets: false
    },
];

const ventaList = document.getElementById('venta-list');
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

renderizarPropiedades(propiedadesVenta, ventaList);
renderizarPropiedades(propiedadesArriendo, arriendoList);

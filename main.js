class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

const productos = [
  new Producto(1, 'Leche', 2.50, 'https://www.trainerclub.es/wp-content/uploads/12.jpg'),
  new Producto(2, 'Pan', 1.20, 'https://i.blogs.es/512fb8/pan_comun/1200_900.jpg'),
  new Producto(3, 'Huevos', 3.00, 'https://content21.sabervivirtv.com/medio/2023/11/03/huevos_fe2ba96b_231103092853_1280x720.jpg'),
  new Producto(4, 'Queso', 4.50, 'https://www.lacasadelqueso.com.ar/wp-content/uploads/2017/08/parmigiano-reggiano.jpg'),
  new Producto(5, 'Manzanas', 2.30, 'https://www.univision.com/_next/image?url=https%3A%2F%2Fst1.uvnimg.com%2F02%2F2e%2Fd585843e46a79ed947476b55a21c%2Fshutterstock-226100671.jpg&w=1280&q=75'),
  new Producto(6, 'Arroz', 1.80, 'https://tiaclara.com/wp-content/uploads/2012/03/white-rice-instant-pot-DSCF0251.jpg'),
  new Producto(7, 'Pollo', 5.90, 'https://metroio.vtexassets.com/arquivos/ids/290311/Pollo-Entero-Fresco-Metro-x-kg-2-183284.jpg?v=638179316343400000'),
  new Producto(8, 'Tomates', 1.75, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVSrU4sEyFp-DMR2ztqNQ7sj4p_d9MUwB-Rw&s'),
  new Producto(9, 'Cebollas', 1.40, 'https://upload.wikimedia.org/wikipedia/commons/3/34/Two_colors_of_onions.jpg'),
  new Producto(10, 'Yogurt', 2.80, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJY1388t2aN3oyTF1kaGGU1DcxuBMzV3mMg&s'),
  new Producto(11, 'Cereal', 3.99, 'https://arcorencasa.com/wp-content/uploads/2024/10/20241009-14091.webp'),
  new Producto(12, 'Jabón', 1.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp6zzW7t10p2sAT9EgTtxuncZ5NLg62DKtQ&s'),
  new Producto(13, 'Papel Higiénico', 4.25, 'https://softysar.vtexassets.com/arquivos/ids/158369/label-1.png?v=638937235508970000'),
  new Producto(14, 'Fideos', 1.50, 'https://www.multifood.com.ar/thumb/000Z-001-002-00734870Z-001-002-007-Matarazzo-Coditos_800x800.jpg'),
  new Producto(15, 'Aceite', 3.49, 'https://www.alyser.com.ar/wp-content/uploads/2024/08/140206307.jpg'),
  new Producto(16, 'Azúcar', 2.10, 'https://www.casa-segal.com/wp-content/uploads/2019/03/azucar-kilo-ledesma-reposteria-mendoza-casa-segal-1-600x600.jpg'),
  new Producto(17, 'Sal', 0.99, 'https://carrefourar.vtexassets.com/arquivos/ids/196629/7790072001014.jpg?v=637523688684930000'),
  new Producto(18, 'Café', 5.99, 'https://www.dolce-gusto.com.ar/media/catalog/product/cache/a7ed62b12c9d28aa0842b5a9bc7623a5/h/e/hero_aulait_club.png'),
  new Producto(19, 'Té', 2.45, 'https://www.lahoradelascompras.com/showProductImage/1764266853_5D24A661-6B69-1FBF-1531-9E499127DBB3.jpg')
];

let carrito = [];

// actualiza el contador y el total del carrito
function actualizarCarrito() {
  const contadorSpan = document.getElementById('contadorCarrito');
  const totalSpan = document.getElementById('totalCarrito');
  
  // ctualiza el contador
  contadorSpan.textContent = carrito.length;
  
  // calcula y actualiza total
  const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);
  totalSpan.textContent = total.toFixed(2);
}

function mostrarProductos() {
  const contenedor = document.getElementById('productosTotales');
  contenedor.innerHTML = '';
  
  productos.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.className = 'producto';
    productoDiv.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
      <div class="producto-info">
        <span class="producto-nombre">${producto.nombre}</span>
        <span class="producto-precio">$${producto.precio.toFixed(2)}</span>
      </div>
      <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">
        <i class="fas fa-cart-plus"></i> Agregar
      </button>
    `;
    
    contenedor.appendChild(productoDiv);
  });
}

function buscarProductos() {
  const inputBusqueda = document.querySelector('.searchbar input');
  const filtro = inputBusqueda.value.toLowerCase();
  const contenedor = document.getElementById('productosTotales');
  
  contenedor.innerHTML = '';
  
  // si el filtro está vacío, mostrar todos los productos
  if (filtro === '') {
    mostrarProductos();
    return;
  }
  
  const productosFiltrados = productos.filter(producto => 
    producto.nombre.toLowerCase().includes(filtro)
  );
  
  if (productosFiltrados.length === 0) {
    contenedor.innerHTML = '<p class="no-resultados">No se encontraron productos</p>';
    return;
  }
  
  productosFiltrados.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.className = 'producto';
    productoDiv.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
      <div class="producto-info">
        <span class="producto-nombre">${producto.nombre}</span>
        <span class="producto-precio">$${producto.precio.toFixed(2)}</span>
      </div>
      <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">
        <i class="fas fa-cart-plus"></i> Agregar
      </button>
    `;
    
    contenedor.appendChild(productoDiv);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  
  carrito.push(producto);
  
  // actualizar el contador y el total en el HTML
  actualizarCarrito();
}

// calcula el total
function calcularTotalCarrito() {
  return carrito.reduce((suma, producto) => suma + producto.precio, 0);
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarProductos();

  actualizarCarrito();
  
  // busca el icono de búsqueda por id
  const iconoLupa = document.getElementById('buscador');
  const inputBusqueda = document.querySelector('.searchbar input');
  
  // busca cuando se hace clic en la lupa
  iconoLupa.addEventListener('click', buscarProductos);
  
  // tambien buscar al tocar enter
  inputBusqueda.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      buscarProductos();
    }
  });
});
//SIMULACION DE AUTENTICACION
export const login = async (email, password, sector) => {
  //1. simulamos la peticion a un servidor backend
  await new Promise((resolve) => setTimeout(resolve, 500));

  //2. Base de datos interna y privada que no se exporta directamente
  const usuariosSimulados = [
    { email: 'antonella@gmail.com', password: 'Admin123', nombre: 'Antonella', sector: 'Soporte' },
    { email: 'jimena@gmail.com', password: 'Admin123', nombre: 'Jimena', sector: 'Gerencia' },
    { email: 'maia@gmail.com', password: 'Admin123', nombre: 'Maia', sector: 'Gerencia' },
    { email: 'abril@gmail.com', password: 'Admin123', nombre: 'Abril', sector: 'Soporte' },
    { email: 'guadalupe@gmail.com', password: 'Admin123', nombre: 'Guadalupe', sector: 'Soporte' },
    { email: 'lourdes@gmail.com', password: 'Admin123', nombre: 'Lourdes', sector: 'Gerencia' }
  ];
}
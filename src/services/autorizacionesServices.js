/**
 * Simula el proceso de autenticación de un usuario.
 * @param {string} email - Correo del usuario.
 * @param {string} password - Contraseña ingresada.
 * @param {string} sector - Sector seleccionado (Soporte/Gerencia).
 * @returns {Promise<Object|null>} Datos del usuario con token de sesión o null si falla.
 */
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

  //3. Buscamos el usuario en la base de datos simulada
  const usuarioEncontrado = usuariosSimulados.find(
    (u) => u.email === email && u.password === password && u.sector === sector
  );

  if(!usuarioEncontrado) {
    return null;
  }

  //4. Retorna solo los datos publicos + un token simulado
  return{
    nombre: usuarioEncontrado.nombre,
    email: usuarioEncontrado.email,
    sector: usuarioEncontrado.sector,
    token: `fake-jwt-token-${usuarioEncontrado.nombre.toLowerCase()}-12345`
  };
};
export default { login };
//login de 2 usuarios

const USUARIO_UNO_REGISTRADO = "Franco";
const CONTRASENIA_USUARIO_UNO_REGISTRADO = "Franco123";

const USUARIO_DOS_REGISTRADO = "Ivan";
const CONTRASENIA_USUARIO_DOS_REGISTRADO = "Ivan123"; 

let usuarioUnoNombre = prompt ("ingrese usuario");
let contraseniaUsuarioUno = prompt ("Ingrese contraseña");
// let usuarioDosNombre = prompt ("Ingrese usuario ");
// let contraseniaUsuarioDos = prompt ("Ingrese contraseña ");

if ((USUARIO_UNO_REGISTRADO == usuarioUnoNombre) && (CONTRASENIA_USUARIO_UNO_REGISTRADO == contraseniaUsuarioUno) )
{ document.write ("Bienvenido");
    
} else if ((USUARIO_DOS_REGISTRADO == usuarioUnoNombre) && (CONTRASENIA_USUARIO_DOS_REGISTRADO == contraseniaUsuarioUno)) {
    document.write ("Bienvenido");}

else{

document.write ("Usuario y contraseña inconrrectos");
    
}
/* if ((USUARIO_DOS_REGISTRADO == usuarioUnoNombre) && (CONTRASENIA_USUARIO_DOS_REGISTRADO == contraseniaUsuarioUno)) {
    document.write ("Bienvenido");
    
} else {
    document.write ("Usuario y contraseña inconrrectos");
} */
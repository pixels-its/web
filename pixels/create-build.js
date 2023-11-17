const { exec } = require("child_process");

exec("mkdir build", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el comando: ${error}`);
    return;
  }
  console.log(`Resultado: ${stdout}`);
  console.error(`Errores: ${stderr}`);
});
exec("cp -r ./index.html ./build/index.html", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el comando: ${error}`);
    return;
  }
  console.log(`Resultado: ${stdout}`);
  console.error(`Errores: ${stderr}`);
});
exec("cp -r ./src ./build/src", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el comando: ${error}`);
    return;
  }
  console.log(`Resultado: ${stdout}`);
  console.error(`Errores: ${stderr}`);
});
exec("cp -r ./public ./public", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el comando: ${error}`);
    return;
  }
  console.log(`Resultado: ${stdout}`);
  console.error(`Errores: ${stderr}`);
});

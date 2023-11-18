import { exec } from "child_process";

// Comando para eliminar el directorio "build"
exec("rm -rf build", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al eliminar el directorio: ${error}`);
    throw new Error(error);
  }
  console.log(`Resultado: ${stdout}`);
  console.error(`Errores: ${stderr}`);

  // Comando para recrear el directorio "build"
  exec("mkdir build", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al recrear el directorio: ${error}`);
      throw new Error(error);
    }
    console.log(`Resultado: ${stdout}`);
    console.error(`Errores: ${stderr}`);

    // Comando para sincronizar archivos, excluyendo ciertos archivos/directorios
    exec(
      `rsync -av --exclude='vite.config.js' --exclude='.gitignore' --exclude='.git' --exclude='build' --exclude='package.json' --exclude='package-lock.json' --exclude='node_modules' --exclude='create-build.js' ./ build/`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error al sincronizar archivos: ${error}`);
          throw new Error(error);
        }
        console.log(`Resultado: ${stdout}`);
        console.error(`Errores: ${stderr}`);

        // Comandos para copiar directorios específicos
        exec("cp -r ./src ./build/src", (error, stdout, stderr) => {
          if (error) {
            console.error(`Error al copiar el directorio src: ${error}`);
            throw new Error(error);
          }
          console.log(`Resultado: ${stdout}`);
          console.error(`Errores: ${stderr}`);
        });

        exec("cp -r ./public ./build/public", (error, stdout, stderr) => {
          if (error) {
            console.error(`Error al copiar el directorio public: ${error}`);
            throw new Error(error);
          }
          console.log(`Resultado: ${stdout}`);
          console.error(`Errores: ${stderr}`);
        });
      }
    );
  });
});

import { exec } from "child_process";

exec("mkdir build", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el comando: ${error}`);
    return;
  }
  console.log(`Resultado: ${stdout}`);
  console.error(`Errores: ${stderr}`);
});
exec(
  `rsync -av --exclude='vite.config.js' --exclude='.gitignore'  --exclude='build' --exclude='package.json' --exclude='package-lock.json' --exclude='node_modules' ./ build/`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar el comando: ${error}`);
      return;
    }
    console.log(`Resultado: ${stdout}`);
    console.error(`Errores: ${stderr}`);
  }
);
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

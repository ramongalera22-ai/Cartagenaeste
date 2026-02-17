# 🚀 Guía de Configuración - GitHub Pages

Este documento explica cómo publicar la aplicación Cartagena Este en GitHub Pages.

## 📋 Requisitos Previos

- Tener una cuenta en GitHub (https://github.com)
- Tener Git instalado en tu máquina
- Acceso a terminal/línea de comandos
- Editor de código (Visual Studio Code, Sublime Text, etc.)

## 🔧 Pasos de Configuración

### 1. Preparar el Repositorio Local

El repositorio ya está inicializado en `/tmp/cartagena-este-docs` con:
- **Branch master**: Código fuente
- **Branch gh-pages**: Rama de publicación para GitHub Pages

### 2. Crear el Repositorio en GitHub

1. Accede a https://github.com/new
2. Rellena los datos:
   - **Repository name**: `cartagena-este-docs`
   - **Description**: "Portal de información y servicios - Cartagena Este"
   - **Visibility**: Public (necesario para GitHub Pages gratuito)
   - **Initialize**: No (ya tenemos contenido local)
3. Click en "Create repository"

### 3. Conectar y Empujar Código

En tu terminal, ejecuta estos comandos desde el directorio del proyecto:

```bash
# Si aún no estás en el directorio
cd cartagena-este-docs

# Verificar la configuración remota
git remote -v

# Si la salida anterior no muestra origin, agrégalo:
git remote add origin https://github.com/carlosgalera/cartagena-este-docs.git

# Empujar rama master
git branch -M master
git push -u origin master

# Empujar rama gh-pages
git push -u origin gh-pages
```

### 4. Configurar GitHub Pages

1. Accede a tu repositorio en GitHub
2. Ve a **Settings** > **Pages**
3. En "Source", selecciona:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click en "Save"
5. GitHub Pages se publicará automáticamente en: `https://carlosgalera.github.io/cartagena-este-docs/`

⏳ **Nota**: La publicación tarda 1-2 minutos después de hacer push.

## 🔑 Autenticación con GitHub

### Opción A: Token de Acceso Personal (Recomendado)

1. Ve a GitHub > Settings > Developer settings > Personal access tokens
2. Click en "Generate new token"
3. Nombre: "cartagena-este-docs"
4. Selecciona permisos:
   - ✅ `repo` (acceso completo a repositorios)
5. Copia el token (solo aparece una vez)
6. Usa el token como contraseña al hacer push:

```bash
git push -u origin master
# Se pedirá usuario (tu usuario de GitHub) y contraseña (pega el token)
```

### Opción B: SSH (Avanzado)

Si ya tienes SSH configurado:

```bash
git remote set-url origin git@github.com:carlosgalera/cartagena-este-docs.git
git push -u origin master
git push -u origin gh-pages
```

## ✅ Verificación

Después de hacer push, verifica que todo funciona:

```bash
# Ver ramas remotas
git remote -v
git branch -a

# Ver estado
git log --oneline

# Verificar conexión
git fetch origin
```

## 📱 Visualizar el Sitio

Una vez configurado GitHub Pages:

```
https://carlosgalera.github.io/cartagena-este-docs/
```

El sitio se actualizará automáticamente cada vez que hagas push a la rama `gh-pages`.

## 🔄 Actualizar el Contenido

Para realizar cambios en el futuro:

```bash
# Hacer cambios en los archivos
# ...

# Agregar cambios
git add -A

# Crear commit
git commit -m "Descripción del cambio"

# Empujar a GitHub (automáticamente sube a gh-pages si estás en esa rama)
git push origin gh-pages
```

## 🚨 Solucionar Problemas

### Error: "fatal: 'origin' does not appear to be a 'git' repository"

```bash
git remote add origin https://github.com/carlosgalera/cartagena-este-docs.git
```

### Error: "Permission denied (publickey)"

Asegúrate de haber configurado SSH correctamente o usa HTTPS con token.

### Sitio web no se actualiza

1. Verifica que el push fue exitoso: `git push -u origin gh-pages`
2. Espera 2-5 minutos
3. Usa forzar actualización: `Ctrl+Shift+R` (o `Cmd+Shift+R` en Mac)

### "404 Page not found" en GitHub Pages

Asegúrate de:
1. El repositorio es **público**
2. Rama `gh-pages` está seleccionada en Settings > Pages
3. Los archivos HTML están en la raíz de la rama `gh-pages`

## 📚 Recursos Útiles

- Documentación oficial de GitHub Pages: https://docs.github.com/en/pages
- Guía de Git: https://git-scm.com/doc
- Markdown guide: https://www.markdownguide.org/

## 🎯 Próximos Pasos

Una vez publicado, puedes:

1. **Personalizar dominio** (opcional):
   - Comprar un dominio en Namecheap, GoDaddy, etc.
   - Configurar DNS apuntando a GitHub Pages
   - Agregar el dominio en Settings > Pages > Custom domain

2. **Agregar más contenido**:
   - Editar `app.js` para agregar más documentos, profesionales, etc.
   - Crear nuevas secciones en `index.html`
   - Personalizar estilos en `styles.css`

3. **Optimizar SEO**:
   - Mejorar meta tags en `index.html`
   - Agregar sitemap.xml
   - Configurar robots.txt

4. **Analytics** (opcional):
   - Agregar Google Analytics
   - Configurar en Google Search Console

---

¿Necesitas ayuda? Consulta los recursos o abre un issue en el repositorio.

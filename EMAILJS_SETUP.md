# 📧 Configuración de EmailJS

## Pasos para configurar el envío de correos:

### 1. Crear cuenta en EmailJS
1. Ve a [EmailJS](https://www.emailjs.com/)
2. Crea una cuenta gratuita (permite 200 emails/mes)

### 2. Configurar el servicio de email
1. En el dashboard, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. Copia el **Service ID** que se genera

### 3. Crear una plantilla de email
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa esta plantilla:

```
Subject: Nueva consulta de {{from_name}} - {{brand}}

De: {{from_name}}
Email: {{from_email}}
Empresa/Marca: {{brand}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu Media Kit
```

4. Copia el **Template ID**

### 4. Obtener tu Public Key
1. Ve a **Account** → **General**
2. Copia tu **Public Key**

### 5. Configurar las variables de entorno
1. Copia el archivo `.env.local.example` a `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edita `.env.local` y reemplaza los valores:
   ```env
   VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
   ```

### 6. Reiniciar el servidor de desarrollo
```bash
npm run dev
```

## ✅ ¡Listo!
Ahora cuando alguien envíe el formulario de contacto, recibirás un email directamente en tu bandeja de entrada.

## 🔒 Seguridad
- El archivo `.env.local` está en `.gitignore` y no se subirá a GitHub
- Nunca compartas tus credenciales de EmailJS públicamente
- Para producción, configura las variables de entorno en tu plataforma de hosting (Vercel, Netlify, etc.)

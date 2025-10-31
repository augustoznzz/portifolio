# Configuração do EmailJS para Envio de Mensagens

## 📧 Variáveis de Ambiente Necessárias no Netlify

Configure as seguintes variáveis de ambiente no painel do Netlify:

1. **NEXT_PUBLIC_EMAILJS_SERVICE_ID** - ID do serviço de email configurado no EmailJS
2. **NEXT_PUBLIC_EMAILJS_TEMPLATE_ID** - ID do template de email criado no EmailJS
3. **NEXT_PUBLIC_EMAILJS_PUBLIC_KEY** - Chave pública (Public Key) da sua conta EmailJS

## 🔧 Como Obter essas Informações:

### Passo 1: Criar Conta no EmailJS
1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita (plano free permite até 200 emails/mês)

### Passo 2: Configurar Serviço de Email
1. No dashboard do EmailJS, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. **Copie o Service ID** (aparece após a configuração)

### Passo 3: Criar Template de Email
1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Use o template abaixo como exemplo:

**Subject:**
```
Nova mensagem do portfólio - {{from_name}}
```

**Body (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
    Nova Mensagem do Portfólio
  </h2>
  
  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
    <p><strong>Nome:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
  </div>
  
  <div style="margin: 20px 0;">
    <h3 style="color: #333;">Mensagem:</h3>
    <p style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap;">
      {{message}}
    </p>
  </div>
  
  <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
  
  <p style="color: #666; font-size: 12px;">
    Esta mensagem foi enviada através do formulário de contato do portfólio.
  </p>
</div>
```

**Body (Texto Simples):**
```
Nova Mensagem do Portfólio

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do portfólio.
```

4. **Configure o campo "To Email"** com: `augustozuanazzi03@gmail.com`
5. **Copie o Template ID** (aparece na URL ou no canto superior direito)

### Passo 4: Obter Public Key
1. Vá em **Account** > **General**
2. Procure por **Public Key** ou **API Keys**
3. **Copie a Public Key**

## 📝 Configurar no Netlify

1. Acesse seu site no Netlify
2. Vá em **Site settings** > **Environment variables**
3. Adicione cada variável:

```
Key: NEXT_PUBLIC_EMAILJS_SERVICE_ID
Value: [seu_service_id]

Key: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
Value: [seu_template_id]

Key: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
Value: [sua_public_key]
```

4. Após adicionar as variáveis, faça um novo deploy do site

## ✅ Verificação

Após configurar:
- O formulário enviará mensagens para: **augustozuanazzi03@gmail.com**
- Você receberá um email com o nome, email e mensagem do remetente
- Mensagens de sucesso/erro aparecerão abaixo do botão de envio

## 📧 Email de Destino

O email de destino está configurado como: **augustozuanazzi03@gmail.com**

Este valor deve ser configurado no template do EmailJS no campo "To Email".

## 🔒 Segurança

- **NUNCA** commite as variáveis de ambiente no Git
- Mantenha o `.env.local` no `.gitignore`
- Use apenas variáveis de ambiente no Netlify (não as exponha no código)
- A Public Key é pública por design, mas mantenha as outras credenciais seguras

## 📚 Recursos Úteis

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [EmailJS Templates Guide](https://www.emailjs.com/docs/user-guide/create-email-templates/)

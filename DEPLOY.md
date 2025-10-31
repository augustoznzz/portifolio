# 🚀 Guia de Deploy na Netlify

## Passo a Passo

### 1. Preparar o Repositório

Certifique-se de que seu código está em um repositório Git (GitHub, GitLab ou Bitbucket).

```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
git remote add origin <seu-repositorio-url>
git push -u origin main
```

### 2. Deploy no Netlify

#### Opção A: Via Interface Web

1. Acesse [netlify.com](https://www.netlify.com) e faça login
2. Clique em **"Add new site"** > **"Import an existing project"**
3. Conecte seu repositório (GitHub/GitLab/Bitbucket)
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - Ou simplesmente deixe o Netlify detectar automaticamente (ele reconhece Next.js)
5. Clique em **"Deploy site"**

#### Opção B: Via Netlify CLI

```bash
# Instalar Netlify CLI globalmente
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod
```

### 3. Configurações Importantes

O arquivo `netlify.toml` já está configurado com:
- ✅ Build command correto
- ✅ Plugin Next.js
- ✅ Versão do Node.js

### 4. Variáveis de Ambiente (se necessário)

Se precisar adicionar variáveis de ambiente:
1. Vá em **Site settings** > **Environment variables**
2. Adicione suas variáveis (ex: API keys)

### 5. Domínio Personalizado (Opcional)

1. Vá em **Site settings** > **Domain management**
2. Adicione seu domínio personalizado
3. Configure o DNS conforme instruções

## ✅ Checklist Pré-Deploy

- [ ] Todas as dependências estão no `package.json`
- [ ] O projeto roda localmente (`npm run dev`)
- [ ] O build funciona (`npm run build`)
- [ ] Imagens e assets estão na pasta `public/`
- [ ] Links de redes sociais estão atualizados
- [ ] Informações pessoais estão personalizadas
- [ ] CV em PDF está na pasta `public/` (se aplicável)

## 🐛 Troubleshooting

### Build falha
- Verifique os logs de build no Netlify
- Certifique-se de que todas as dependências estão instaladas
- Verifique se há erros de TypeScript

### Página em branco
- Verifique o console do navegador
- Certifique-se de que o build foi bem-sucedido
- Verifique se há erros no JavaScript

### Imagens não carregam
- Certifique-se de que as imagens estão na pasta `public/`
- Use caminhos relativos começando com `/`
- Verifique permissões do CDN do Netlify

## 📚 Recursos

- [Documentação Netlify](https://docs.netlify.com/)
- [Next.js no Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Netlify Status](https://www.netlifystatus.com/)

---

**Dica**: O Netlify faz deploy automático sempre que você faz push para a branch principal! 🎉


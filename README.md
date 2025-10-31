# Portfólio Pessoal

Um site de portfólio pessoal moderno, minimalista e estiloso desenvolvido com Next.js, TypeScript e Tailwind CSS.

## 🎨 Características

- **Design Minimalista**: Interface limpa e elegante com tons neutros (azul marinho, branco, cinza e bege)
- **100% Responsivo**: Otimizado para dispositivos móveis, tablets e desktops
- **Dark Mode**: Toggle para alternar entre modo claro e escuro
- **Animações Suaves**: Transições e efeitos de scroll reveal com Framer Motion
- **SEO Otimizado**: Meta tags e configurações básicas de SEO
- **Performance**: Código limpo e otimizado

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🛠️ Personalização

### Alterar Informações Pessoais

1. **Hero Section**: Edite `components/Hero.tsx` para alterar nome, avatar e descrição
2. **Sobre Mim**: Edite `components/About.tsx` para atualizar sua biografia e habilidades
3. **Projetos**: Edite o array `projects` em `components/Portfolio.tsx`
4. **Contato**: Edite `components/Contact.tsx` para atualizar links de redes sociais

### Adicionar seu CV

1. Coloque seu arquivo PDF na pasta `public/`
2. Renomeie para `cv.pdf` ou atualize o caminho em `components/About.tsx`

### Configurar Formulário de Contato

O formulário de contato atualmente usa uma simulação. Para integrar com um serviço real:

- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Netlify Forms**: Configuração automática se estiver usando Netlify

## 🌐 Deploy na Netlify

1. Faça push do código para um repositório Git (GitHub, GitLab, Bitbucket)

2. No Netlify:
   - Vá em "Add new site" > "Import an existing project"
   - Conecte seu repositório
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Clique em "Deploy site"

   Ou simplesmente use o arquivo `netlify.toml` já configurado!

3. Após o deploy, seu site estará disponível!

## 📝 Estrutura do Projeto

```
portifolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── DarkModeToggle.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Portfolio.tsx
│   └── ThemeProvider.tsx
├── public/
│   └── (adicione seus arquivos estáticos aqui)
├── netlify.toml
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎯 Próximos Passos

- [ ] Adicionar integração real do formulário de contato
- [ ] Adicionar mais projetos ao portfólio
- [ ] Implementar blog (opcional)
- [ ] Adicionar testes
- [ ] Otimizar imagens com next/image

## 📄 Licença

Este projeto é open source e está disponível sob a [MIT License](LICENSE).

---

Desenvolvido com ❤️ usando Next.js


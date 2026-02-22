# Guia de Deployment - Realiza Projetos em Alumínio

Este documento descreve como fazer o deploy do website em plataformas de hospedagem permanente.

## 📋 Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)
- Conta em uma plataforma de hospedagem (Vercel ou Netlify)
- Acesso ao repositório GitHub

## 🚀 Opção 1: Deploy na Vercel (Recomendado)

### Passo 1: Conectar ao Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione "Import Git Repository"
4. Selecione o repositório `DIGCRAFT/realiza-nova-vers-o-02-02-26`

### Passo 2: Configurar Variáveis de Ambiente
Na aba "Environment Variables", adicione:
```
NODE_ENV = production
VITE_API_URL = https://seu-dominio.com/api
VITE_WHATSAPP_NUMBER = 5511999999999
VITE_EMAIL_CONTATO = contato@realizaemaluminio.com.br
VITE_SHARE_URL = https://seu-dominio.com
```

### Passo 3: Deploy
1. Clique em "Deploy"
2. Aguarde o build completar (geralmente 2-3 minutos)
3. Seu site estará disponível em `https://seu-projeto.vercel.app`

### Passo 4: Configurar Domínio Personalizado (Opcional)
1. Na aba "Settings" → "Domains"
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme instruído

---

## 🚀 Opção 2: Deploy na Netlify

### Passo 1: Conectar ao Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Selecione GitHub como provedor
4. Selecione o repositório `DIGCRAFT/realiza-nova-vers-o-02-02-26`

### Passo 2: Configurar Build
- **Build command:** `pnpm run build`
- **Publish directory:** `dist/public`
- **Node version:** 18 (ou superior)

### Passo 3: Configurar Variáveis de Ambiente
Na aba "Site settings" → "Build & deploy" → "Environment", adicione:
```
NODE_ENV = production
VITE_API_URL = https://seu-dominio.com/api
VITE_WHATSAPP_NUMBER = 5511999999999
VITE_EMAIL_CONTATO = contato@realizaemaluminio.com.br
VITE_SHARE_URL = https://seu-dominio.com
```

### Passo 4: Deploy
1. Clique em "Deploy site"
2. Aguarde o build completar
3. Seu site estará disponível em `https://seu-projeto.netlify.app`

### Passo 5: Configurar Domínio Personalizado
1. Na aba "Domain settings"
2. Clique em "Add custom domain"
3. Siga as instruções para configurar DNS

---

## 🔄 Atualizações Automáticas

Ambas as plataformas (Vercel e Netlify) fazem deploy automático quando você faz push para a branch `main` do GitHub.

**Fluxo de atualização:**
1. Faça alterações no código localmente
2. Commit e push para GitHub: `git push origin main`
3. Vercel/Netlify detecta a mudança automaticamente
4. Build é executado automaticamente
5. Site é atualizado em poucos minutos

---

## 🛠️ Deploy Local (Teste antes de publicar)

### Passo 1: Instalar dependências
```bash
pnpm install
```

### Passo 2: Build para produção
```bash
pnpm run build
```

### Passo 3: Visualizar build
```bash
pnpm run preview
```

O site estará disponível em `http://localhost:4173`

---

## 📊 Monitoramento

### Vercel
- Dashboard: https://vercel.com/dashboard
- Logs de build: Clique no projeto → "Deployments"
- Analytics: Clique no projeto → "Analytics"

### Netlify
- Dashboard: https://app.netlify.com
- Logs de build: Clique no site → "Deploys"
- Analytics: Clique no site → "Analytics"

---

## 🔐 Segurança

### Recomendações
1. **Variáveis Sensíveis:** Nunca commit `.env` com dados reais
2. **HTTPS:** Ambas plataformas oferecem SSL gratuito
3. **Headers de Segurança:** Já configurados em `netlify.toml`
4. **Rate Limiting:** Configure na plataforma se necessário

### Checklist
- [ ] Arquivo `.env.example` criado (sem dados sensíveis)
- [ ] `.env` adicionado ao `.gitignore`
- [ ] Variáveis de ambiente configuradas na plataforma
- [ ] HTTPS habilitado
- [ ] Domínio personalizado configurado

---

## 🐛 Troubleshooting

### Build falha
**Solução:**
```bash
# Limpar cache local
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### Site mostra erro 404
**Solução:**
- Verifique se `outputDirectory` está correto em `vercel.json`
- Verifique se `publish` está correto em `netlify.toml`
- Limpe o cache da plataforma e faça novo deploy

### Variáveis de ambiente não funcionam
**Solução:**
- Certifique-se de que as variáveis começam com `VITE_` (Vite exige isso)
- Redeploy após adicionar variáveis
- Verifique em `client/src/` se as variáveis estão sendo usadas corretamente

---

## 📞 Suporte

- **Vercel:** https://vercel.com/support
- **Netlify:** https://support.netlify.com
- **Documentação Vite:** https://vitejs.dev/guide/env-and-mode.html

---

## 🎯 Próximos Passos

1. ✅ Escolha uma plataforma (Vercel ou Netlify)
2. ✅ Conecte seu repositório GitHub
3. ✅ Configure variáveis de ambiente
4. ✅ Faça o primeiro deploy
5. ✅ Configure domínio personalizado
6. ✅ Teste todas as funcionalidades no site ao vivo

**Parabéns! Seu website está permanente! 🎉**

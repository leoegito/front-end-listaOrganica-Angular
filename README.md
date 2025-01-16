# Lista Orgânica Front-End

Este repositório contém o código-fonte do front-end do projeto **Lista Orgânica**, desenvolvido em Angular. O projeto visa auxiliar os consumidores de produtos orgânicos a planejarem suas compras com base em listas colaborativas e atualizadas em tempo real.

## 🚀 Sobre o Projeto

O front-end foi criado para consumir a API RESTful disponível no repositório [Back-End Lista Orgânica](https://github.com/leoegito/listaOrganicaBackEnd). Ele é responsável por disponibilizar uma interface amigável ao usuário, permitindo o cadastro, consulta e gestão de listas de compras de produtos orgânicos.

### Tecnologias Utilizadas
- **Angular 17**: Framework principal.
- **Bootstrap**: Para estilização responsiva.
- **TypeScript**: Linguagem utilizada para desenvolvimento.
- **HTML e SCSS**: Para estruturação e estilização das páginas.

## 📋 Funcionalidades Principais

1. **Autenticação de Usuários**
   - Login com autenticação HTTP Basic.
   - Controle de sessão para usuários autenticados.

2. **Gestão de Listas**
   - Cadastro, edição e exclusão de listas.
   - Visualização de detalhes de produtos de cada lista.

3. **Pesquisa de Produtos**
   - Busca de produtos com sugestões em tempo real (autocomplete).

4. **Painel do Administrador**
   - Funcionalidades específicas para gerenciamento de dados da aplicação.

## 📦 Instalação e Configuração

### Requisitos
- Node.js (versão 16 ou superior).
- Angular CLI instalado globalmente.
- Conexão com a API do projeto (back-end).

### Passo a Passo

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/leoegito/listaOrganicaFrontEnd.git
   cd listaOrganicaFrontEnd
   ```

2. **Instale as Dependências**

   ```bash
   npm install
   ```

3. **Configure o Ambiente**
   
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   API_BASE_URL=http://localhost:8080
   ```

4. **Inicie o Servidor de Desenvolvimento**

   ```bash
   ng serve
   ```

   O front-end estará disponível em [http://localhost:4200](http://localhost:4200).

## 🌟 Estrutura do Projeto

```
listaOrganicaFrontEnd/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── admin/
│   │   ├── admin-product/
│   │   ├── login/
│   │   ├── product-list-details/
│   │   ├── register/
│   │   ├── seller-home/
│   │   ├── user-home/
│   │   ├── admin.guard.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.server.ts
│   │   ├── app.module.ts
│   │   ├── auth.guard.ts
│   │   ├── auth.guard.spec.ts
│   │   ├── auth.service.spec.ts
│   │   ├── auth.service.ts
│   │   ├── shopping-list.service.ts
│   │   ├── types.ts
│   ├── assets/
│   ├── favicon.ico
│   ├── index.html
│   ├── main.server.ts
│   ├── main.ts
│   ├── styles.css
│   ├── test.json
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── README.md
```

## 📑 Rotas Principais

- `/login`: Tela de autenticação.
- `/register`: Tela para cadastro de novos usuários.
- `/user/home`: Página inicial do usuário com resumo das listas de compras.
- `/user/product-list-details/:id`: Detalhes de uma lista específica.
- `/admin`: Painel de administração.
- `/admin/products`: Gerenciamento de produtos pelo administrador.
- `/seller-home`: Página inicial do vendedor com interface específica para cadastramento de produtos e preço.

## 📚 Documentação Complementar

Consulte o repositório do back-end [Lista Orgânica Back-End](https://github.com/leoegito/listaOrganica) para informações detalhadas sobre a API.

## 🤝 Contribuição

Sinta-se à vontade para abrir issues, enviar pull requests ou compartilhar ideias.

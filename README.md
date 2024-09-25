# Projeto front-end

**Nome do grupo: erro 305 (Competecia não detectada)**
 # ***Integrantes:***
- Lucas Alves Castela Pereira - https://github.com/pitercastela/front_end
- Daniel de Jesus Teixeira - https://github.com/DanielJT20/Projeto-Front_End
- João Pedro Borges Souza Santana - https://github.com/JoaoPedro1808/Project-frontend-jp
- Breno Chaves da Cunha - https://github.com/Brenoch/Projeto_front_end


# **Propósito do sistema**

- Servir como um portfólio para apresentar e dar visibilidade aos projetos feitos pelos alunos do ibmec

# *5W2H do sistema*

- **What:** Sistema para apresentar projetos feitos pelos alunos do Ibmec.
- **Where:** O sistema será utilizado na Web.
- **When:** Quando as empresas estiverem buscando por referências dos alunos os quais estão enteressados em contratar
- **Who:** As empresas interessadas em contratar alunos do Ibmec
- **Why:** Servir como um portfólio para apresentar e dar visibilidade aos projetos feitos pelos alunos do ibmec
- **How much:** O custo do projeto será o tempo e esforço para o desenvolvimento da aplicação
- **How:** Mostrando projetos que mostrem o esforço e potencial dos alunos do Ibmec

#  **Requistos funcionais**

- O sistema deve possuir uma pagina de navegação (página principal).
  - A página de navegação deve possuir um link para voltar ao site do ibmec
- O sistema deve exibir os projetos na página de navegação.
  - Os projetos devem ser mostrados por meio de linhas (quantidade a depender do tamanho da tela).
  - Cada projeto deve conter uma imagem.
  - Cada projeto deve conter uma versão reduzida do nome de seus integrantes.
  - Cada projeto deve conter uma descrição reduzida.
  - Cada projeto deve conter as tecnologias usadas nele.
  - Ao clicar em um projeto o usuário deve ser enviado para a página de detalhamento.
- O sistema deve fornecer opções de ordenação dos projetos
  - O usuário deve ser capaz de ordenar a ordem a qual os projetos aparecem (data, nome)
- O sistema deve possuir uma página de detalhamento para cada um dos projetos.
  - As páginas de detalhamento devem possuir uma descrição detalhada.
  - As páginas de detalhamento devem possuir(nome completo, matrícula, curso) dos alunos que fizeram parte do projeto.
  - As páginas de detalhamento devem possuir o papel e o vínculo do aluno com o Ibmec na época em que fez o projeto
  - As páginas de detalhamento devem possuir a data de início e finalização (se houver) dos projetos.
  - As páginas de detalhamento podem conter outros tipos de informação de acordo com a natureza do projeto.
  - As páginas de detalhamento devem conter uma sessão "Sobre nós".
- O sistema deve possuir uma sessão "Sobre nós" para cada um dos projetos.
  - A sessão "Sobre nós" deve ter uma descrição sobre cada aluno, incluindo um email de contato
- O sistema deve possuir filtros para a busca
  - Os filtros devem ser mostrados por meio de caixas clicáveis
  - Os filtros devem ser: (tecnologias, ferramentas, cursos, período, unidades)
- O sistema deve ter uma barra de busca.
- O sistema deve possuir um sistema de paginação.
  - Ao voltar da página de detalhamento, o usuário deve ser enviado para a última página da listagem que ele acessou
- O sistema deverá possibilitar que apenas o administrador modifique informações de usuarios.
  - O administrador deve ser capaz de logar através de um link especial
  - O administrador deve logar usando um login e senha especial dado a ele
  - O administrador deve ser capaz de deslogar usando um botão na página de navegação
  - O botão para o administrador deslogar só deve aparecer se o usuário estiver logado como administrador

#  **Requisitos não funcionais**
- O sistema precisará ser em inglês e português
  - O sistema deve ter um botão ná página inicial que muda o idioma
- O sistema deverá ser desenvolvido usando react
  - As imagems estão no criterio do progamador
  - o sistema tambem tem que ter as cores principais do IBMEC(azul e amarelo)
- O sistema deverá estar em dispostivos Mobile
  - O sistema deve ter uma formar horizontal
- O sistema deverá possuir apenas os nomes e cursos dos alunos, eles não devem possuir um perfil
  - Na pagina principal deve mostarar o nome encurtado dos alunos (nome e um sobrenome) e na pagina de detalhamento o nome completo
- O sistema deverá usar a identidade visual do Ibmec



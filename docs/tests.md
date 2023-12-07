# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção, apresentamos a documentação dos testes realizados pelo grupo para verificar os requisitos funcionais e não funcionais da aplicação web NeuroKids.

## Plano de Testes de Software

Para cada caso de teste (CT), associaremos o requisito, seja funcional ou não funcional, que está sendo verificado. Além disso, indicaremos o artefato (página) onde o teste será executado, juntamente com sua descrição.

**Caso de Teste** | **CT01 - Cadastrar Usuário**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, atuação, genero, email, celular, cep, nascimento, senha, confirma senha e uma breve descrição de si ou algo relevante e clica no botão "Cadastrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam. <br>3) A aplicação armazena os dados.
**Requisitos associados** | RF-002 A aplicação deve permitir que o usuário crie uma conta de acesso. RNF-009 A aplicação deve informar o usuário caso tente inserir um dado inválido no formulário de cadastro.
**Artefatos associados** | cadastro.html
**Resultado esperado** | Criação de cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Logar Usuário**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa email e senha e clica no botão "Entrar".<br>2) A aplicação verifica se há uma conta registrado no banco de dados. <br>3) Se houver uma conta registrada a aplicação libera o acesso às paginas restritas. <br4) A aplicação direciona o usuário para a página de onde parou ou para onde estava navegando
**Requisitos associados** | RF-003 A aplicação deve permitir que o usuário faça login.
**Artefatos associados** | login.html
**Resultado esperado** | Logar usuario, liberando acesso às paginas restritas (perfil.html e area_infantil.html).
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Criptografar Dados**
 :--------------: | ------------
**Procedimento**  | 1) A aplicação deve criptografar dados sensíveis.
**Requisitos associados** | RNF-005 A aplicação deve armazenar os dados de forma segura em conformidade com a LGPD (Lei Geral de Proteção dos Dados).
**Artefatos associados** | Cryptography.js
**Resultado esperado** | Dados criptografados.
**Dados de entrada** | Inserção de dados sensíveis.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Persistir Dados**
 :--------------: | ------------
**Procedimento**  | 1) A aplicação deve persistir dados cadastrais em json server e/ou localStorage.
**Requisitos associados** | RNF-004 A aplicação deve persistir os dados em JSON Server ou LocalStorage.
**Artefatos associados** | LocalStorage.js, db.json
**Resultado esperado** | Dados persistidos.
**Dados de entrada** | Inserção de dados cadastrais e de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT5 - Enviar feedback**
 :--------------: | ------------
**Procedimento**  | 1a) Pelo desktop o usuário deve clicar na palavra "feedback" no menu de navegação superior para ser redirecionado para a página de feedback. <br>1b) Pelo mobile o usuário deve clicar no menu hamburguer e depois clicar no ícone de feedback para ser redirecionado para a página de feedback. <br>2) Estando na página de feedback, o usuário pode preencher o campo "nome" com o próprio nome e o campo "e-mail" com seu próprio e-mail, esses dois campos são opcionais. <br>3) O usuário deve selecionar um dos 03 emojis disponíveis para relatar sua satisfação/experiência com a aplicação. <br> O usuário deve inserir uma mensagem sobre a aplicação no campo "mensagem". <br>4) O usuário deve selecionar o tipo do feedback fornecido, selecionando uma das opções disponíveis (bug, sugestão ou outro). <br>5) Após todos os passos acima terem sido executados o usuário pode escolher enviar e o feedback será direcionado para a equipe desenvolvedora.
**Requisitos associados** | RNF-012 A aplicação deve enviar o feedback do usuário para uma conta de email específica para isso, exclusiva própria dela.<br> RF-011	A aplicação deve conter uma página de feedback.
**Artefatos associados** | feedback.js
**Resultado esperado** | Feedback enviado.
**Dados de entrada** | Inserção de dados do formulário de feedback.
**Resultado obtido** | Sucesso.


## Registro dos Testes de Software

Apresentamos, a seguir, o relatório contendo as evidências dos testes de software conduzidos no sistema, seguindo o plano de testes previamente definido. Cada caso de teste está documentado e é acompanhado por vídeos que validam o correto funcionamento das funcionalidades. A seguir, compartilhamos alguns exemplos.

|*Caso de Teste*                                 |*TC-01 - Cadastrar usuário *                                         |
|---|---|
|Requisito Associado | RF-002 A aplicação deve permitir que o usuário crie uma conta de acesso. RNF-009 A aplicação deve informar o usuário caso tente inserir um dado inválido no formulário de cadastro.|
|Link do vídeo do teste realizado: || 

|*Caso de Teste*                                 |*TC-02 - Logar Usuário *                                         |
|---|---|
|Requisito Associado |  RF-003 A aplicação deve permitir que o usuário faça login.|
|Link do vídeo do teste realizado: | | 


|*Caso de Teste*                                 |*TC-03 - Criptografar Dados *                                         |
|---|---|
|Requisito Associado | RNF-005 A aplicação deve armazenar os dados de forma segura em conformidade com a LGPD (Lei Geral de Proteção dos Dados).|
|Link do vídeo do teste realizado: | | 

|*Caso de Teste*                                 |*TC-04 - Persistir Dados *                                         |
|---|---|
|Requisito Associado |RNF-004 A aplicação deve persistir os dados em JSON Server ou LocalStorage.|
|Link do vídeo do teste realizado: | | 

|*Caso de Teste*                                 |*TC-05 - Enviar feedback *                                         |
|---|---|
|Requisito Associado |RNF-012 A aplicação deve enviar o feedback do usuário para uma conta de email especìfica para isso, exclusiva própria dela.<br> RF-011	A aplicação deve conter uma página de feedback.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe1-t2-neurodiversidade/assets/99815953/c8c43a19-1560-48fd-a46b-d8eeb239878d| 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.


## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.




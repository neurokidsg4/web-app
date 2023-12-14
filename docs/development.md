# Programação de Funcionalidades

A aplicação Web encontra-se hospedada no GitHub Pages e pode ser acessada através do link abaixo:
> - [NeuroKids] (https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-neurodiversidade/src/)

<!--Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo
-->
## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais


|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|-----------------|
|RF-001|A aplicação deve fornecer informações sobre como lidar com crianças neurodiversas no ambiente escolar.| ALTA | Pedro Rodrigues | ambiente_escolar.html |
|RF-002|A aplicação deve fornecer informações que ajudem a identificar possíveis crianças neurodiversas.| ALTA | Pedro Rodrigues | identificar_na_infancia.html |
|RF-003|A aplicação deve conter sugestões de atividades escolares para crianças neurodiversas.|ALTA| Wesley Bruno | atividades_escolares_tdah.html atividades_escolares_tea.html atividades_escolares_tod.html atividades_imprimir_tdah.html atividades_imprimir_tea.html orientacoes_pedagogicas.html plano_escolar_tod.html |
|RF-004|A aplicação deve fornecer informações sobre como lidar com crianças neurodivegentes no ambiente familiar.|ALTA| Pedro Rodrigues | ambiente_familiar.html |
|RF-005|A aplicação deve conter uma sessão específica para pessoas adultas.|ALTA| Todos os Integrantes | index.html
|RF-006|A aplicação deve conter uma sessão específicas para crianças interagir com o conteúdo dinâmico e jogos especializados no desenvolvimento cognitivo, armazenando o resultado de cada jogo concluído.|ALTA| Pedro Rodrigues | area_infantil.html |
|RF-007|A aplicação deve oferecer diferentes níveis de dificuldade e progressão flexível para acomodar diversas habilidades e estilos de aprendizado.|MÉDIA| Todos os Integrantes | atividade_cores.html |
|RF-008|A aplicação deve permitir a busca por atividades específicas.|MÉDIA| Martha Beatriz | index.html
|RF-009|A aplicação deve ter um seção de formulário para coletar feedback de pais e crianças, podendo assim continuar sempre atendendo melhor seus usuários.|MÉDIA| Pedro Rodrigues | feedback.html |
|RF-010|A aplicação deve permitir que os usuários efetuem o login em contas previamente criadas. |ALTA| Wesley Bruno | login.html |
|RF-011|A aplicação deve oferecer a funcionalidade de compartilhamento de conteúdo, permitindo que os usuários compartilhem artigos e atividades nas redes sociais.|BAIXA| Martha Beatriz |index.html|
|RF-012|A aplicação deve fornecer recursos de documentação acessíveis para ajudar os usuários a aproveitar ao máximo a aplicação.|MÉDIA| Martha Beatriz | ajuda_acesso_aplicacao.html; ajuda_atividades_aplicacao.html; ajuda_configuracao_conta.html; guia-alterarconfiguracoes-perfil.html; guia-avaliacao-desempenho.html; guia-como-excluir-conta.html; guia-compartilhamento-conteudos.html; guia-interacao-conteudos.html; guia-mudanca-email-e-senha.html; guia-niveis-dificuldade.html; guia-realizar-atividades.html; guia-verificar-problemas-conexao.html. |
|RF-013|A aplicação deve permitir que os usuários criem novas contas durante a etapa de acesso ao site. |ALTA| Wesley Bruno | cadastro.html|
|RF-014|A aplicação deve ter uma página onde seja possível visualizar as informações pessoais e oferecer um botão para editar as informações.|ALTA|Gustavo Novaes|perfil.html|
|RF-015|A aplicação deve ter uma subtela, dentro da própria tela de perfil, contendo um formulário que permita o usuário editar suas informações cadastrais, alterar senha e excluir conta.|ALTA|Gustavo Novaes|editar-perfil.html; alterar-senha.html; excluir-conta.html;|

### Requisitos não Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|-----------------|
|RNF-009|A aplicação deve informar o usuário caso tente inserir algum dado inválido no formulário de cadastro e de editar o perfil. |MÉDIA| Wesley Bruno | input_invalid.css / celular.js, confirma_senha.js, email.js, nome.js, senha.js |


## Descrição das estruturas:

## Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (inteiro)  | Identificador único do usuário            | 1                                              |
| name           | Texto             | Nome registrado, nome social ou apelido   | angelica                                       |
| photo           | Object            | Foto de rosto do usuário                  | {"lastModified": 1678399500750, "lastModifiedDate": "2023-03-09T22:05:00.750Z", "name": "perfilFoto.png", "size": 195613, "type": "image/png", "webkitRelativePath": ""}              |
| email          | Texto             | Conecta o usuário a uma conta cadastrada  | angelica@gmail.com                             |
| password          | Texto             | Dá acesso ao usuário, dono da conta       | ange1415$1                                  |
| cellPhone        | Texto             | Número de celular pessoal do usuário      | (31)944445555                                |
| gender         | Texto             | Evidencia o gênero de quem está usando a aplicação | mulher                                |
| birth     | Texto             | Evidencia a idade de quem está usando a aplicação  | 14-04-1999                                 |
| cep       | Texto             | Evidencia a região do usuário             | 00111222                                            |
| cidade    | Texto             | Evidencia a cidade do usuário             | Belo Horizonte                                      |
| estado    | Texto             | Evidencia o estado do usuário             | MG                                                  |
| acting        | Texto             | Evidencia qual a relação do usuário com pessoas neurodivergentes, podendo ser, o próprio usuário, neurodivergente também | Pedagoga |
| about          | Texto             | Descreve um pouco sobre o usuário, seus interes entre outras coisas, as quais deseja relatar | Me chamo Angelica. Tenho 39 anos e trabalho com crianças. Meu interesse é aprender mais sobre transtornos para antender melhor as crianças com quem trabalho, caso sejam neuro divergentes |


## Resultado Do Jogo
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (inteiro)  | Identificador único do registro do resultado | 1                                           |
| userId         | Numero (inteiro)  | Identificador único do usuário            | 1                                              |
| name           | Texto             | Nome do jogo, o qual pertence o resultado | jogo-das-cores                                 |
| result      | Numero (inteiro)  | Evidencia o resultado do usuário no jogo numa escala que vai de 0% até 100% | 100          |

# Programação de Funcionalidades

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

<<<<<<< HEAD

|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|-----------------|
|RF-001|A aplicação deve fornecer informações sobre como lidar com crianças neurodiversas no ambiente escolar.| ALTA | Pedro Rodrigues | ambiente_escolar.html |
|RF-002|A aplicação deve fornecer informações que ajudem a identificar possíveis crianças neurodiversas.| ALTA | Pedro Rodrigues | identificar_na_infancia.html |
|RF-003|A aplicação deve conter sugestões de atividades escolares para crianças neurodiversas.|ALTA|  |  |
|RF-004|A aplicação deve fornecer informações sobre como lidar com crianças neurodivegentes no ambiente familiar.|ALTA| Pedro Rodrigues | ambiente_familiar.html |
|RF-005|A aplicação deve conter uma sessão específica para pessoas adultas.|ALTA| Todos os Integrantes | index.html
|RF-006|A aplicação deve conter uma sessão específicas para crianças interagir com o conteúdo dinâmico.|ALTA| Pedro Rodrigues | area_infantil.html |
|RF-007|A aplicação deve oferecer diferentes níveis de dificuldade e progressão flexível para acomodar diversas habilidades e estilos de aprendizado.|MÉDIA| Todos os Integrantes | atividade_cores.html |
|RF-008|A aplicação deve permitir a busca por atividades específicas.|MÉDIA| Martha Beatriz |
|RF-009|A aplicação deve ter um seção de formulário para coletar feedback de pais e crianças, podendo assim continuar sempre atendendo melhor seus usuários.|MÉDIA| Pedro Rodrigues | feedback.html |
|RF-010|A aplicação deve permitir que os usuários efetuem o login em contas previamente criadas. |ALTA| Wesley Bruno | login.html |
|RF-011|A aplicação deve oferecer a funcionalidade de compartilhamento de conteúdo, permitindo que os usuários compartilhem artigos e atividades nas redes sociais.|BAIXA| Martha Beatriz |
|RF-012|A aplicação deve fornecer recursos de documentação acessíveis para ajudar os usuários a aproveitar ao máximo a aplicação.|MÉDIA| Martha Beatriz | index.html
|RF-013|A aplicação deve permitir que os usuários criem novas contas durante a etapa de acesso ao site. |ALTA|
|RF-014|A aplicação deve ter uma página onde seja possível visualizar as informações pessoais e oferecer um botão para editar as informações.|ALTA|Gustavo Novaes|perfil.html|
|RF-015|A aplicação deve ter uma subtela, dentro da própria tela de perfil, contendo um formulário que permita o usuário editar suas informações cadastrais, alterar senha e excluir conta.|ALTA|Gustavo Novaes|editar-perfil.html; alterar-senha.html; excluir-conta.html;|

### Requisitos não Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|-----------------|
|RNF-009|A aplicação deve informar o usuário caso tente cadastrar um email fora do padrão, através de uma mensagem impressa em algum lugar da tela.|MÉDIA| Wesley Bruno | input_erro.css / input_erro.js |

=======
|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve exibir as notícias mais populares. | ALTA | index.html |
|RF-002| Usuários autenticados podem registrar novas notícias. | ALTA | cadastro-noticia.html |
>>>>>>> martha

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |


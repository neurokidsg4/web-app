Método insert(key, value):
Escreve um conteúdo novo no localStorage, dado a chave e valor. Sendo a chave escolhida "user" - que é a chave que deve ser usada para armazenar dados de qualquer usuário - o método vai criptografar o conteúdo (value) antes de escrevêlo. Caso contrário, a escrita será feita normalmente após parseado para string (JSON.stringfy(value)). Após escrever realiza uma busca para certificar se realmente foi escrito e retorna true se tiver sido e false se não tiver sido.

Método select(key):
Busca no localStorage um conteúdo já existente. Se a chave for "user" - que é a chave que deve ser usada para armazenar dados de qualquer usuário - o método vai descriptografar o conteúdo antes de retornar seu valor. Caso contrário, ele irá apenas retornar o conteúdo parseado (JSON.parse()).

Método update(key, value):
Simula uma atualização. Porém, ele sobrescreve o conteúdo já presente no localStorage. Para uma atualização bem sucedida, é preciso buscar os dados com o select(), criar uma lógica que altere apenas os campos que foram de fato alterados e daí chamar o update(), passando chave e valor respectivamente. Após atualizar realiza uma busca para certificar se realmente foi atualizado e retorna true se tiver sido e false se não tiver sido.

Método delete(key):
Deleta o conteúdo da chave presente no localStorage, permanecendo apenas a chave com o valor vazio. Após deletar realiza uma busca para certificar se realmente foi deletado e retorna true se tiver sido e false se não tiver sido.
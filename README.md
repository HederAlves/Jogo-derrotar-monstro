# Jogo-derrotar-monstro

Abaixo estão as instruções do desafio referente a vaga de front-end anunciada por esta instituição, segue avaliação prática e regras.

Tecnologias a serem utilizadas:
Node (>=8);
AngularJS ou Angular (>=v6);
Ng Client / NPM;
Bootstrap;
REST Sever (Api Restful com Node)
Formato do objeto “Player” deverá ser:
{playerName: <string, 15>, data: <timestamp>, score: <int>};
A persistência dos dados pode ser volátil, portanto pode ser controlada através de listas / arrays dentro da própria API;
Aplicação
 

 -A aplicação deve possuir um menu de navegação, com as opções de navegação para as telas Ranking, Iniciar Jogo e Home

 -A aplicação deve possuir as seguintes telas:

 -Home (Tela de boas vindas)

 -Ranking - Listagem da pontuação dos jogadores em order decrescente (Nome, data e pontuação);

 -Iniciar Jogo (chama a tela de Jogo);

 Jogo;
Regras / funcionalidades a serem consideradas:
Para os componentes de controle do jogo (barra de HP, logs, labels e botões) devem ser utilizando apenas CSS e/ou JavaScript, não devem ser utilizado nenhuma outra lib/plugin/component de terceiros. ATENÇÃO ESSA REGRA VALE APENAS PARA A TELA DE JOGOS E SEUS COMPONENTES;
A aplicação deve estar disponível ao executar 'npm run start' ou ‘ng serve’.
Caso hajam dependências de framework, as mesmas devem ser instaladas ao utilizar o comando 'npm install'. 
Serão avaliados os quesitos, organização de código, estrutura do projeto, utilização e reutilização de componentes e conhecimentos sobre o framework escolhido.
Css responsivo;
 
Regras do jogo:
 

 -O jogo deverá ser de turnos, sendo cada turno uma interação do usuário.

 -Ao iniciar o jogo deve ter um botão 'Iniciar jogo'

 -O jogador e o monstro deverão ter uma barra de vida, ambos terão a mesma quantidade de vida (100 hp).

 -O jogador deverá ter 4 botões de interação a seguir:

 -Ataque
 
O jogador irá causar um dano no monstro que deverá ser um valor randômico entre 5-8.

 -Ataque Especial
 
 O jogador causará um dano no monstro que deverá ser um valor randômico entre 7-11.

 O ataque especial necessita de no mínimo 2 turnos após utilização e deverá estar desabilitado enquanto não carregado.
Após o ataque especial o monstro tem 40% de chance de não atacar no próximo turno.
Durante o uso do ataque especial o jogador tem 25% de chance de se curar com 50% do dano causado.

 -Curar

 O jogador receberá um aumento de vida que deverá ser um valor randômico entre 5-10.

 -Desistir

 O jogo deverá ser reiniciado e ir para tela de 'Iniciar jogo'

 A Cada turno de interação o monstro causará um valor randômico entre 6-12 que será debitado da vida do jogador.
O dano do monstro acontecerá primeiro que o do jogador, correndo risco do jogador morrer antes de atacar.
Tanto o jogador quanto o monstro deverão ficar com a barra de vida vermelha, caso esteja com menos de 20% de vida.
O jogo deverá conter uma seção de log de acordo com a ação do usuário e do monstro.
Exemplo:
 

 -Monstro causou dano (-11).

 -Monstro causou dano (-11)

 -Jogador usou a cura (+10)

 -Jogador atacou o monstro (-7)

 -Jogador usou o golpe especial (-11)

 Ao final da simulação o jogo deverá apresentar uma mensagem com a pontuação final (se o jogador ganhou ou perdeu), um campo para inserção do nome do jogador e um botão para salvar o resultado na API Rest (o jogador só deverá ter essa opção de inserir nome no ranking caso vença a partida, caso contrário apresentar apenas o resultado e a opção de voltar), após o salvamento volta-se para a tela ‘Iniciar Jogo’.;
O resultado do jogo deve seguir o calculo: (HPAtualDoJogador * 1000) / QuantidadeDeTurnosJogadas
O modelo da tela do jogo deve seguir o seguinte modelo:


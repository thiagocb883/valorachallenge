# valorachallenge

# Projeto de automação de teste E2E

## Instalando dependências
npm -i

## Rodando o projeto

Para executar via navegador web
```
./node_modules/.bin/cypress open ou npx cypress open
```
Para executar via linha de comando 
```
npx cypress run


#Casos de teste
CT-01
Cenário: Carregar a página em menos de 1.5 segundos
Dado que eu como usuario acesse a página 
E ela carregue em menos de 1.5 segundos
Então terei meu primeiro caso de teste validado

CT-02
Cenário: O video da página inicial não está quebrado
Dado que eu como usuario acesse a página
E ela carregue o video da pagina inicial
Então terei meu segundo caso de teste validado

CT-03
Cenário: O Download de cases e artigos não estão quebrados
Dado que eu como usuario acesse a página de download das cases
E faça os downloads
E as assertações validem o tamanho do arquivo e o nome
Então terei meu terceiro caso de teste validado

CT-04
Cenário: O formulário de contato deve estar enviando o e-mail
Dado que eu acesse a página inicial
E va para a página de fale conosco
E preencha os inputs do formulario
E envie
Então serei redirecionado para uma página de confirmação 


## Considerações finais
Considerando o primeiro caso de teste, para fazer login em menos de 1.5 segundos, as vezes é retornado um erro exclusivamente do carregamento da página.
Pois as vezes o carregamento varia entre 1.4 ~ 1.7 segundos, e considerando o cenário de testes, onde o tempo de carregamento deve ser menor que 1.5, quando esse tempo é ultrapassado,
o primeiro teste falha.

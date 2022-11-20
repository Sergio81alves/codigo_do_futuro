const livros = require('./arquivos') 

const readline = require(readline-sync)

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

if(entradaInicial.toLocaleUperCase() === 'S'){
    console.log('Essas são as categorias disponivel')
    console.log('Estilo de vida',
    '/historia', '/brasileira', 'Américas','/Tecnologia','/ficção','/romance')

const entradaCategoria = readline.question('Qual você escolhe: ')

const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

console.table(retorno)
}else{
   const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas  )
    console.log('Esses são todos os livros: ')
    console.table(livrosOrdenados)
}

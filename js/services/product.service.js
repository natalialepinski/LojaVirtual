angular.module('storeApp')
.service('productService', [function() {
    this.getProducts = function() {
      return [{
        id: 1,
        name: 'Mochila Rosa',
        description: '100% Poliéster',
        fulldescription: 'Produzido em Poliéster. Possui alças e costas espumadas que proporciona maior conforto para os ombros, bolso frontal com fechamento por zíper, compartimento para guardar seu laptop.',
        price: 50,
        photos: [
          'img/mochila_magenta.png'
        ],
        stock: 10,
        quantity: 1,
        category: 'Mochila'
      },{
        id: 2,
        name: 'Mochila Azul',
        description: '100% Poliéster',
        fulldescription: 'Produzido em Poliéster. Possui alças e costas espumadas que proporciona maior conforto para os ombros, bolso frontal com fechamento por zíper, compartimento para guardar seu laptop.',
        price: 50,
        photos: [
          'img/mochila_azul.png'
        ],
        stock: 0,
        quantity: 1,
        category: 'Mochila'
      },{
        id: 3,
        name: 'Mochila Branca',
        description: '100% Poliéster',
        fulldescription: 'Produzido em Poliéster. Possui alças e costas espumadas que proporciona maior conforto para os ombros, bolso frontal com fechamento por zíper, compartimento para guardar seu laptop.',
        price: 50,
        photos: [
          'img/mochila_branca.png'
        ],
        stock: 20,
        quantity: 1,
        category: 'Mochila'
      },{
        id: 4,
        name: 'Carteira Feminina',
        description: 'Porta Celular',
        fulldescription: 'Produzida em couro sintético. Possui bolso interno com zíper e divisora para cartões de credito, com alça de mão, porta celular interno e seu fechamento por botão.',
        price: 25,
        photos: [
          'img/carteira_preta.png'
        ],
        stock: 50,
        quantity: 1,
        category: 'Carteira'
      },{
        id: 5,
        name: 'Carteira Masculina',
        description: 'Produzida em couro',
        fulldescription: 'Produzida em couro. Possui porta níquel, porta notas e porta documentos.',
        price: 45,
        photos: [
          'img/carteira_couro.png'
        ],
        stock: 15,
        quantity: 1,
        category: 'Carteira'
      }];
    }
}])
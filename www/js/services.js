angular.module('starter.services', [])
//Factory pour l'exemple des chats
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
      {
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
      },
      {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
      },
      {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
      },
      {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
      },
      {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
      }
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

//Factory pour les personnes de la CARMA
.factory('Persons', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var persons = [
      {
        id: 0,
        name: 'Julian Schmerkin',
        poste: 'Intégrateur Dev Front',
        face: 'img/ben.png'
      },
      {
        id: 1,
        name: 'Christophe Beauvais',
        poste: 'Dev Front',
        face: 'img/max.png'
      },
      {
        id: 2,
        name: 'Géraldine Legris',
        poste: 'Scrum MAster',
        face: 'img/adam.jpg'
      }
  ];

  return {
    all: function() {
      return persons;
    },
    // remove: function(person) {
    //   persons.splice(persons.indexOf(person), 1);
    // },
    get: function(personId) {
      for (var i = 0; i < persons.length; i++) {
        if (persons[i].id === parseInt(personId)) {
          return persons[i];
        }
      }
      return null;
    }
  };
});

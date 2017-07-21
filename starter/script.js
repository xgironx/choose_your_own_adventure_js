/ 201701260810L EL JUEVES GIRO
// https://github.com/xgironx/choose_your_own_adventure_js


var varAnotherTripYN = 'Y';
promptLetsStart = 'Git to stepping!';
mySpyNameVarPrompted = prompt('what is your spy name?');
alert('yer spy name, mySpyNameVarPrompted: \n' + mySpyNameVarPrompted);


        // I POPULATED THE K/V PAIRS OF THE OBJECT adventure
        // WITH VALUES THAT ARE IN SOME CASES arrays
while (varAnotherTripYN == 'Y') {
  var objUglyAmerican = {
    phraseAttr:     'Ok, lets plan your trip to Spain',
    q1:   'Are you The Ugly American?',
    q1aY:        'Y',
    q1aYAction:  'Go play in traffic',
    q1aN:         'N',
    q1aNAction:   'Lets get started'
    }
    ;
    objWhichDialect  = {
        q1: 'What dialect you do speak: (BAS)que.  (CAS)tilian.  (CAT)alan).  (N)ada',
        q1a1BAS: 'BAS',
        q1a1BASAction:    'start barfights w contentious Basque sailers',
        q1a2CAS:  'CAS',
        q1a2CASAction:    'in Madrid, go ride a horse through El Prado',
        q1a3CAT:  'CAT',
        q1a3CATAction:      'reinvigorate the CommunistParty',
        q1a4N:  'N',
        q1a4NAction:'remain silent, make no sudden moves, avoid eye contact, take notes, trust in prudence'
    }
    ;
    objVascoCultura =  {
        q1: 'What cultural event do you want to see?',
        q1a1: 'Bullfighter gets gored',
        q1a2: 'Running w the Bulls'
      }
      ;
    objVascoTiempo =  {
        q1:     'How many days will you be there? (numbers)?',
        // q1a1: 'W',
        q1a1Action: 'buy cheap camisas & espadrilles',
        // q1a2: 'F',
        q1a2Action: 'dont sweat it, they’ll out-ripe you anyway',
        q1a3Action: 'sell yer savings bonds, burn yer pasaporte'
    }
    ;
    objAndalusCultura = {
        q1:     'What cultural event do you want to see?',
        q1a1:       'Bullfighter gets gored',
        q1a2:       'Andalusion Dresage Throwdown'
        }
        ;
    objAndalusTiempo = {
        q1: 'How many days will you be there?',
        // q1a1: ,
        q1a1response: 'do your laundry in Ebro River',
        // q1a2: 'F',
        q1a2Response: 'use 11 liters of deodorant'
      }
      ;
    objAndalusTalkie = {
        q1:         'Do you speak Castilian?',
        q1aY:           'Y',
        q1aYAction:       'say hello to charming  Barcelona',
        q2:         'Are you comf consorting w locals',
        q2aY:           'Y',
        q2aYAction:      'win Catalan friends, influence Catalan people',
        q2aN:           'N',
        q3:         'TakeBusTour?',
        q3aY:           'Y',
        q3aYAction:      'all aboard',
        q3aN:           'N',
        q3aNAction:      'drink alone, all by yourself, in your hotel room '
        }
        ;
    objCatalanCultura = {
        q1:         'What cultural event do you want to see?',
        q1a1:           'Bullfighter gets gored',
        q1a2:           'Priest drinks too much, starts Monastery brawl',
        q1a3:           'Guerra Civil'
      }
      ;
                // ARE YOU THE UGLY AMERICAN
  var objUglyAmericanPrompted = prompt(`(${objUglyAmerican.q1})`);
          console.log('in objUglyAmericanPrompted' + objUglyAmericanPrompted);
  switch (objUglyAmericanPrompted) {
    case 'Y':
    alert(`(${objUglyAmerican.q1aYAction})`);
      break;
    case 'N':
    alert(`(${objUglyAmerican.q1aNAction})`);
      break;
    default:
          'N';
  }
          // WHICH DIALECT DO YOU SPEAK
  var objWhichDialectPrompted = prompt(`(${objWhichDialect.q1}})`);
            console.log('in objWhichDialectPrompted' + objWhichDialectPrompted);
  switch (objWhichDialectPrompted) {
      case 'BAS':
          alert('Basque:  ' + `(${objWhichDialect.q1a1BASAction})`);
          break;
      case 'CAS':
          alert('Castilian:  ' + `(${objWhichDialect.q1a1CASAction})`);
          break;
      case 'CAT':
          alert('Catalan:  ' + `(${objWhichDialect.q1a1CATAction})`);
          break;
      case 'NADA':
          alert('Provincial n Illiterate:  ' + `(${objWhichDialect.q1a1NAction})`);
          break;
        }
          // WHAT VASCO STUFFZ DO YOU WANT TO SEE
  var objVascoCulturaPrompted = prompt(`(${objVascoCultura.q1}})`);
          console.log('in objVascoCulturaPrompted' + objVascoCulturaPrompted);
  switch (objVascoCulturaPrompted) {
      case 'BAS':
          alert(`(${objVascoCultura.q1a1BASAction})`);
          break;
      case 'CAS':
          alert(`(${objVascoCultura.q1a1CASAction})`);
          break;
      case 'CAT':
          alert(`(${objVascoCultura.q1a1CATAction})`);
          break;
      case 'N':
          alert(`(${objVascoCultura.q1a1NAction})`);
          break;
        }      

          // HOW MANY DAYS?
  var objVascoTiempoPrompted = prompt(`(${objVascoTiempo.q1}})`);
          console.log('in objVascoTiempoPrompted' + objVascoTiempoPrompted);
          var objVascoTiempoPromptedVar = parseInt(objVascoTiempoPrompted);
          alert('objVascoTiempoPromptedVar: ' + objVascoTiempoPromptedVar);
  if (objVascoTiempoPromptedVar < 5){
          alert(`(${objVascoTiempo.q1a1Action})`);
}
else if (objVascoTiempoPromptedVar > 6 && objVascoTiempoPromptedVar < 111) {
         alert(`(${objVascoTiempo.q1a2Action})`);
}
else {
        alert(`(${objVascoTiempo.q1a3Action})`);
}

  var varAnotherTripYN = prompt('plan another trip (Y|N)?');
          console.log('in varAnotherTripYN' + varAnotherTripYN);

  // var varAnotherTripYPrompted = prompt('plan another trip (Y|N)?');
  //         console.log('in varAnotherTripYPrompted' + varAnotherTripYPrompted);
  // switch (varAnotherTripYPrompted) {
  //   case 'Y':
  //     varAnotherTripY = 'Y';
  //     anotherTripVarText = promptLetsStart + '\n' + mySpyNameVar;
  //     // alert(anotherTripVarText);
  //     break;
  //   case 'N':
  //     varAnotherTripYn = 'N';
  //     text = 'Stay at home, drink alone!';
  //     break;      
}


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
return drivers.filter(function (user) { return user.toLowerCase() === name.toLowerCase(); } );
 }
 findMatching(drivers,"Bobby")

 function fuzzyMatch(drivers, name){
    return drivers.filter(function(user){
        return user.slice(0,2) === name.slice(0,2)
    })
 };

 function matchName(driver, name){
    const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
      return drivers.filter(function(user){
        return user.name === name
      })
 }
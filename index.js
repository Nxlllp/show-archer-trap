module.exports = function ShowArcherTraps(dispatch) {

    const TrapSkills = [
		100520,//stun
		150720,//fire
		90920,//slow
		230320,//r-stun
		251020//r-fire
    ];
    
    let gameId = 0;
    
    dispatch.hook('S_LOGIN', 10, event => {
        gameId = event.gameId
    })
    
    dispatch.hook('S_SPAWN_PROJECTILE', 5, (event) => {
        if(gameId == (event.gameId)) return;
        if(TrapSkills.includes(event.skill.id)) {
            event.gameId = gameId;
            return true;
        }
     });
    
 }

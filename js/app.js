
var key,
    gate,
    allEnemies,
    allGems,
    player,
    hearts,
    tollGate;

function app() {

    key = new Key(TOLL_GATE_INIT[tollGateIndex].position.key[0],TOLL_GATE_INIT[tollGateIndex].position.key[1]);

    gate = new Gate(TOLL_GATE_INIT[tollGateIndex].position.gate[0],TOLL_GATE_INIT[tollGateIndex].position.gate[1]);

    allEnemies = [];
    allGems = [];

    for(i = 0; i < TOLL_GATE_INIT[tollGateIndex].position.gems.length; i++){
        allGems.push(new Gem(TOLL_GATE_INIT[tollGateIndex].position.gems[i][0],TOLL_GATE_INIT[tollGateIndex].position.gems[i][1]));
    }

    for(var i = 0; i < TOLL_GATE_INIT[tollGateIndex].position.enemys.length; i++){
        if(TOLL_GATE_INIT[tollGateIndex].matrix[TOLL_GATE_INIT[tollGateIndex].position.enemys[i][1]][TOLL_GATE_INIT[tollGateIndex].position.enemys[i][0]])
            allEnemies.push(new Enemy(TOLL_GATE_INIT[tollGateIndex].position.enemys[i][0], TOLL_GATE_INIT[tollGateIndex].position.enemys[i][1]));
    }

    player = new Player(TOLL_GATE_INIT[tollGateIndex].position.player[0],TOLL_GATE_INIT[tollGateIndex].position.player[1]);

    hearts = new Hearts(player.lifeNum);

    tollGate = new TollGate();

}
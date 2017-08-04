/**
 * 包含基本游戏信息的数组，定义了游戏地图，游戏元素位置等基本要素。
 * @type {[*]}
 */
const TOLL_GATE_INIT = [
    {
        matrix:[
            [0,0,0,0,0],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1]
        ],
        map: [
            'images/water-block.png',
            'images/stone-block.png',
            'images/stone-block.png',
            'images/stone-block.png',
            'images/grass-block.png',
            'images/grass-block.png'
        ],
        position:{
            player:[3,5],
            enemys:[
                    [0,0],
                    [1,1],
                    [2,1],
                    [3,2],
                    [5,2],
                    [4,3],
                    [1,3],
                    [5,3],
                    [3,3],
                    [1,4],
                    [3,4]
            ],
            key: [3,3],
            gate: [0,1],
            gems:[
                [0,3],
                [1,4],
                [2,1],
                [3,1],
                [5,2],
                [4,3]
            ]
        }
    },
    {
        matrix:[
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [0,0,0,0,0]
        ],
        map: [
            'images/stone-block.png',
            'images/grass-block.png',
            'images/stone-block.png',
            'images/stone-block.png',
            'images/stone-block.png',
            'images/water-block.png'
        ],
        position:{
            player:[1,4],
            enemys:[
                    [0,0],
                    [2,1],
                    [3,2],
                    [4,2],
                    [4,3],
                    [1,3]
            ],
            key: [3,4],
            gate: [2,1],
            gems:[
                [1,3],
                [1,4],
                [2,1],
                [3,1],
                [1,3],
                [4,3]
            ]
        }
    },
    {
        matrix:[
                [1,1,1,1,1],
                [1,1,1,1,1],
                [1,1,1,1,1],
                [1,1,1,1,1],
                [1,1,1,1,1],
                [1,1,1,1,1]
        ],
        map: [
            'images/stone-block.png',
            'images/stone-block.png',
            'images/grass-block.png',
            'images/stone-block.png',
            'images/stone-block.png',
            'images/grass-block.png'
        ],
        position:{
            player:[3,5],
            enemys:[
                    [0,0],
                    [2,1],
                    [0,1],
                    [4,1],
                    [3,2],
                    [1,2],
                    [4,2],
                    [4,3],
                    [4,5],
                    [5,5]
            ],
            key: [3,3],
            gate: [0,1],
            gems:[
                [0,3],
                [1,4],
                [2,1],
                [4,1],
                [1,2],
                [4,3]
            ]
        }
    }
];

const ROW_Y = 83,
    COL_X = 101,
    OFFSET_Y = -20,
    LIFE_NUM = 3,
    GEM_VALUE = 100;

/**
 * 表示抽象的游戏元素，作为一个原型类
 * @param {int} x - 元素的列坐标
 * @param {int} y - 元素的行坐标
 * @constructor
 */
var Material  = function (x,y) {

    this.x = x;
    this.y = y;
    
    this.originX = x;
    this.originY = y;

    this.visible = true;

    this.sprite = '';
};
Material.prototype.render = function () {
    if(this.visible) ctx.drawImage(Resources.get(this.sprite), this.x * COL_X, this.y * ROW_Y + OFFSET_Y);
};

Material.prototype.update = function () {};

/**
 * 表示敌人
 * @param x
 * @param y
 * @constructor
 */
var Enemy = function(x,y) {    //敌人
    
    Material.call(this,x,y);
    
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype = Object.create(Material.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(dt) {

    this.x = this.x + dt;

    if(this.x >= 5) this.x = -1;

};

/**
 * 表示主角
 * @param x
 * @param y
 * @constructor
 */
var Player = function(x, y){
    Material.call(this, x, y);
    this.sprite =  'images/'+ charValue +'.png';
    
    this.lifeNum = LIFE_NUM;

    this.gemNum = 0;
};

Player.prototype = Object.create(Material.prototype);
Player.prototype.constructor = Player;

Player.prototype.handleInput = function(e){
    switch (e){
        case 'left':
            if(TOLL_GATE_INIT[tollGateIndex].matrix[0][this.x - 1] !== undefined && TOLL_GATE_INIT[tollGateIndex].matrix[this.y][this.x - 1]) this.x --;
            break;
        case 'right':
            if(TOLL_GATE_INIT[tollGateIndex].matrix[0][this.x + 1] !== undefined && TOLL_GATE_INIT[tollGateIndex].matrix[this.y][this.x + 1]) this.x ++;
            break;
        case 'up':
            if(TOLL_GATE_INIT[tollGateIndex].matrix[this.y - 1] !== undefined && TOLL_GATE_INIT[tollGateIndex].matrix[this.y - 1][this.x]) this.y --;
            break;
        case 'down':
            if(TOLL_GATE_INIT[tollGateIndex].matrix[this.y + 1] !== undefined && TOLL_GATE_INIT[tollGateIndex].matrix[this.y + 1][this.x]) this.y ++;
            break;
    }
};

/**
 * 表示珠宝
 * @param x
 * @param y
 * @constructor
 */
var Gem = function (x, y) {
    Material.call(this,x,y);

    var randomNum = Math.round( Math.random() * 3);

    switch (randomNum){
        case 1:
            this.sprite = 'images/Gem Blue.png';
            break;
        case 2:
            this.sprite = 'images/Gem Green.png';
            break;
        case 3:
            this.sprite = 'images/Gem Orange.png';
            break;
        default :
            this.sprite = 'images/Gem Orange.png';
    }
};

Gem.prototype = Object.create(Material.prototype);
Gem.prototype.constructor = Gem;

Gem.prototype.update = function () {

    if(this.x === player.x && this.y === player.y){
        this.visible = false;
        player.gemNum++;
        this.update = function (){}; //珠宝消失后就无需再执行判断了。
    }

};

/**
 * 表示钥匙
 * @param x
 * @param y
 * @constructor
 */
var Key = function (x,y) {

    Material.call(this,x,y);

    this.sprite = 'images/Key.png';
};

Key.prototype = Object.create(Material.prototype);
Key.prototype.constructor = Key;

Key.prototype.update = function () {

    if(this.x === player.x && this.y === player.y){
        this.visible = false;
        this.update = function (){};
    }

};
/**
 * 表示传送门
 * @param x
 * @param y
 * @constructor
 */
var Gate = function (x,y) {

    Material.call(this,x,y);

    this.sprite = 'images/Selector.png';
};

Gate.prototype = Object.create(Material.prototype);
Gate.prototype.constructor = Gate;

Gate.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x * COL_X, this.y * ROW_Y + OFFSET_Y * 2);
};

/**
 * 表示生命值
 * @param n - 玩家的初始生命值
 * @constructor
 */
var Hearts = function (n) {
    this.x = 0;
    this.y = 550;
    this.n = n;

    this.sprite = 'images/Heart.png';
};

Hearts.prototype.render = function () {

    for(var i = 0; i < this.n; i ++)
       ctx.drawImage(Resources.get(this.sprite), this.x + i * 30, this.y,30,40);
};

Hearts.prototype.update = function () {
   this.n--;
};

/**
 * 表示关卡
 * @constructor
 */
var TollGate = function () {

    this.matrix  = TOLL_GATE_INIT[tollGateIndex].matrix[tollGateIndex];

    this.map = TOLL_GATE_INIT[tollGateIndex].map;

};

TollGate.prototype.render = function () {

    var
        numRows = 6,
        numCols = 5,
        row, col;

    /* 便利我们上面定义的行和列，用 map 数组，在各自的各个位置绘制正确的图片 */
    for (row = 0; row < numRows; row++) {
        for (col = 0; col < numCols; col++) {
            /* 这个 canvas 上下文的 drawImage 函数需要三个参数，第一个是需要绘制的图片
             * 第二个和第三个分别是起始点的x和y坐标。我们用我们事先写好的资源管理工具来获取
             * 我们需要的图片，这样我们可以享受缓存图片的好处，因为我们会反复的用到这些图片
             */
            ctx.drawImage(Resources.get(this.map[row]), col * COL_X , row * ROW_Y);

        }
    }
};
function Hero(image, top, left, size,speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    // this.bottom = bottom;
    // this.right = right;


    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;speed:' + this.speed + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        return this.left += 20;
        // console.log('ok: ' + this.left);
    }
    this.maxSpeed = function () {
        this.speed = this.moveRight() + 10;
        console.log('ok: ' + this.speed);
    }

    // this.moveBottom = function {
    //     this.top += 10;
    //     console.log('ok: ' + this.top);
    // }
    //
    // this.moveLeft = function () {
    //     this.right += 20;
    //     console.log('ok: ' + this.right);
    // }
    // this.moveTop = function () {
    //     this.bottom += 20;
    //     console.log('ok: ' + this.bottom);
    // }


}

var hero = new Hero('pngwing.com.png', 30, 40, 400 );

function start() {
    if (hero.left >= window.innerWidth - hero.size) {
    } else {

        // if (hero.top < window.innerHeight - hero.size) {
        //     hero.moveBottom();
        // if(hero.right < window.innerWidth - hero.size) {
        //     hero.moveLeft();
        // if (hero.bottom < window.innerHeight - hero.size){
        //     hero.moveTop();
    }
    hero.maxSpeed();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 800)
}

start();
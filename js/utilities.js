function animate()
{
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    frogger.draw();
    frogger.update();
    requestAnimationFrame(animate);

    handleScoreBoard();
}

animate();

window.addEventListener('keydown', function(e)
{
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40])
    {
        frogger.jump();
    }
});

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode];
    frogger.moving = false;
});

function scored(){
    score++;
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
}

function handleScoreBoard()
{
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '15px verdana';
    ctx4.strokeText('Score', 265, 15);
    ctx4.font = '60px verdana';
    ctx4.strokeText(score, 270, 65);
    ctx4.font = '15px verdana';
    ctx4.strokeText('Collisions: ' + collisionsCount, 10, 175);
    ctx4.strokeText('Game Speed ' + gameSpeed.toFixed(1), 10, 195);
}
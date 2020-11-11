let canvas = document.getElementById("gameWindow");
let scoreBox = document.getElementById("score");

const ctx = canvas.getContext("2d");

let snake = [{
	x: 300,
	y: 300,
}];
let dir= 'right';
let score = snake.length-1;
let fruit = [{
	x: randomFruit(),
	y: randomFruit()
}]
let stone = [{
	x: randomStone(),
	y: randomStone()
}];

function dropStone()
{
	stone.push({
		x: randomStone(),
		y: randomStone()
	});
}
function dropFruit()
{
	fruit.push({
		x: randomFruit(),
		y: randomFruit()
	});
}
function randomFruit()
{
	let res = Math.floor(Math.random()*30)*20;
	for(let i = 0;i<snake.length;i++)
	{
		if(res == snake[i].x || res == snake[i].y)
		{
			randomFruit();
			break;
		}
	}
	if(res > 600 || res < 0 )
	{
		randomFruit();
	}
	return res;
}
function randomStone()
{
	let res = Math.floor(Math.random()*30)*20;
	for(let i = 0;i<snake.length;i++)
	{
		if(res == snake[0].x || res == snake[0].y)
		{
			randomStone();
			break;
		}
	}
	if(res == fruit.x || res == fruit.y)
	{
		randomStone();
	}
	return res;
}

function draw()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);

	
	
	let x = snake[0].x,
		y = snake[0].y;

	switch(dir)
	{
		case 'up':
			y-=20;
			snake.unshift({x,y});
		break;
		case 'down':
			y+=20;
			snake.unshift({x,y});
		break;
		case 'right':
			x+=20;
			snake.unshift({x,y});
		break;
		case 'left':
			x-=20;
			snake.unshift({x,y});
		break;
	}
	snake.pop();
	for(let i = 0; i < snake.length; i++) {
		i==0 ? ctx.fillStyle="#fff" : ctx.fillStyle = "green";
		
	
		if(snake[0].x > 600)
		{
			snake[0].x = 0;
		}
		else if(snake[0].x < 0)
		{
			snake[0].x = 600;
		}
		else if(snake[0].y > 600 )
		{
			snake[0].y = 0;
		}
		else if(snake[0].y < 0)
		{
			snake[0].y = 600;
		}
		ctx.fillRect(snake[i].x, snake[i].y, 20, 20); 
	}
	for(let i = 1;i<snake.length;i++)
	{
		if(snake[0].x == snake[i].x && snake[0].y == snake[i].y)
		{
			clearInterval(interval);
			console.log("stop");
			break;
		}
	}

	for(let i = 1;i<snake.length;i++)
	{
		for(let j = 0;j<stone.length;j++)
		{
			if(snake[i].x == stone[j].x && snake[i].y == stone[j].y)
			{
				console.log("tail defected");
				snake.splice(i,snake.length-i);
			}
		}
	}

	ctx.fillStyle = "red";
	fruit.forEach((item, index)=>{
		ctx.fillRect(item.x, item.y, 20, 20);
		if(snake[0].x == item.x && snake[0].y == item.y)
		{
			scoreBox.innerText = snake.length;
			snake.push(snake[snake.length-1]);
			fruit.splice(index, 1);
			draw();
		}
	});

	for(let i = 0;i<stone.length;i++)
	{
		ctx.fillStyle = "grey";
		ctx.fillRect(stone[i].x, stone[i].y, 20, 20);
		if(snake[0].x == stone[i].x && snake[0].y == stone[i].y)
		{
			clearInterval(interval);
			console.log("stop");
		}
	}
	
}

let interval = setInterval(draw, 100);
setInterval(dropStone, 2000);
setInterval(dropFruit, 1500);
setInterval(()=>{
	let r = Math.floor(Math.random()*stone.length);
	stone.splice(r,1);
}, 3000);

window.addEventListener("keydown", (e)=>{
	
	switch(e.keyCode)
	{
		case 87 :
			if(dir != "down")
			{
				dir = "up";
			}
		break;
		case 83:
			if(dir != "up")
			{
				dir = "down";
			}
		break;
		case 68:
			if(dir != "left")
			{
				dir = "right";
			}
		break;
		case 65:
			if(dir != "right")
			{
				dir = "left";
			}
		break;
	}
	
});
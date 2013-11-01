#pragma strict
var holofab : GameObject;
var randomNumber : int;
var height : int = 1;

function Update () {
	randomNumber = Random.Range(0,100);
	
	if (randomNumber >= 90){
		Instantiate(holofab, Vector3(Random.Range(-8,8), 5, Random.Range(1, -15)), Quaternion.identity);
		height++;
	}
}
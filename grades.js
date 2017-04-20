var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
min = Math.min.apply(Math, scores); 
max = Math.max.apply(Math, scores);
console.log("min",min);
console.log("max", max);

/*
Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
*/

countA = 0;
countB = 0;
countC = 0;
countD = 0;
countF = 0;

for (i=0; i < scores.length; i++)
{
	min = Math.min(scores[i]);
	//console.log("your score is ", scores[i]);
	if (scores[i] < 60){
		grade = "F";
		countF++;
		//console.log("your grade is ", grade);
	} else if (scores[i] > 60 && scores[i] < 71)
	{
		grade = "D";
		countD++;
	} else if (scores[i] > 70 && scores[i] < 81)
	{
		grade = "C";
		countC++;
	} else if (scores[i] > 80 && scores[i] < 91)
	{
		grade = "B";
		countB++;
	}
	else 
	{
		grade = "A";
		countA++;
	}
	console.log("Your score is ", scores[i], "Your grade is ", grade);
	


}

var message = "# with A grade:" + countA + ", # with B grade:"+countB+", # with C grade:"+countC+", # with D grade:" +countD+", # with F grade:"+countF;
console.log(message);











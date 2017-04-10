var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

/*
Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
*/


for (i=0; i < scores.length; i++)
{
	console.log("your score is ", scores[i]);
	if (scores[i] < 60){
		grade = "F";
		//console.log("your grade is ", grade);
	} else if (scores[i] > 60 && scores[i] < 71)
	{
		grade = "D";
	} else if (scores[i] > 70 && scores[i] < 81)
	{
		grade = "C";
	} else if (scores[i] > 80 && scores[i] < 91)
	{
		grade = "B";
	} else 
	{
		grade = "A";
	}
	console.log("your grade is ", grade); 
}
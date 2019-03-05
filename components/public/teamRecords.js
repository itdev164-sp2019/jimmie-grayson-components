function nickNames(){
	var nNames = new Array("Patriots","Dolphins","Bills","Jets","Steelers","Ravens","Browns",
	"Bengals","Texans","Colts","Titans","Jaguars","Bears","Vikings","Packers",
	"Lions","Rams","Seahawks","Cardinals","Forty Niners","*");
	return nNames;
}
function teamName(){
	var tNames = new Array("New England Patriots", "Miami Dolphins", "Buffalo Bills", "New York Jets", "Pittsburgh Steelers", "Baltimore Ravens",
		"Cleveland Browns", "Cincinnati Bengals", "Houston Texans", "Indianapolis Colts", 
		"Tennessee Titans", "Jacksonville Jaguars", "Chicago Bears", "Minnesota Vikings", "Green Bay Packers", "Detroit Lions", "Los Angeles Rams", "Seattle Seahawks",
		"Arizona Cardinals", "San Francisco 49ers", "*");
	return tNames;
}
function nflDivision(){
	var nflRegion = new Array("AFC East", "AFC East", "AFC East",
		"AFC East", "AFC North", "AFC North", "AFC North", 
		"AFC North", "AFC South", "AFC South", "AFC South",
		"AFC South", "NFC North", "NFC North", "NFC North",
		"NFC North", "NFC West", "NFC West", "NFC West",
		"NFC West",  "*");
	return nflRegion;
}
function webProfile(){
	var nflProfile = new Array("http://www.nfl.com/teams/profile?team=NE", "http://www.nfl.com/teams/profile?team=MIA", 
		"http://www.nfl.com/teams/profile?team=BUF", "http://www.nfl.com/teams/profile?team=NYJ", 
		"http://www.nfl.com/teams/profile?team=PIT", "http://www.nfl.com/teams/profile?team=BAL", 
		"http://www.nfl.com/teams/profile?team=CLE", "http://www.nfl.com/teams/profile?team=CIN", 
		"http://www.nfl.com/teams/profile?team=HOU", "http://www.nfl.com/teams/profile?team=IND",
		"http://www.nfl.com/teams/profile?team=TEN", "http://www.nfl.com/teams/profile?team=JAX", 
		"http://www.nfl.com/teams/profile?team=CHI", 
		"http://www.nfl.com/teams/profile?team=MIN", 
		"http://www.nfl.com/teams/profile?team=GB", 
		"http://www.nfl.com/teams/profile?team=DET", 
		"http://www.nfl.com/teams/profile?team=LA", 
		"http://www.nfl.com/teams/profile?team=SEA", 
		"http://www.nfl.com/teams/profile?team=ARI", 
		"http://www.nfl.com/teams/profile?team=SF", "*");
	return nflProfile;
}
function bubbleIt(lgth, arrayName1, arrayName2, arrayName3, arrayName4){
	var flag = 0; var temp1 = 0; var temp2 = 0; var temp3 = 0; var temp4 = 0;
	while (flag == 0)
	{
		flag = 1;
		for (var k = 0; k <= (lgth - 2); k++)
		{
			if (arrayName1[k] > arrayName1[k +1])
			{
				temp1 = arrayName1[k];
				arrayName1[k] = arrayName1[k +1];
				arrayName1[k +1] = temp1;
				
				temp2 = arrayName2[k];
				arrayName2[k] = arrayName2[k +1];
				arrayName2[k +1] = temp2;
				
				temp3 = arrayName3[k];
				arrayName3[k] = arrayName3[k +1];
				arrayName3[k +1] = temp3;
				
				temp4= arrayName4[k];
				arrayName4[k] = arrayName4[k +1];
				arrayName4[k +1] = temp4;
				flag = 0;
			}
		}
	}
}
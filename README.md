# Online-Voting-System

Index Page: Consists of the description of online voting and two login options one for Admin and one for Voter. When user hovers on either of them, the opacity increases making it look focused. Once the user clicks on either of the options they will be redirected to the respective login pages. 

Login Pages: Both the login pages (Admin and Voter) follow the same format. Email and Password verification is provided using regular expressions in javascript. If the email is not given in the format required (with proper domain and @ symbol) or if the password doesn’t follow the rules shown to the user, an alert box pops up telling the user to enter correctly and reloads the page. For the password, when focused on its textbox, the user is shown a set of rules to follow and as and when each rule is satisfied the rule changes its color from red to green indicating the password is in the correct format. Once the user clicks the login button, the lock image on the screen will be unlocked which is a fun feature to be observed. The page is then redirected to the

Admin Page: The page loads with the dashboard as its default page. Has a navigation bar at the top which has links to the Dashboard, Candidates, Positions pages. The brand on the navigation bar is written as Online Voting and upon clicking it takes the user back to the index page.

Dashboard Page: The dashboard consists of the number of voters, number of candidates, number of positions available. Since this website doesn’t have a backend developed yet, the current numbers on those cards are generated randomly.

Candidates and Positions Page: The candidates page allows the admin user to add candidates into the election. The positions page allows the admin user to add the positions into the elections for which the candidates are standing for. This will be displayed on the screen as an appended list with the option of deleting the candidate or position.

Voter Page: The voters page for now consists of three candidates, with their description for election. When the voter votes on any one candidate, an alert box will be shown displaying the candidate they have voted for and they will not be able to vote again. They will be redirected back to the index page.
![Uploading image.png…]()

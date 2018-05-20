# lost_and_found

https://salty-dusk-16693.herokuapp.com/

“lost” table will be posted to site where users can view list of lost items.  Where they may then update the items as “found”.

To operate, user will need to install the following packages (via "node install" or "node i") in the project folder, which were used in making the app:

MySQL, Sequelize, Handlebars; and for testing Mocha and Chai. 

Users will enter the details of an item they are looking for/have lost.  Details include: 

	Their name.
	Their emial.
	Where phone number.
	What the item is.
	A description of the item.
	A link to they upload which will display the item on the lost and found table. 

Once the form is submitted, a modal will display, prompting the user to view the list of lost items or an option to add another item. 

The view table displays the ID number, name, discription of item, date and time the item was lost (automatically populated via MySQL database) along with the item photo.  The "Found" button will update the item from "lost" to "found", which then displays on the Found table. The Found table displays the item ID number, the name of the item, when the item was found (automatically updated/populated via MySQL database) and the name of the person which the item was returned (who updated that the item was lost).

Future plans for tha app include adding a map which displays a pin of where the item was possibly lost.  


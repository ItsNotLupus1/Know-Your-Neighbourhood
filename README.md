# Know Your Neighbourhood
### Know your Neighbourhood Web Application is a store locator web application
#
## How to use this web application
 * First the user can register with the web application using the registration form where he has to submit details such as Full Name, Username and Password
 * After the registration is complete the user can login with the registered username and password or using the Facebook account to login. 
 * Once logged in the user gets reditected to the Dashboard where the user can either search for existing stores or either register the store himself.
 * If the user wants to register the store with the web application he can click on the "Post Store" button in the navigation bar which will redirect him to store registration form where user can fill in the details and register the 
store
* If the user wants to search for other stores he can click on the "Search Store" button on the navigation bar which would redirect him to a search page where the user can search for the stores on the basis of Store Name, 
Store Location or store Phone Number.
* Once the search result is displayed, along with the store details there is also the option to either delete the store entry, update the store details or view the store details
#
## Project Development Background
* Spring Boot and Spring Security was used for the backend of this web application, Every functionality such as register user, register store, search store are exposed as REST API's  user passwords are store in hashes in the MySQL database table, 
this was done using the BCrypt Password Encoder..
* The Frontend of the application was developed using React JS library, the React JS connects with the Spring Boot backend REST API's with the help of Axios library.
* For Login, two login options are kept, one is the traditional login where users can use the applications' login form and other one is the Facebook Login which calls withe Facebook Login API where user would be redirected 
to facebook login page where they have to enter their facebook account details to login after the login is successful they are redirected to the Know Your Neighbourhood's dashboard page


 


 

 

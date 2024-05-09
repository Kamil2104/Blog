# Blog

### A few words about the project

"Blog" is a project with two separate websites - one for the administrator and one for the client. On the administrator's site, after logging in, the user can add new blogs or manipulate existing ones. On the client's site, the user can browse existing blogs. Both sites are fully responsive.


### Instructions for launching the project:

Clone the repository to your local machine: git clone https://github.com/Kamil2104/Blog.git
Start your Control Panel (for example XAMPP (Start Apache and MySQL))
Click Admin button next to Stop button in your XAMPP Control Panel
Import there a database file

For admin panel:
- In first powershell: Navigate to the backend folder directory: cd path_to_project/admin/backend
- Install dependencies for back-end: npm install mysql express cors multer
- Run the server: npm start
- In second powershell: Navigate to the project directory: cd path_to_project/admin
- Install dependencies for front-end: npm install @fortawesome/fontawesome-free axios prop-types 
- Run the application: npm run dev

For client panel:
- In first powershell: Navigate to the backend folder directory: cd path_to_project/client/backend
- Install dependencies for back-end: npm install npm install mysql express cors
- Run the server: npm start
- In second powershell: Navigate to the project directory: cd path_to_project/client
- Install dependencies for front-end: npm install @fortawesome/fontawesome-free axios prop-types moment 
- Run the application: npm run dev



Author: Niewiadomski Kamil
Note: This project was created as a demonstration and may require additional enhancements for production use. Feel free to reach out if you have any questions!

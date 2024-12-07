# Sports Equipment Online Store

## Description

The **Sports Equipment Online Store** is a responsive e-commerce website designed to provide users with a platform to browse, purchase, and review various sports accessories, ranging from gear to apparel, catering to different sports disciplines. This project focuses on creating a dynamic, user-friendly shopping experience with full authentication and product management features. 

The website allows users to:
- Browse through a variety of sports products.
- Log in and manage their personal information.
- Add, update, and delete products in their personal inventory (for logged-in users).
- View detailed information about the products.
  
### **Key Features**

#### **User Authentication:**
- **Registration**: Users can sign up with their name, email, photo URL, and password.
- **Login/Logout**: Users can log in to access private sections of the website. A secure private route prevents unauthorized access to sensitive pages.
- **Private Routes**: Certain sections such as "Add Equipment" and "My Equipment List" are only accessible to authenticated users. If a non-logged-in user tries to access these pages, they will be redirected to the login page.

#### **Product Management:**
- **Add Products**: Logged-in users can add new products to their personal equipment list via a form. This includes uploading images, adding product details, and categorizing them.
- **My Equipment List**: Once a product is added, it appears in the "My Equipment List" section with details such as product name, image, description, and price. Each product card features buttons for:
  - **Details**: Redirects to a dedicated page with detailed information about the product.
  - **Update**: Takes users to a page where they can update the product details.
  - **Delete**: Allows users to delete the product, which removes it from both the backend and frontend.
  
#### **Product Viewing for All Users:**
- **Home Page**: Displays a curated list of 6 products with a "View All" button. Non-logged-in users can click "View All" to be redirected to the **Equipments** page, where all products are displayed in a table format.
- **Equipments Page**: Features a detailed listing of all available products with a **View Details** button. If a user is not logged in and clicks this button, they are redirected to the login page.

#### **Responsive Design:**
- The website is fully responsive, ensuring a smooth user experience across desktops, tablets, and mobile devices.

---

## Technologies Used

- **Frontend:**
  - React for building user interfaces.
  - Tailwind CSS for styling.
  - React Router for navigation and routing.
  - Firebase Authentication for user login and registration.
  
- **Backend:**
  - Firebase Firestore for product management and user data.
  - Firebase Storage for uploading product images.

---

## Live Demo

You can explore the live version of the project at:  
[**Live Project**](https://equisports-d7611.web.app/)

---


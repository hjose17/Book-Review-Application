# Book Review Application

A dynamic Book Review Application that allows users to review around 8000 books using a RESTful API. The app is built with ReactJS on the front-end, Spring Boot for the back-end, and MongoDB for storing book and review data. It integrates with external APIs to retrieve book data and supports user reviews and ratings.

## Features

- **Book Database**: Retrieves information about around 8000 books dynamically through an external API.
- **User Reviews**: Allows users to add, edit, and delete reviews for books.
- **Rating System**: Users can rate books from 1 to 5 stars.
- **Book Search**: Search for books by title, author, or genre.
- **RESTful API**: Built with Spring Boot to handle book and review data.
- **Frontend Interface**: ReactJS-based UI for user interaction.
- **Database**: MongoDB is used for storing reviews, ratings, and user data.
- **Postman Tested**: All APIs are tested and validated using Postman.

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: Spring Boot (Java)
- **Database**: MongoDB
- **API Testing**: Postman
- **External APIs**: Integrated with book data APIs to fetch book details dynamically.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (for ReactJS)
- **Java** (for Spring Boot)
- **Maven** (for Spring Boot project management)
- **MongoDB** (for the database)

## Setup & Installation

### Backend Setup (Spring Boot)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-review-app.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd book-review-app/backend
   ```

3. Build and run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

4. The backend server will start on `http://localhost:8080`.

5. Ensure MongoDB is running locally or configure a remote MongoDB instance in `application.properties`.

### Frontend Setup (ReactJS)

1. Navigate to the frontend directory:
   ```bash
   cd book-review-app/frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the ReactJS development server:
   ```bash
   npm start
   ```

4. The frontend application will be available at `http://localhost:3000`.

### API Testing with Postman

1. Import the provided Postman collection to test all API endpoints.
2. The collection includes:
   - **GET** `/api/books`: Retrieve a list of books.
   - **GET** `/api/books/{id}`: Retrieve detailed information about a specific book.
   - **POST** `/api/reviews`: Submit a review for a book.
   - **PUT** `/api/reviews/{id}`: Edit an existing review.
   - **DELETE** `/api/reviews/{id}`: Delete a review.

3. All API endpoints have been tested and validated using Postman.

## Usage

1. **Search for Books**: Use the search bar to find books by title, author, or genre.
2. **View Book Details**: Click on a book to view its details and read reviews.
3. **Add a Review**: After selecting a book, add your review and rating (1-5 stars).
4. **Edit or Delete Review**: Modify or remove your reviews as needed.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

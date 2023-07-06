# Chatcord Node.js Project

This is a chatcord project developed using Node.js and Express.js, along with Socket.io, dotenv, moment, and Redis dependencies. The chat system allows users to enter different rooms and engage in real-time conversations with other users.

## Installation

To run this project locally, please follow the instructions below:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>

Install the dependencies using npm:

npm install

Start the server:
npm start


Access the chatbot application in your browser at http://localhost:3000.

Dependencies
This project relies on the following dependencies:

Express.js: A minimal and flexible Node.js web application framework used for handling HTTP requests and routes.
Socket.io: A library that enables real-time, bidirectional, and event-based communication between the browser and the server.
dotenv: A zero-dependency module for loading environment variables from a .env file into process.env.
moment: A JavaScript library for parsing, validating, manipulating, and displaying dates and times.
Redis: An open-source, in-memory data structure store used as a database, cache, and message broker. It provides the backbone for managing real-time chat messages.

Usage
Once the server is running and you have accessed the chatbot application in your browser, follow these steps to use the chat system:

Enter a username and select a room to join.
Start sending messages and interact with other users who are in the same room.
You can switch rooms by selecting a different room from the dropdown menu.
Timestamps for each message are displayed in a human-readable format using the moment library.
Project Structure
The project directory contains the following main files and directories:

server.js: The main entry point of the application where the server is initialized and configured.
public/: This directory contains static files like CSS stylesheets and client-side JavaScript code.
utils/: This directory contains utility modules used for various tasks..

Contribution
Contributions to this project are welcome! If you find any bugs, have feature requests, or want to improve the code, feel free to open an issue or submit a pull request.

When contributing, please adhere to the existing code style and follow the guidelines for pull requests.

License
This project is licensed under the MIT License. Feel free to use and modify the code for personal and commercial purposes.


Expense Management App - MERN Stack Project

Welcome to the Expense Management App! This application, built with the MERN stack (MongoDB, Express.js, React, Node.js), provides a comprehensive solution for tracking your expenses and income. With both graphical and tabular views, it offers an intuitive way to manage and visualize your financial data.

Features

- Expense and Income Tracking: Easily track and categorize your expenses and income.
- Graphical Representation: Visualize your financial data through charts and graphs.
- Tabular Format: View detailed records of your transactions in a tabular format.
- Category Filtering: Filter transactions by categories to gain insights into your spending.
- Date Range Filtering: View transactions within specific date ranges for better analysis.

Installation Guide

Follow these steps to set up the Expense Management App on your local machine.

Prerequisites

- Node.js (v14 or later)
- npm or yarn (Node package managers)
- MongoDB (local or cloud instance)

1. Clone the Repository

First, clone the repository from GitHub:

cd expense-management-mern

2. Install Dependencies

Navigate to the root directory of the project and install backend dependencies:


cd to directory
npm install npm i 


Then, navigate to the client directory and install frontend dependencies:


cd ../client
npm install or npm i 


3. Set Up Environment Variables

Create a `.env` file in the `server` directory to set up environment variables. Here's a template:


MONGO_URI=your_mongodb_connection_string


Replace the placeholders with your actual values.

4. Start the MongoDB Server

Ensure that MongoDB is running. If you’re using a local MongoDB instance, start it with:

If you’re using MongoDB Atlas, ensure your connection string is correct in the `.env` file.

6. Start the Application

First, start the backend server:

First, start the backend server:

`npm run dev` both the client and server run on this command concurrently

The frontend application should now be running on [http://localhost:3000](http://localhost:3000), and the backend API should be running on [http://localhost:5000](http://localhost:5000).

Usage

Adding Transactions

1. Navigate to the "Add Transaction" page.
2. Enter details for the transaction, including amount, category, type (income or expense), and date.
3. Click "Submit" to add the transaction to your records.

Viewing Transactions

- Graphical View: Go to the "Dashboard" to see graphical representations of your financial data, including charts and graphs.
- Tabular View: Access the "Transactions" page to view your transactions in a detailed table format.

Filtering Transactions

- Category Filter: Use the category filter to view transactions related to specific categories.
- Date Range Filter: Set the date range to view transactions within a specified period.

Contributing

We welcome contributions to improve the project! If you have suggestions or find issues, please open an issue or submit a pull request on GitHub.

## Contact

For any questions or support, please reach out to [your.email@example.com](mailto:your.email@example.com).

---

Thank you for using the Expense Management App. We hope it helps you manage your finances effectively! 💰📊

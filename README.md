# React + Vite Project

## Overview
This project showcases three key features implemented in a React application using Vite. The features include an OTP Form, Drag and Drop Course Cards, and a Data Table for course batches. Each feature is accessible via specific routes in the application.


The application is deployed and currently running only otp form in deployed application
can be accessed [here](https://react-otp-pagination-and-drag.vercel.app/).


## Features

### 1. OTP Form
![image](https://github.com/user-attachments/assets/97610d61-1d5a-46e6-833a-6317c9a056af)

#### States:
- **Empty Form State:** A form to input a 4-digit OTP.
- **Filling State:** Indicates when the user is entering the OTP.
- **Filled State (Success):** Displayed when the OTP is correctly filled.
- **Filled State (Error):** Displayed when the OTP is incorrectly filled.

### 2. Drag and Drop Course Cards
![image](https://github.com/user-attachments/assets/6f1a101d-8748-4f98-8818-3e35144860e5)

#### Features:
- Vertical list of course cards with drag-and-drop functionality.
- Actions available on each card:
  - **Move to Top:** Move the card to the top of the list.
  - **Move to Bottom:** Move the card to the bottom of the list.

### 3. Data Table
![image](https://github.com/user-attachments/assets/94e20564-6223-4518-b5ec-fe17813ab1d7)

#### Features:
- Paginated table listing batches of a course and their statuses.
- Search functionality to filter the batches.

## How to Access
All features are accessible within a single React project under different URL routes:

- `/otp-form` - Access the OTP Form.
- `/course-list` - Access the Drag and Drop Course Cards.
- `/batches` - Access the Data Table for course batches.

The base URL (`/`) redirects to the OTP Form at `/otp-form`.

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- npm or yarn for package management.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Raj-venom/React-OTP-Pagination-and-Drag


# Capstone Website - Milestone
In our capstone project, we've developed a website for a real client that showcases their services while offering easy customization. Our client wanted a platform to display their offerings and communicate with customers seamlessly. We're proud to deliver a solution that allows effortless modifications to images, text, videos, and more. Additionally, our form ensures efficient communication by delivering inquiries directly to the client's email in PDF format. This project represents a significant milestone in our journey, highlighting our ability to meet real-world business needs through collaborative effort and technical expertise.

## Technologies Utilized
- React: Empowering dynamic and responsive user interfaces.
- MUI Material: Streamlining UI development with pre-built components and styles.
- Vite: Enhancing frontend development workflow with fast build times.
- Laravel: Providing a robust backend framework for efficient data management and routing.
- MySQL: Offering a reliable and scalable database solution for data storage and retrieval.

## Installation Guide
Before proceeding with the installation, ensure that your development environment is properly configured with the following prerequisites: PHP 8.2, Composer, Node.js, and Docker.

1. **Download the Project**: Obtain the project files from the designated repository.

2. **Configuration Setup**:
   - Duplicate `.env.example` file and rename it to `.env`. 
   - Configure the database credentials within the `.env` file.

3. **Backend Setup**:
   - Navigate to the project's root directory using the terminal.
   - Execute `composer install` to install PHP dependencies.
   - Generate the encryption key by running `php artisan key:generate --ansi`.
   - Apply migrations and seed the database with sample data using `php artisan migrate --seed`.
   - Start the local server by executing `php artisan serve`.

4. **Frontend Setup**:
   - Open a new terminal window.
   - Navigate to the `react` folder within the project directory.
   - Duplicate `react/.env.example` file and rename it to `.env`.
   - Adjust the `VITE_API_BASE_URL` parameter within the `.env` file to match your local setup.
   - Install npm dependencies with `npm install`.
   - Launch the Vite server for React development by running `npm run dev`.

Following these steps will set up the Capstone Website project locally, enabling you to explore its features and customize it further as needed.

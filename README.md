# Film Ticket Booking System

This repository contains code for a simple film ticket booking system that interacts with a local API to display a list of films, their details, and allow users to purchase tickets.

## Features

- **Film Display**: Displays a list of films fetched from a local API.
- **Film Details**: Shows detailed information about each film when clicked, including title, runtime, description, showtime, and remaining tickets.
- **Buy Tickets**: Allows users to buy tickets for available films by clicking the "Buy Ticket" button.
- **Ticket Selling**: Tracks the number of tickets sold and updates the available ticket count accordingly.
- **Sold Out Indicator**: Films with no available tickets are marked as "Sold Out" and cannot be purchased.
- **Film Deletion**: Allows deletion of films from the list.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/GideonKamauMacharia/film-ticket-booking.git
    ```

2. Navigate to the project directory:

    ```
    cd film-ticket-booking
    ```

3. Open the `index.html` file in a web browser to run the application.

## Usage

- Upon opening the application, a list of films will be displayed.
- Click on a film to view its details.
- If tickets are available, click the "Buy Ticket" button to purchase tickets.
- Sold-out films cannot be purchased.
- To delete a film, click the "Delete" button next to the film.

## Technologies Used

- HTML, CSS, JavaScript: Front-end technologies for building the user interface and interactivity.
- Fetch API: Used to make HTTP requests to the local API for fetching film data and performing CRUD operations.
- JSON: Data format used for exchanging information between the front-end and the API.

## Credits

This application was created by Gideon Kamau Macharia as a code challenge solution.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

For more information, please refer to the [API documentation](http://localhost:3000/docs).
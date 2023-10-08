# Backend Web Socket
Simple structure of native webSockets server, similar to socket.io but with eco WebSockets ( web sockets from the backend)
you can set, connect client server between 2 backend servers and communicate as one client server and the other server, you can communicate between 2 servers in real time,
through the WebSockets protocol, not http, free of DDoS attacks or http vulnerabilities.

## Introduction

The **ws eco** library is a WebSocket utility designed for backend-to-backend communication. It enables easy event-based communication between different parts of your backend server. This README will guide you through installing and using the library.

## Getting Started

### Prerequisites

Before you can start using the **ws eco** library, you need to ensure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

To install the library, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.

```bash
cd your-project-directory
```

3. Run the following command to install the required dependencies:

```bash
npm install
```

### Configuration

Before running the project, you'll need to set up the necessary environment variables. Refer to the `example.env` file provided in the project. Copy its contents and create a `.env` file in the project root. Populate this `.env` file with your desired environment variables.

### Starting the Project

You can start the project using the following command:

```bash
npm start
```

This will start the server, and you can access it at [http://localhost:80](http://localhost:80).

### Backend-to-Backend Communication

The **ws eco** library allows you to send WebSocket events from one part of your backend to another. To achieve this, you can use the `ws_backend_eco.js` module located in the `server_ws` folder.

Here's an example of how to use it:

```javascript
const wsBackendEco = require('./server_ws/ws_backend_eco.js');

const socket = wsBackendEco(ws);

socket.on('customEvent', (data) => {
  console.log('Received customEvent with data:', data);
});

// To emit an event to another backend component:
socket.emit('customEvent', { message: 'Hello from backend!' });
```

Make sure you import and use this module appropriately in your backend components.

### Example Usage

You can find an example of how to use the **ws eco** library in the `controller_eco.js` file located in the `controller` folder. This example demonstrates how to send and receive WebSocket events within your backend components.

Additionally, in the `public` folder, you'll find the JavaScript files needed for sending and receiving events from the frontend.

Feel free to explore and adapt these examples to your specific use case.

## Conclusion

The **ws eco** library simplifies backend-to-backend communication using WebSocket events. By following the installation and configuration steps mentioned above, you can easily incorporate it into your project and facilitate seamless event-based communication within your backend components.

If you have any questions or encounter any issues, please refer to the project's GitHub repository for further assistance.

---

Make sure to replace `"your-project-directory"` with the actual directory of your project and provide additional details or documentation as needed for your specific use case.
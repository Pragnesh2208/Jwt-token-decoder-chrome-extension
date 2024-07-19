## JWT Token Decoder Chrome Extension

### Overview

The JWT Token Decoder Chrome Extension is a powerful tool designed to simplify the process of decoding JSON Web Tokens (JWT). It provides a user-friendly interface to decode the header and payload sections of a JWT, making it easier to understand and verify the contents of these tokens. This extension is especially useful for developers and security professionals working with JWTs in their applications.

### Features

- **JWT Input**: Easily input your JWT in the provided text area to decode its components.
- **Real-time Decoding**: Instantly decode the JWT header and payload as you type.
- **Copy to Clipboard**: Conveniently copy the decoded header and payload to your clipboard with a single click.
- **User-Friendly Interface**: A clean and modern UI designed for ease of use, featuring intuitive controls and a responsive layout.
- **Enhanced Scrollbar**: Custom-styled scrollbar for a smoother user experience.

### Technologies Used

- **React**: For building the dynamic user interface.
- **Jose**: For decode jwt token.
- **SCSS Modules**: For modular and maintainable styling.
- **Font Awesome**: For icon support, including the copy button icon.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pragnesh2208/Jwt-token-decoder-chrome-extension.git
   ```
2. Navigate to the project directory:
   ```bash
   cd jwt-token-decoder
   ```
3. Install the dependencies:
   ```bash
   yarn
   ```
4. Build the extension:
   ```bash
   yarn build
   ```
5. Load the extension into Chrome:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode".
   - Click "Load unpacked" and select the `build` folder.

### Usage

1. Open the extension from the Chrome toolbar.
2. Enter your JWT in the input area labeled "Enter JWT Token".
3. View the decoded header and payload in the respective sections.
4. Click the copy icon beside the header or payload to copy the decoded content to your clipboard.

### Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgments

- Special thanks to the React , Jose and Font Awesome teams for their amazing libraries.
- Inspired by the need for easy JWT decoding during development and debugging.
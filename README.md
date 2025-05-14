# Gauge Graph Web Component

A customizable and lightweight web component for creating gauge graphs. This component is built using modern web standards and is easy to integrate into any project.

## Features

- **Customizable**: Adjust colors, size, and thresholds.
- **Lightweight**: No external dependencies.
- **Responsive**: Adapts to different screen sizes.
- **Accessible**: Built with accessibility in mind.

## Installation

To use the gauge graph web component, include it in your project:

```html
<script src="path-to-your-component.js" type="module"></script>
```

## Usage

Add the component to your HTML and configure it using attributes:

```html
<gauge-graph
    value="75"
    min="0"
    max="100"
    color="green"
    size="200"
></gauge-graph>
```

### Attributes

| Attribute | Description              | Default |
|-----------|--------------------------|---------|
| `value`   | Current value of the gauge | `0`     |
| `min`     | Minimum value of the gauge | `0`     |
| `max`     | Maximum value of the gauge | `100`   |
| `color`   | Color of the gauge         | `blue`  |
| `size`    | Size of the gauge (px)     | `150`   |

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/gauge-graph-wc.git
cd gauge-graph-wc
npm install
```

Run the development server:

```bash
npm start
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Thanks to the open-source community for inspiration and support.
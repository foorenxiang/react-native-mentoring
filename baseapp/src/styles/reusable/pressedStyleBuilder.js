const pressedStyleBuilder = (pressed, style = {}) => [
  { opacity: pressed ? 0.5 : 1.0 },
  style,
];
export default pressedStyleBuilder;

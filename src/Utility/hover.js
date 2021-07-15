import styles from './defaults';

const hover = JSON.parse(JSON.stringify(styles));

hover.Text.enabled = false;
hover.Text.props.color.enabled = false;

export default hover;
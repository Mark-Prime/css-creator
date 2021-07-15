import styles from './defaults';

const hover = JSON.parse(JSON.stringify(styles));

hover.Text.enabled = false;
hover.Text.props.fontSize.enabled = false;

export default hover;
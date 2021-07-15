import styles from './defaults';

const focus = JSON.parse(JSON.stringify(styles));

focus.Text.enabled = false;
focus.Text.props.fontSize.enabled = false;

export default focus;
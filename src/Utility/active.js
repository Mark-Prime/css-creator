import styles from './defaults';

const active = JSON.parse(JSON.stringify(styles));

active.Text.enabled = false;
active.Text.props.fontSize.enabled = false;

export default active;
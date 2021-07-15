import styles from './defaults';

const target = JSON.parse(JSON.stringify(styles));

target.Text.enabled = false;
target.Text.props.fontSize.enabled = false;

export default target;
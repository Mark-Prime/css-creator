import styles from './defaults';

const container = JSON.parse(JSON.stringify(styles));

container.Text.enabled = false;
container.Text.props.fontSize.enabled = false;

container.Content.enabled = true;

container.Content.props.height.enabled = true;
container.Content.props.height.val = '100%';

container.Display.enabled = true;

container.Display.props.display.enabled = true;
container.Display.props.display.val = 'flex';

container.Display.props.justifyContent.enabled = true;
container.Display.props.justifyContent.val = 'center';

container.Display.props.alignItems.enabled = true;
container.Display.props.alignItems.val = 'center';

export default container;
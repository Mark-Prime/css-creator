import defaultValues from './defaultValues'

const container = JSON.parse(defaultValues);

container.Content.enabled = true;

container.Content.props.height.enabled = true;
container.Content.props.height.val = '100%';
container.Content.props.height.suffixSelected = '%';

container.Display.enabled = true;

container.Display.props.display.enabled = true;
container.Display.props.display.val = 'flex';

container.Display.props.justifyContent.enabled = true;
container.Display.props.justifyContent.val = 'center';

container.Display.props.alignItems.enabled = true;
container.Display.props.alignItems.val = 'center';

export const container_hover = JSON.parse(defaultValues);
export const container_active = JSON.parse(defaultValues);
export const container_focus = JSON.parse(defaultValues);
export const container_target = JSON.parse(defaultValues);
export const container_disabled = JSON.parse(defaultValues);
export const container_invalid = JSON.parse(defaultValues);

export default container;
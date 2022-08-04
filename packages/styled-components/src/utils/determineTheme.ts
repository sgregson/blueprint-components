import { ExtensibleObject } from '../types';
import { EMPTY_OBJECT } from './empties';

export default function determineTheme(
  props: ExtensibleObject,
  providedTheme: any,
  defaultProps: any = EMPTY_OBJECT
) {
  return (
    (props.blueprint !== defaultProps.blueprint && props.blueprint) ||
    providedTheme ||
    defaultProps.blueprint
  );
}

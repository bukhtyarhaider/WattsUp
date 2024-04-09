/**
 * Props for the Collapse component.
 */
export interface CollapseProps {
  /**
   * The title of the collapse.
   */
  title: string;

  /**
   * The description content of the collapse.
   */
  description: string;

  /**
   * Event handler for the collapse header click.
   */
  onClick: () => void;

  /**
   * Flag to determine if the collapse is open or closed.
   */
  isOpen: boolean;
}

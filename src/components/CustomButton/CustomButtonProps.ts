/**
 * Props for the CustomButton component.
 */
export interface CustomButtonProps {
  /**
   * The icon for the button.
   */
  icon?: string;

  /**
   * The text content of the button.
   */
  title: string;

  /**
   * The variant style of the button.
   */
  variant: "primary" | "secondary";

  /**
   * The size of the button.
   */
  size: "small" | "medium" | "large";

  /**
   * Event handler for the button click.
   */
  onClick?: () => void;
}

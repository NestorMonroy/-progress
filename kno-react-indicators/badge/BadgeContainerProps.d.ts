/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Represents the props of the [knoReact BadgeContainer component](components/indicators/badge).
 */
export interface BadgeContainerProps {
    /**
     * The React elements that will be rendered inside the BadgeContainer.
     */
    children?: React.ReactNode;
    /**
     * Specifies a list of CSS classes that will be added to the BadgeContainer.
     */
    className?: string;
    /**
     * Represents the `dir` HTML attribute. This is used to switch from LTR to RTL.
     */
    dir?: string;
    /**
     * Sets additional CSS styles to the BadgeContainer.
     */
    style?: React.CSSProperties;
}

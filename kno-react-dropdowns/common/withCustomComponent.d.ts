/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * @hidden
 */
declare const withCustomComponent: <P = unknown>(comp: import('@progress/kno-react-common').CustomComponent<P> | import('react').ExoticComponent<{
    children?: import('react').ReactNode;
}> | null) => [string | import('react').ComponentType<P & import('react').RefAttributes<unknown>>, Partial<P>];
export default withCustomComponent;

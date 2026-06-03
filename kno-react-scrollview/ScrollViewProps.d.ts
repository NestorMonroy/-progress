/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { WebMcpProps } from '@progress/kno-react-common';
/**
 * Represents the props of the [knoReact ScrollView component](components/scrollview).
 */
export interface ScrollViewProps {
    /**
     * Represents the current active view ([see example](components/scrollview/active-view)).
     * Defaults to `1`.
     *
     * @default 1
     *
     * @example
     * ```jsx
     * <ScrollView activeView={2} />
     * ```
     */
    activeView?: number;
    /**
     * Enables or disables the built-in navigation arrows ([see example](components/scrollview/arrows)).
     * Defaults to `true`.
     *
     * @default true
     *
     * @example
     * ```jsx
     * <ScrollView arrows={false} />
     * ```
     */
    arrows?: boolean;
    /**
     * Allows the ScrollView to switch the next page automatically after a short delay ([see example](components/scrollview/automatic-scrolling)).
     * Defaults to `true`.
     *
     * @default true
     *
     * @example
     * ```jsx
     * <ScrollView automaticViewChange={false} />
     * ```
     */
    automaticViewChange?: boolean;
    /**
     * Defines the automatic page change delay in milliseconds ([see example](components/scrollview/automatic-scrolling)).
     * Defaults to `5000`.
     *
     * @default 5000
     *
     * @example
     * ```jsx
     * <ScrollView automaticViewChangeInterval={3000} />
     * ```
     */
    automaticViewChangeInterval?: number;
    /**
     * Sets the ScrollView children elements.
     *
     * @example
     * ```jsx
     * <ScrollView>
     *   <div>Page 1</div>
     *   <div>Page 2</div>
     * </ScrollView>
     * ```
     */
    children?: React.ReactNode;
    /**
     * Specifies a list of CSS classes that will be added to the ScrollView.
     *
     * @example
     * ```jsx
     * <ScrollView className="custom-scrollview" />
     * ```
     */
    className?: string;
    /**
     * Represents the `dir` HTML attribute. This is used to switch from LTR to RTL.
     *
     * @example
     * ```jsx
     * <ScrollView dir="rtl" />
     * ```
     */
    dir?: string;
    /**
     * Toggles the endless scrolling mode in which the data items are endlessly looped
     * ([see example](components/scrollview/endless-scrolling)). Defaults to `false`.
     *
     * @default false
     *
     * @example
     * ```jsx
     * <ScrollView endless={true} />
     * ```
     */
    endless?: boolean;
    /**
     * Toggles the built-in pager ([see example](components/scrollview/paging)). Defaults to `true`.
     *
     * @default true
     *
     * @example
     * ```jsx
     * <ScrollView pageable={false} />
     * ```
     */
    pageable?: boolean;
    /**
     * Sets the pager overlay ([see example](components/scrollview/paging)).
     *
     * The possible values are:
     * * `none`(Default) &mdash; No overlay is set.
     * * `dark` &mdash; Dark overlay is set.
     * * `light` &mdash; Light overlay is set.
     *
     * @example
     * ```jsx
     * <ScrollView pagerOverlay="dark" />
     * ```
     */
    pagerOverlay?: 'dark' | 'light' | 'none';
    /**
     * Sets additional CSS styles to the ScrollView.
     *
     * @example
     * ```jsx
     * <ScrollView style={{ width: '100%' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Enables Web MCP tool registration for this component.
     * Requires a parent `WebMcpProvider` from `@progress/kno-react-webmcp`.
     */
    webMcp?: boolean | WebMcpProps;
}

/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SignatureHandle } from './interfaces/SignatureHandle';
import { SignatureProps } from './interfaces/SignatureProps';
import * as React from 'react';
/**
 * Represents the PropsContext of the `Signature` component.
 * Used for global configuration of all `Signature` instances.
 *
 * For more information, refer to the [Inputs Props Context](components/inputs/props-context) article.
 */
export declare const SignaturePropsContext: React.Context<(p: SignatureProps) => SignatureProps>;
/**
 * Represents the [knoReact Signature component](components/inputs/signature).
 */
export declare const Signature: React.ForwardRefExoticComponent<SignatureProps & React.RefAttributes<SignatureHandle | null>>;

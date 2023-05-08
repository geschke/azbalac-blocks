/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	SelectControl,
} from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	InspectorControls,
	useBlockProps, 
	useInnerBlocksProps 
} from '@wordpress/block-editor';

import { Fragment } from '@wordpress/element';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, className }) {

	const {
		align,
		//items,
		containerType,
	} = attributes;

	const containerTypeOptions = [
		{ value: "container", label: __('none (default container class)', 'azbalac-blocks') },
		{ value: "container-fluid", label: __('fluid container', 'azbalac-blocks') },
		{ value: "container-sm", label  : __('small', 'azbalac-blocks') },
		{ value: "container-md", label  : __('medium', 'azbalac-blocks') },
		{ value: "container-lg", label  : __('large', 'azbalac-blocks') },
		{ value: "container-xl", label  : __('x-large', 'azbalac-blocks') },
		{ value: "container-xxl", label  : __('xx-large', 'azbalac-blocks') }
	];

	const containerClasses = classnames(
		className,
		'azb-container',
		`align${align}`,
		containerType,
	);

	const blockProps = useBlockProps( { className: containerClasses } );

	//const ALLOWED_BLOCKS =  [ 'core/heading', 'core/paragraph', 'core/image' ]; 

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		//allowedBlocks: ALLOWED_BLOCKS, // what is the default?
		//template: getCount(items),
		//templateLock: false,
		templateInsertUpdatesSelection: true,
	} );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Container', 'azbalac-blocks')}
				>
				<SelectControl
					label={__("Container Type", "azbalac-blocks")}
					value={containerType}
					options={containerTypeOptions}
					onChange={containerType => setAttributes({ containerType })}
				/>
				</PanelBody>
			</InspectorControls>
			<div { ...innerBlocksProps } />
		</Fragment>
);

}

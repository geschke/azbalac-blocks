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
		colType,
	} = attributes;

	const colTypeOptions = [
		{ value: "col", label: __('none (default auto-layout column class)', 'azbalac-blocks') },
		{ value: "col-1", label  : __('column width 1', 'azbalac-blocks') },
		{ value: "col-2", label  : __('column width 2', 'azbalac-blocks') },
		{ value: "col-3", label  : __('column width 3', 'azbalac-blocks') },
		{ value: "col-4", label  : __('column width 4', 'azbalac-blocks') },
		{ value: "col-5", label  : __('column width 5', 'azbalac-blocks') },
		{ value: "col-6", label  : __('column width 6', 'azbalac-blocks') },
		{ value: "col-7", label  : __('column width 7', 'azbalac-blocks') },
		{ value: "col-8", label  : __('column width 8', 'azbalac-blocks') },
		{ value: "col-9", label  : __('column width 9', 'azbalac-blocks') },
		{ value: "col-10", label  : __('column width 10', 'azbalac-blocks') },
		{ value: "col-11", label  : __('column width 11', 'azbalac-blocks') },
		{ value: "col-12", label  : __('column width 12', 'azbalac-blocks') }

	];

	const colClasses = classnames(
		className,
		'azb-col',
		`align${align}`,
		colType,
	);

	const blockProps = useBlockProps( { className: colClasses } );

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
					title={__('Columns', 'azbalac-blocks')}
				>
				<SelectControl
					label={__("Column Type", "azbalac-blocks")}
					value={colType}
					options={colTypeOptions}
					onChange={colType => setAttributes({ colType })}
				/>
				</PanelBody>
			</InspectorControls>
			<div { ...innerBlocksProps } />
		</Fragment>
);

}

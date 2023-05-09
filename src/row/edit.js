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
		rowType,
	} = attributes;

	const rowTypeOptions = [
		{ value: "row", label: __('none (default row class)', 'azbalac-blocks') },
		{ value: "row row-cols-auto", label: __('row columns (auto)', 'azbalac-blocks') },
		{ value: "row row-cols-1", label  : __('row columns, 1 row', 'azbalac-blocks') },
		{ value: "row row-cols-2", label  : __('row columns, 2 rows', 'azbalac-blocks') },
		{ value: "row row-cols-3", label  : __('row columns, 3 rows', 'azbalac-blocks') },
		{ value: "row row-cols-4", label  : __('row columns, 4 rows', 'azbalac-blocks') },
		{ value: "row row-cols-5", label  : __('row columns, 5 rows', 'azbalac-blocks') },
		{ value: "row row-cols-6", label  : __('row columns, 6 rows', 'azbalac-blocks') },
		{ value: "row row-cols-7", label  : __('row columns, 7 rows', 'azbalac-blocks') },
		{ value: "row row-cols-8", label  : __('row columns, 8 rows', 'azbalac-blocks') },
		{ value: "row row-cols-9", label  : __('row columns, 9 rows', 'azbalac-blocks') },
		{ value: "row row-cols-10", label  : __('row columns, 10 rows', 'azbalac-blocks') },
		{ value: "row row-cols-11", label  : __('row columns, 11 rows', 'azbalac-blocks') },
		{ value: "row row-cols-12", label  : __('row columns, 12 rows', 'azbalac-blocks') }
	];

	const rowClasses = classnames(
		className,
		'azb-row',
		`align${align}`,
		rowType,
	);

	const blockProps = useBlockProps( { className: rowClasses } );

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
					title={__('Row', 'azbalac-blocks')}
				>
				<SelectControl
					label={__("Row Type", "azbalac-blocks")}
					value={rowType}
					options={rowTypeOptions}
					onChange={rowType => setAttributes({ rowType })}
				/>
				</PanelBody>
			</InspectorControls>
			<div { ...innerBlocksProps } />
		</Fragment>
);

}

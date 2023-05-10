/**
 * External dependencies
 */
import classnames from 'classnames';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps,
	useInnerBlocksProps
 } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes }) {

	const {
		colType,
		colTypeSM,
		colTypeMD,
		colTypeLG,
		colTypeXL,
		colTypeXXL
	} = attributes;

	let colClassSM = colTypeSM != 0 ? 'col-sm-' + colTypeSM : '';
	let colClassMD = colTypeMD != 0 ? 'col-md-' + colTypeMD : '';
	let colClassLG = colTypeLG != 0 ? 'col-lg-' + colTypeLG : '';
	let colClassXL = colTypeXL != 0 ? 'col-xl-' + colTypeXL : '';
	let colClassXXL = colTypeXXL != 0 ? 'col-xxl-' + colTypeXXL : '';

	const colClasses = classnames(
		//classnames,
		'azb-columns',
		colType,
		colClassSM,
		colClassMD,
		colClassLG,
		colClassXL,
		colClassXXL		
	);

	const blockProps = useBlockProps.save( { className: colClasses } );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<div  {...innerBlocksProps} />
	);

}

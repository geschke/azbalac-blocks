<?php
/**
 * Plugin Name:       Azbalac Blocks
 * Description:       Azbalac Blocks - Gutenberg Website Builder Blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ralf Geschke
 * Author URI:				https://www.azbalac.io
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       azbalac-blocks
 *
 * @package           azbalac-blocks
 */


/**
 * Registers the custom block category
 */
add_filter( 'block_categories_all', function( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'azbalac-blocks',
				'title' => 'Azbalac Blocks',
			),
		)
	);
}, 10, 2 );

/**
 * Registers multiple blocks using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function azbalac_blocks_azbalac_blocks_block_init() {
	register_block_type( __DIR__ . '/build/container' );
	register_block_type( __DIR__ . '/build/row' );
	register_block_type( __DIR__ . '/build/columns' );
}
add_action( 'init', 'azbalac_blocks_azbalac_blocks_block_init' );

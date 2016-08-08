<?php
/**
 * pink-charity-blog template for displaying the footer
 *
 * @package WordPress
 * @subpackage pink-charity-blog
 * @since pink-charity-blog 1.0
 */
?>

				<ul class="footer-widgets"><?php
					if ( function_exists( 'dynamic_sidebar' ) ) :
						dynamic_sidebar( 'footer-sidebar' );
					endif; ?>
				</ul>

			</div>
		<?php wp_footer(); ?>
	</body>
</html>
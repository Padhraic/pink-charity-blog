<?php
/**
 * @package WordPress
 * @subpackage pink-charity-blog
 * @since pink-charity-blog 1.0
 */
 get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<article <?php post_class() ?> id="post-<?php the_ID(); ?>">

			<h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>

			<?php posted_on(); ?>

			<div class="entry">
				<?php the_content(); ?>
			</div>

			<footer class="postmetadata">
				<?php the_tags(__('Tags: ','pinkcharityblog'), ', ', '<br />'); ?>
				<?php _e('Posted in','pinkcharityblog'); ?> <?php the_category(', ') ?> | 
				<?php comments_popup_link(__('No Comments &#187;','pinkcharityblog'), __('1 Comment &#187;','pinkcharityblog'), __('% Comments &#187;','pinkcharityblog')); ?>
			</footer>

		</article>

	<?php endwhile; ?>

	<?php post_navigation(); ?>

	<?php else : ?>

		<h2><?php _e('Nothing Found','pinkcharityblog'); ?></h2>

	<?php endif; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>

<?php
/**
 * @package WordPress
 * @subpackage pink-charity-blog
 * @since pink-charity-blog 1.0
 */
 get_header(); ?>

<section id="about" class="about">
    <div class="container">
        <div class="row">
            <div class="col-lg-2 col-xs-1"></div>
            <div class="col-lg-8 col-xs-10">

				<?php the_content(); ?>

				</div>
            <div class="col-lg-2 col-xs-1"></div>
        </div>
    </div>
</section>


<?php get_footer(); ?>

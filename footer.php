<?php
/**
 * @package WordPress
 * @subpackage pink-charity-blog
 * @since pink-charity-blog 1.0
 */
?>

<!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 text-center">
                    <br />
                    <p>
                        <strong>For all the latest updates, follow us on our Facebook community site.</strong>
                    </p>
                    <br />
                    <ul class="list-inline">
                        <li>
                            <a href="https://www.facebook.com/love.lilly.313">
                                <span class="fa-stack fa-2x">
                                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i class="fa fa-facebook fa-stack-1x text-background"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="<?php of_get_option('meta_footer_donate_url'); ?>">
                                <span class="fa-stack fa-2x">
                                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i class="fa fa-eur fa-stack-1x text-background"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="<?php of_get_option('meta_footer_about_url'); ?>">
                                <span class="fa-stack fa-2x">
                                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i class="fa fa-heart fa-stack-1x text-background"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <hr class="small" />
                    <ul class="list-inline">
                        <li><p class="text-muted">Copyright &copy; lovelilly.ie <?php echo date("Y"); ?></p></li>
                        <li><p class="text-muted"><a href="<?php of_get_option('meta_footer_terms_conditions_url'); ?>">Terms &and; Conditions</a></p></li>
                        <li><p class="text-muted"><a href="<?php of_get_option('meta_footer_security_statement_url'); ?>">Privacy &and; security statement</a></p></li>
                        <li><p class="text-muted"><a href="mailto:lovelillytrust@gmail.com?subject=Webmaster">Contact webmaster</a></p></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>

	</div>

	<?php wp_footer(); ?>


<!-- here comes the javascript -->

<!-- jQuery is called via the WordPress-friendly way via functions.php -->

<!-- this is where we put our custom functions: This is in the enqueue function currently -->
<!-- <script src="<?php bloginfo('template_directory'); ?>/static/js/footer.js"></script> -->

<!-- Asynchronous google analytics; this is the official snippet.
         Replace UA-XXXXXX-XX with your site's ID and domainname.com with your domain, then uncomment to enable.

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-XXXXXX-XX', 'domainname.com');
  ga('send', 'pageview');

</script>
-->
	
</body>

</html>

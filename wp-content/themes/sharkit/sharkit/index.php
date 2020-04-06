<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?> <!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json"/><title><?php
        if ( is_single() ) { single_post_title(); }
        elseif ( is_home() || is_front_page() ) { bloginfo('name'); print ' | '; bloginfo('description'); }
        elseif ( is_page() ) { single_post_title(''); }
        elseif ( is_search() ) { bloginfo('name'); print ' | Search results for ' . wp_specialchars($s); }
        elseif ( is_404() ) { bloginfo('name'); print ' | Not Found'; }
        else { bloginfo('name'); wp_title('|'); }
    ?></title> <?php wp_head(); ?> <link href="/wp-content/themes/sharkit/static/css/2.chunk.css?f03aeaa215358f32efd3" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div><script src="/wp-content/themes/sharkit/static/js/bundle.js?f03aeaa215358f32efd3"></script><script src="/wp-content/themes/sharkit/static/js/2.chunk.js?f03aeaa215358f32efd3"></script><script src="/wp-content/themes/sharkit/static/js/main.chunk.js?f03aeaa215358f32efd3"></script></body></html>
<?php
// Suporte para menus
add_theme_support('menus');

// Suporte para imagens em destaque
add_theme_support( 'post-thumbnails' );
add_image_size('parceiro', 100, 100, true); 

// poder subir svg
function cc_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');


// adicionando itens a api
add_action('rest_api_init', 'register_rest_images' );
function register_rest_images(){
    register_rest_field( array('post', 'vaga', 'equipe', 'page', 'slider', 'servico'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
	);
	

}
function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}


add_filter( 'rest_prepare_post', function( $response, $post, $request ) {
	// Only do this for single post requests.
	if( $request->get_param('per_page') === 1 ) {
		  global $post;
		  // Get the so-called next post.
		  $next = get_adjacent_post( false, '', false );
		  // Get the so-called previous post.
		  $previous = get_adjacent_post( false, '', true );
		  // Format them a bit and only send id and slug (or null, if there is no next/previous post).
		  $response->data['next'] = ( is_a( $next, 'WP_Post') ) ? array( "id" => $next->ID, "slug" => $next->post_name ) : null;
		  $response->data['previous'] = ( is_a( $previous, 'WP_Post') ) ? array( "id" => $previous->ID, "slug" => $previous->post_name ) : null;
	}
  
	  return $response;
  }, 10, 3 );




add_filter('acf/settings/save_json', 'my_acf_json_save_point');
function my_acf_json_save_point( $path ) {
    // update path
    $path = get_stylesheet_directory() . '/acf-json';
    // return
    return $path;
}

add_filter('acf/settings/load_json', 'my_acf_json_load_point');
function my_acf_json_load_point( $paths ) {
    // remove original path (optional)
    unset($paths[0]);
    // append path
    $paths[] = get_stylesheet_directory() . '/acf-json';
    // return
    return $paths;
}

function pegarOptions(){
	$data[0]['descritivo'] = get_field('descritivo', 'option');
	$data[0]['endereco'] = get_field('endereco', 'option');
	$data[0]['email'] = get_field('email', 'option');
	$data[0]['telefone'] = get_field('telefone', 'option');
	$data[0]['telefone_whats'] = get_field('telefone_whats', 'option');
	$data[0]['atendimento'] = get_field('atendimento', 'option');
	return wp_send_json($data); 
    wp_die();
}

add_action(
    'rest_api_init',
    function () {
        register_rest_route(
            'dataoption/v1',
            '/(?P<id>\d+)',
            array(
              'methods' => 'GET',
              'callback' => 'pegarOptions', // Esse callable será chamado para responder as chamadas para '/wp-json/meuplugin/v1/autor/<id>'.
            )
        );
    }
);





if( function_exists('acf_add_options_page') ) 
{ 
    acf_add_options_page('Shark Settings'); 
}

function my_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo.png);
        height: 167px;
        width: 250px;
        background-size: 250px 167px;
        background-repeat: no-repeat;
            padding-bottom: 30px;
        }

        .login-action-login
        {
            background-color: #eee;
        }
    </style>
<?php }

add_action( 'login_enqueue_scripts', 'my_login_logo' );











add_action( 'wp_ajax_enviarformulario', 'my_ajax_enviarformulario_handler' );
add_action( 'wp_ajax_nopriv_enviarformulario', 'my_ajax_enviarformulario_handler' );

function my_ajax_enviarformulario_handler() {
	
	date_default_timezone_set('America/Sao_Paulo');

	$conteudo = '';

	$upload_overrides = array( 'test_form' => false );
    $movefile = wp_handle_upload( $_FILES['arquivo'], $upload_overrides );


    if ( $movefile && !isset( $movefile['error'] ) ) {
        //echo "File is valid, and was successfully uploaded.\n";
        $url = $movefile['url'];
		$arquivo = basename($movefile['url']);
		//print_r($_FILES);
		//var_dump($_FILES[0]);
		//var_dump($_FILES['arquivo']['type']);

		if($_FILES['arquivo']['type'] != "application/pdf"){
			echo json_encode(array('erro' => 'arquivopdf'));
			wp_die();
		}
		
		if($url <> ""){
			$conteudo = 'CV: ' . $url . "\n\n";
		}
	} 

	$nome_card = '';	
	foreach ($_POST as $key => $value) {
		$conteudo .= str_replace('_', ' ', $key) . ' ' . $value . "\n\n";
    }
   // var_dump($arquivo);
   // var_dump($conteudo);

   $row = array(
        'nome' => $_POST['nome'],
        'telefone'   => $_POST['telefone'],
        'email'   => $_POST['email'],
        'cv'  => $url,
        'quando' => date('d/m/Y h:i:s')
    );

    $foi = add_row('candidatos', $row, $_POST['idvaga']);
    var_dump($foi);


	$conteudo .=  'Enviado em: ' . date('d/m/Y h:i:s');
    $assunto = "Candidatura Vaga: " . $_POST['nome'] . ' - VAGA ID: ' . $_POST['idvaga'];
	$to = "rudinhok@gmail.com";
    wp_mail($to, $assunto, $conteudo);
    wp_mail('relacionamento@sharkit.com.br', $assunto, $conteudo);

	echo json_encode(array('resposta' => true));
	
    wp_die();
}

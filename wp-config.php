<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'sharkit' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=@+5d|[nEu?BV)ws[N4<J)n)..XLk_nRK!&S&bYk4b]2R&;i)Lwf:wdY&,JA+]YU' );
define( 'SECURE_AUTH_KEY',  'Xbl {n3VF~i]D3_*bc6IJ%@+!U)!?32[|.pOaq$^H&=}tus}7.rS[5B7liPHY763' );
define( 'LOGGED_IN_KEY',    'Ik6Y@H/<%(H@dWEfNFh]<N:R^_Y$UAM4qtB&Cu?/Shq8hMV {wI;}c4f1CG.k;lF' );
define( 'NONCE_KEY',        'W6_h;yuT28X5X.<B-Q&[DwsoP6QuGGy}1t27I}Mf?W+-z0!51J7O{z<VjPqXL60a' );
define( 'AUTH_SALT',        'VT@9!&,z.@?JC6Cv-sb$~iYV,ryh2kXtpB43r[^N[elS&a|^}`C5&&I)vrt{B|@t' );
define( 'SECURE_AUTH_SALT', 'b8NaBR~sTJ+C0U~.Eps}HroQfG=ePY;WT6TS>.S3e:-|OGx=tJ #Cg,rxn]4{;V<' );
define( 'LOGGED_IN_SALT',   '[[4*=~[H!9cpyDs`@M$wWjm%Va_+WnV53<Y=Bb+Y SV%OkYeBZ(f@ELXFgHw~h|X' );
define( 'NONCE_SALT',       'v(-r[)xee#/L?.qHY?4O5u_p;I$o8_ttQY_k4/Z>q,x9Rc-*_a&H5GwFCN1{/SQt' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');

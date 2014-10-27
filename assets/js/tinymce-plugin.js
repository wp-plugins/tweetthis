/**
 * Reference: https://gist.github.com/dnaber-de/1658122
 */

(function($) {
	//	We need some information that should have been stored in a global variable,
	//	TT_Data, by the TT_Setup class.
	var post_url = TT_Data['post_url'];
	var placeholder = TT_Data['post_url_is_placeholder'];
	var twits = TT_Data['default_twitter_handles'];
	var disable_preview = TT_Data['disable_preview'];
	var disable_advanced = TT_Data['disable_advanced'];
	var disable_char_count = TT_Data['disable_char_count'];

	tinymce.create('tinymce.plugins.tweetthis', {
		init: function(ed, url) {
			ed.addButton('tweetthis_button', {
				title: 'Add Tweet This Box',
				image: url + '/../images/tinymce-button.png',
				cmd: 'tweetthis_cmd'
			});

			ed.addCommand('tweetthis_cmd', function() {
				ed.windowManager.open(
					//	Window Properties
					{
						file: url + '/../../includes/tinymce-dialog.html',
						title: 'Tweet This Shortcode Creator',
						width: 650,
						height: 600,
						inline: 1
					},
					//	Windows Parameters/Arguments
					{
						assets_url: url + '/..',
						default_twitter_handles: twits,
						post_url: post_url,
						post_url_is_placeholder: placeholder,
						disable_preview: disable_preview,
						disable_advanced: disable_advanced,
						disable_char_count: disable_char_count,

						editor: ed,
						jquery: $
					}
				);
			});
		}
	});
	tinymce.PluginManager.add('tweetthis', tinymce.plugins.tweetthis);
})(jQuery);

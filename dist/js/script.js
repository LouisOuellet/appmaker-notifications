API.Plugins.notifications = {
	init:function(){
		var html = '';
		html += '<li class="nav-item">';
			html += '<a class="nav-link" data-slide="true" href="#">';
				html += '<i class="fas fa-bell"></i>';
			html += '</a>';
		html += '</li>';
		$('#navbar-right').prepend(html);
	},
}

API.Plugins.notifications.init();

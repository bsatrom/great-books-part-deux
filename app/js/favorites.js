(function () {
	window.Favorites = {
		show: function() {
			window.Books.data.filter({ field: "is_favorite", operator: "eq", value: true });
      
      analytics.TrackFeature('Books.ShowFavorites');
		},
		hide: function() {
			window.Books.data.filter([]);
		}
	};
}());
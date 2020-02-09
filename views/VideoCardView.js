var VideoCardView = Backbone.View.extend({
  className: 'video-card',

  template: Handlebars.compile($('#video-card-template').html()),

  events: {
    

  },

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }


});
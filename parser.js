module.exports = {
  parse_shape: function(shape){

    var context = {
      shape: undefined,
      dimension_names: []
    };

    switch (shape) {
      case 'rectangle':
        context.shape = 'Rectangle';
        context.dimension_names = ['Length', 'Width'];
        break;

      case 'circle':
        context.shape = 'Circle';
        context.dimension_names = ['Diameter'];
        break;

      case 'square':
        context.shape = 'Square';
        context.dimension_names = ['Length'];
        break;

      case 'ellipse':
        context.shape = 'Ellipse';
        context.dimension_names = ['Length', 'Width'];
        break;
    }
    return context;
  }
};

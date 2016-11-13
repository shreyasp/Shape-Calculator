module.exports = {
  parse_shape: function(shape){

    var context = {
      shape: undefined,
      dimension_names: []
    };

    if (shape === "rectangle") {
      context.shape = 'Rectangle';
      context.dimension_names = ['Length', 'Width'];
      return context;
    }

    else if (shape === 'circle') {
      context.shape = 'Circle';
      context.dimension_names = ['Diameter'];
      return context;
    }

    else if (shape === 'square') {
      context.shape = 'Square';
      context.dimension_names = ['Length'];
      return context;
    }

    else {
      // Ellipse. Add else if(..) in case a new object is added
      context.shape = 'Ellipse';
      context.dimension_names = ['Length', 'Width'];
      return context;
    }
  }
};

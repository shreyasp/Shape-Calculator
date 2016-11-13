module.exports = {
  calculate_area: function(shape, dimensions){
    var context = {
      shape: undefined,
      shape_properties: undefined,
      calculated_area: 0.0
    };

    if (shape === 'rectangle') {
      context.shape = shape;
      context.shape_properties = 'length of ' + dimensions.Length + ' and width of ' + dimensions.Width;
      context.calculated_area = (dimensions.Length * dimensions.Width).toFixed(3) ;
      return context;
    }

    else if (shape === 'circle') {
      context.shape = shape;
      context.shape_properties = 'diameter of ' + dimensions.Diameter;
      context.calculated_area = (Math.PI * Math.pow((dimensions.Diameter/2), 2)).toFixed(3);
      return context;
    }

    else if (shape === 'square') {
      context.shape = shape;
      context.shape_properties = 'length of ' + dimensions.Length;
      context.calculated_area = Math.pow(dimensions.Length, 2).toFixed(3);
      return context;
    }

    else {
      // Calculate area of ellipse
      context.shape = shape;
      context.shape_properties = 'length of ' + dimensions.Length + ' and width of ' + dimensions.Width;
      context.calculated_area = Math.fround(Math.PI * dimensions.Length * dimensions.Width).toFixed(3);
      return context;
    }
  }
};

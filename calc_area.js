module.exports = {
  calculate_area: function(shape, dimensions){
    var context = {
      shape: undefined,
      shape_properties: undefined,
      calculated_area: 0.0
    };

    switch (shape) {
      case 'rectangle':
        context.shape = shape;
        context.shape_properties = 'length of ' + dimensions.Length + ' and width of ' + dimensions.Width;
        context.calculated_area = (dimensions.Length * dimensions.Width);
        break;
      case 'circle':
        context.shape = shape;
        context.shape_properties = 'diameter of ' + dimensions.Diameter;
        context.calculated_area = (Math.PI * Math.pow((dimensions.Diameter/2), 2));
        break;
      case 'square':
        context.shape = shape;
        context.shape_properties = 'length of ' + dimensions.Length;
        context.calculated_area = Math.pow(dimensions.Length, 2);
        break;
      case 'ellipse':
        context.shape = shape;
        context.shape_properties = 'length of ' + dimensions.Length + ' and width of ' + dimensions.Width;
        context.calculated_area = Math.fround(Math.PI * dimensions.Length * dimensions.Width);
        break;
    }

  if(!Number.isInteger(context.calculated_area)){
    context.calculated_area = context.calculated_area.toFixed(3);
  }

    return context;
  }
};

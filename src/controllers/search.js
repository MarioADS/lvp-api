const productsList = require('../../products.json').products;

class Search {

  searchProducts (req, res){
    const filter = req.query.filter;
    const reg = new RegExp(filter, 'g')
    const result = productsList.filter( item => item.productDisplayName.match(reg) );
    if(!result) {
      return res.status(403).json({ success: false, message: 'productos no encontrados' });
    }
    return res.status(200).json({ success: true, message: 'productos encontrados', data: result });
  }

  autocomplete(req, res){
    const filter = req.query.filter;
    const reg = new RegExp(filter, 'g')
    const result = []; 
    productsList.filter( item => {
      if (item.productDisplayName.match(reg)){
        result.push(item.productDisplayName);
      }
    });
    if(result.length === 0) {
      return res.status(403).json({ success: false, message: 'no se encoentraron coincidencias' });
    }
    return res.status(200).json({ success: true, message: 'sugerencias', data: result });
  } 

}

module.exports = new Search();
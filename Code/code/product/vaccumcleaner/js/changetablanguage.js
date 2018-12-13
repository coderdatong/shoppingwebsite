/**
 * Created by 10446 on 2017/6/1.
 */
var data={productdetails: 'Product Details',
    productparameter: 'Product Parameter',
    productevaluate: 'Product Evaluate',
    buy:'Add to Cart!'};
var tab=new Vue({
	el:'.user-tab',
	data:data
});
var tabfix=new Vue({
    el:'.fixedul',
    data:data
});
var lan =localStorage.language;
		changetabLanguage(lan);
function changetabLanguage(type){
	if(type=='en-En'){
		tab.productdetails="Product Details";
		tab.productparameter="Product Parameter";
		tab.productevaluate="Product Evaluate";
		tab.buy="Add to Cart!";

        tabfix.productdetails="Product Details";
        tabfix.productparameter="Product Parameter";
        tabfix.productevaluate="Product Evaluate";
        tabfix.buy="Add to Cart!";
	}
	else if(type=='zh-Cn'){
		tab.productdetails="商品详情";
		tab.productparameter="产品参数";
		tab.productevaluate="产品评价";
		tab.buy="添加到购物车";

        tabfix.productdetails="商品详情";
        tabfix.productparameter="产品参数";
        tabfix.productevaluate="产品评价";
        tabfix.buy="添加到购物车";
	}
}

import { Heading, Page } from "@shopify/polaris";
import ProduitState from "./Components/ProduitState.js";

var initProds = [];
for(var i = 1; i <= 10; i++)
	initProds.push({
		id: i,
		name: "Produit " + i,
		quantity: i,
		description: "Description du Produit " + i,
	});


const Index = () => (
  <Page>
	<ProduitState initProduits={initProds} />
  </Page>
);

export default Index;


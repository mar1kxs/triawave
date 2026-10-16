import "./commerce-store.css";

const products = [
  { name: "Pink Object", price: "39.00", shape: "object" },
  { name: "Soft Form Tee", price: "55.00", shape: "tee" },
  { name: "Studio Block", price: "68.00", shape: "block" },
];

export function CommerceStore() {
  return <div className="commerce-hero-editor commerce-store" role="img" aria-label="Online store preview with collection banner, category filters and three products: Pink Object, Soft Form Tee and Studio Block. Catalogue and checkout, payments and delivery.">
    <div className="commerce-store-window" aria-hidden="true">
      <div className="commerce-store-toolbar"><span className="commerce-store-dots"><i /><i /><i /></span><span>Triawave / Shop</span><span className="commerce-store-live">Live</span></div>
      <div className="commerce-store-content">
        <div className="commerce-store-nav"><span>TW / Objects</span><span className="commerce-store-search">Search the store</span><span>Cart (0)</span></div>
        <div className="commerce-store-categories">{["New in", "Objects", "Apparel", "Gifts"].map(label => <span key={label}>{label}</span>)}</div>
        <div className="commerce-store-banner">
          <div className="commerce-store-banner-art"><i /><span /></div>
          <div className="commerce-store-banner-copy"><span>New collection</span><div>Form, function, favourites.</div><p>Designed for the way your customers choose.</p></div>
          <span className="commerce-store-shop">Shop now</span>
        </div>
        <div className="commerce-store-collection"><span>Shop the collection</span><span>24 products</span></div>
        <div className="commerce-store-catalogue">
          <div className="commerce-store-filters"><span>Filter by</span>{["Category", "Price", "Colour", "Availability"].map(label => <div key={label}>{label}<span>+</span></div>)}</div>
          {products.map(product => <div className="commerce-store-product" key={product.shape}>
            <div className={`commerce-store-product-art commerce-store-product-${product.shape}`}><i /><span /></div>
            <div className="commerce-store-product-name">{product.name}</div>
            <div className="commerce-store-product-price">€ {product.price}</div>
            <div className="commerce-store-product-dot" />
          </div>)}
        </div>
      </div>
    </div>
    <div className="commerce-store-tags" aria-hidden="true"><span>Catalogue &amp; checkout</span><span>Payments &amp; delivery</span></div>
  </div>;
}

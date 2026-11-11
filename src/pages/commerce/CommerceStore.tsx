import "./commerce-store.css";

export function CommerceStore() {
  return <div className="commerce-hero-editor commerce-store">
    <img className="commerce-store-art" src="/ecommerce-storefront.svg" alt="E-commerce storefront preview with product catalogue, filters and checkout-ready products" />
    <div className="commerce-store-tags" aria-hidden="true"><span>Catalogue &amp; checkout</span><span>Payments &amp; delivery</span></div>
  </div>;
}

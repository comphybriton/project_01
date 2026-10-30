# Product catalog

Catalog setup for the AGAIN development store. Product copy and bundle contents below follow the supplied product-page handoff; confirm claims, packaging, inventory, and fulfillment before using them on a production store.

## Store and status

| Property | Value |
|---|---|
| Store | `again-dev-store.myshopify.com` |
| Currency | USD (the development store's configured currency; the supplied `$` amounts were entered without conversion) |
| Handles | `the-deodorant-balm`, `the-companion`, `starter-kit` |
| Product status | Publish as active in the development store so the theme preview can load the products |

The three products were created and verified in the development store on 2026-10-30. All are active; each has one variant and one placeholder image with media status `READY`.

## Product records

| Product | Handle | Shopify product ID | Variant setup and variant ID | Product type | Price | Compare-at |
|---|---|---|---|---|---:|---:|
| The Deodorant Balm | `the-deodorant-balm` | `gid://shopify/Product/9144084889771` | Scent: Eucalyptus & Bergamot; Size: 60g; `gid://shopify/ProductVariant/48471122837675` | Deodorant Balm | $35.00 USD | — |
| The Companion | `the-companion` | `gid://shopify/Product/9144084922539` | Default single variant; `gid://shopify/ProductVariant/48471122870443` | Deodorant Accessory | $15.00 USD | — |
| The Starter Kit | `starter-kit` | `gid://shopify/Product/9144084955307` | Default single variant; `gid://shopify/ProductVariant/48471122903211` | Bundle | $45.00 USD | $50.00 USD |

Do not add speculative SKUs, barcodes, stock levels, shipping weights, or additional scent/size variants. Set those only when the merchant provides the operational values. The Starter Kit's $5 saving is the difference between the Balm ($35) and Companion ($15) prices and the kit's $45 price.

### The Deodorant Balm

**Description**

> A bicarb-free balm made for sensitive skin. It glides on clear, feels lightweight rather than sticky, and brings a fresh Eucalyptus & Bergamot scent to your daily routine. One 60g balm.

**Tags:** `again`, `deodorant`, `balm`, `eucalyptus-bergamot`, `60g`

### The Companion

**Description**

> A small solid-brass key made to fit the AGAIN balm tube. Wind it up to squeeze out every last bit, so nothing is wasted.

**Tags:** `again`, `accessory`, `companion`, `solid-brass`, `balm-tool`

### The Starter Kit

**Description**

> Everything to start your AGAIN ritual: one 60g Deodorant Balm in Eucalyptus & Bergamot and one solid-brass Companion. Together for $45, a $5 saving compared with buying both separately.

**Tags:** `again`, `starter-kit`, `bundle`, `deodorant`, `accessory`

## Variant and bundle decision

- The Balm has one purchasable variant, with the scent and size expressed as product options. This preserves the variant data needed by the product page without inventing options that are not in the brief.
- The Companion and Starter Kit each have one variant. Leave their variant option as Shopify's default single-variant option.
- Model the Starter Kit initially as one standalone fixed-kit product/variant with a $45 price and $50 compare-at price. Its physical contents are one Balm and one Companion.
- This is **not** a Shopify Bundles app component bundle: inventory is not automatically decremented from the Balm and Companion products. Fulfil the two included items against the kit order until component inventory management is explicitly configured.
- Keep the Starter Kit one-time purchase only for now. Do not claim that the Companion is supplied only on the first order of a recurring kit until the chosen subscription/bundle setup has been tested. The recurring Balm subscription remains a separate product configuration.

## Media

The handoff treats product imagery as placeholder until photography is available. Three clearly labeled temporary images are attached as each product's featured media:

- Balm: [`product-placeholder-balm.png`](../assets/product-placeholder-balm.png)
- Companion: [`product-placeholder-companion.png`](../assets/product-placeholder-companion.png)
- Starter Kit: [`product-placeholder-starter-kit.png`](../assets/product-placeholder-starter-kit.png)

Replace these development placeholders with approved product photography before launch. Do not use the logo or unrelated theme artwork as product photography.

## Creating the products in Shopify Admin

1. In Shopify Admin for `again-dev-store.myshopify.com`, open **Products** and select **Add product**.
2. Enter each title, description, product type, and tags from the sections above. Set status to **Active** in this development store.
3. For the Balm, set the two options to **Scent** = `Eucalyptus & Bergamot` and **Size** = `60g`; keep the single generated variant and set its price to `$35.00`.
4. For the Companion, keep one default variant and set its price to `$15.00`.
5. For the Starter Kit, keep one default variant, set price to `$45.00`, and set **Compare-at price** to `$50.00`. Its inventory and fulfillment must represent one Balm plus one Companion.
6. Set each handle from the table above in the product search-engine listing. Upload approved images or labeled placeholders if available.
7. Save each product, then verify its handle, variant count, price, compare-at price, product type, tags, status, and media in the Admin product list.
8. Preview each product through the development theme. Confirm the Starter Kit shows the $5 saving, and do not expose subscription controls on the Companion.

## Shopify Admin GraphQL example

The CLI can execute Admin GraphQL operations after authenticating the target store with `read_products,write_products` scopes; add `write_files` when uploading local media. This example creates the Balm product and its option values. Shopify creates the initial variant from the first value of each option, so set its price in a subsequent `productVariantsBulkUpdate` operation.

```graphql
mutation CreateBalm {
  productCreate(
    product: {
      title: "The Deodorant Balm"
      handle: "the-deodorant-balm"
      descriptionHtml: "<p>A bicarb-free balm made for sensitive skin. It glides on clear, feels lightweight rather than sticky, and brings a fresh Eucalyptus &amp; Bergamot scent to your daily routine. One 60g balm.</p>"
      productType: "Deodorant Balm"
      tags: ["again", "deodorant", "balm", "eucalyptus-bergamot", "60g"]
      status: ACTIVE
      productOptions: [
        { name: "Scent", values: [{ name: "Eucalyptus & Bergamot" }] }
        { name: "Size", values: [{ name: "60g" }] }
      ]
    }
  ) {
    product {
      id
      title
      handle
      variants(first: 1) {
        nodes {
          id
          title
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}
```

For example, the following sets the Balm variant's price after product creation:

```graphql
mutation SetBalmPrice {
  productVariantsBulkUpdate(
    productId: "gid://shopify/Product/9144084889771"
    variants: [
      {
        id: "gid://shopify/ProductVariant/48471122837675"
        price: 35.00
      }
    ]
  ) {
    productVariants {
      id
      title
      price
      compareAtPrice
    }
    userErrors {
      field
      message
    }
  }
}
```

The same mutation set the Companion to `15.00` and Starter Kit to `45.00` with `compareAtPrice: 50.00`. Check `userErrors` after every mutation and query the saved products afterward; do not retry `productCreate` blindly, since that can create duplicates.
